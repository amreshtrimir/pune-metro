<?php

namespace App\Services\Board;

use App\Models\BoardMember;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Arr;

class BoardMemberService
{
    /**
     * @return Collection<int, BoardMember>
     */
    public function listMembers(): Collection
    {
        return BoardMember::orderBy('sort_order')->with('media')->get();
    }

    /**
     * @return Collection<int, BoardMember>
     */
    public function getActiveMembersForFrontend(): Collection
    {
        return BoardMember::where('is_active', true)
            ->orderBy('sort_order')
            ->with('media')
            ->get();
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function createMember(array $data): BoardMember
    {
        return BoardMember::create($this->sanitizeMemberData($data));
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function updateMember(BoardMember $member, array $data): void
    {
        $member->update($this->sanitizeMemberData($data));
    }

    public function deleteMember(BoardMember $member): void
    {
        $member->delete();
    }

    /**
     * @param  array<int, int>  $orderedIds
     */
    public function reorderMembers(array $orderedIds): void
    {
        foreach ($orderedIds as $position => $id) {
            BoardMember::where('id', $id)->update(['sort_order' => $position]);
        }
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    private function sanitizeMemberData(array $data): array
    {
        $bio = Arr::get($data, 'bio');

        if (! is_string($bio)) {
            return $data;
        }

        $bioWithoutDangerousBlocks = preg_replace('/<(script|style)\b[^>]*>.*?<\/\1>/is', '', $bio) ?? $bio;
        $sanitizedBio = trim(strip_tags($bioWithoutDangerousBlocks, '<p><br><strong><em><ul><ol><li>'));
        $data['bio'] = $sanitizedBio !== '' ? $sanitizedBio : null;

        return $data;
    }
}
