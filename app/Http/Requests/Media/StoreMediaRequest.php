<?php

namespace App\Http\Requests\Media;

use Illuminate\Foundation\Http\FormRequest;

class StoreMediaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->isAdmin() ?? false;
    }

    public function rules(): array
    {
        return [
            'file' => ['required', 'file', 'mimes:jpeg,jpg,png,gif,webp', 'max:10240'],
            'module' => ['nullable', 'string', 'max:100'],
            'dimension_ids' => ['nullable', 'array'],
            'dimension_ids.*' => ['integer', 'exists:media_dimensions,id'],
            'custom_dimensions' => ['nullable', 'array'],
            'custom_dimensions.*.width' => ['required_with:custom_dimensions', 'integer', 'min:1', 'max:5000'],
            'custom_dimensions.*.height' => ['required_with:custom_dimensions', 'integer', 'min:1', 'max:5000'],
        ];
    }
}
