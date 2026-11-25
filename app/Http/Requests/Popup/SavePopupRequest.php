<?php

namespace App\Http\Requests\Popup;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SavePopupRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->isAdmin() ?? false;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'media_id' => ['required', 'integer', 'exists:media,id'],
            'mobile_media_id' => ['nullable', 'integer', 'exists:media,id'],
            'page' => ['required', 'string', Rule::in(array_keys(config('faq_pages')))],
            'delay_seconds' => ['required', 'integer', 'min:0', 'max:600'],
        ];
    }

    public function messages(): array
    {
        return [
            'media_id.required' => 'Please select an image from the media library.',
        ];
    }
}
