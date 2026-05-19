<?php

namespace App\Services\Board;

use App\Models\BoardMember;
use Illuminate\Database\Eloquent\Collection;

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
        return BoardMember::create($data);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function updateMember(BoardMember $member, array $data): void
    {
        $member->update($data);
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
}
