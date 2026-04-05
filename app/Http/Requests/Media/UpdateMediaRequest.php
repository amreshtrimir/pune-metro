<?php

namespace App\Http\Requests\Media;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateMediaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()?->isAdmin() ?? false;
    }

    public function rules(): array
    {
        return [
            'file_name' => ['required', 'string', 'max:255'],
            'module' => ['nullable', 'string', 'max:100'],
        ];
    }
}
