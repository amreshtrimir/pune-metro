<?php

namespace App\Http\Requests\Faq;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AssignFaqsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->isAdmin() ?? false;
    }

    public function rules(): array
    {
        return [
            'page' => ['required', 'string', Rule::in(array_keys(config('faq_pages')))],
            'faq_ids' => ['present', 'array'],
            'faq_ids.*' => ['integer', 'exists:faqs,id'],
        ];
    }
}
