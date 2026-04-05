<?php

namespace App\Http\Requests\Blog;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->isAdmin() ?? false;
    }

    protected function prepareForValidation(): void
    {
        if ($this->has('sections')) {
            $sections = array_map(function (array $section): array {
                if (isset($section['content']) && is_string($section['content'])) {
                    $section['content'] = json_decode($section['content'], true) ?? [];
                }

                return $section;
            }, (array) $this->input('sections'));

            $this->merge(['sections' => $sections]);
        }
    }

    public function rules(): array
    {
        $postId = $this->route('post')?->id;

        return [
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', Rule::unique('posts', 'slug')->ignore($postId)],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'status' => ['required', Rule::in(['draft', 'published', 'scheduled'])],
            'published_at' => ['nullable', 'date'],
            'is_featured' => ['boolean'],
            'is_trending' => ['boolean'],
            'meta_title' => ['nullable', 'string', 'max:255'],
            'meta_description' => ['nullable', 'string', 'max:500'],
            'category_ids' => ['nullable', 'array'],
            'category_ids.*' => ['integer', 'exists:categories,id'],
            'featured_image_media_id' => ['nullable', 'integer', 'exists:media,id'],
            'card_image_media_id' => ['nullable', 'integer', 'exists:media,id'],
            'tags' => ['nullable', 'array'],
            'tags.*' => ['string', 'max:100'],
            'sections' => ['nullable', 'array'],
            'sections.*.type' => ['required', Rule::in(['text', 'image', 'image_text', 'gallery', 'quote'])],
            'sections.*.content' => ['required', 'array'],
            'sections.*.position' => ['required', 'integer', 'min:0'],
        ];
    }
}
