<?php

namespace App\Http\Requests\Faq;

use Illuminate\Foundation\Http\FormRequest;

class BulkFaqsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->isAdmin() ?? false;
    }

    public function rules(): array
    {
        return [
            'faq_ids' => ['required', 'array', 'min:1'],
            'faq_ids.*' => ['integer', 'exists:faqs,id'],
        ];
    }
}
