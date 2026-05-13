<?php

namespace App\Http\Requests\Gallery;

use Illuminate\Foundation\Http\FormRequest;

class StoreGalleryAlbumImageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->isAdmin() ?? false;
    }

    public function rules(): array
    {
        return [
            'media_id' => ['required', 'integer', 'exists:media,id'],
            'thumb_media_id' => ['nullable', 'integer', 'exists:media,id'],
        ];
    }
}
