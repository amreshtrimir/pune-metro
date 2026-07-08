<?php

namespace App\Http\Requests\ExplorePune;

use Illuminate\Foundation\Http\FormRequest;

class StoreExplorePunePlaceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->isAdmin() ?? false;
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'is_active' => $this->boolean('is_active'),
        ]);
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'category' => ['required', 'string', 'max:255'],
            'nearest_station' => ['nullable', 'string', 'max:255'],
            'other_nearby_mahametro_stations' => ['nullable', 'string', 'max:500'],
            'distance_from_station' => ['nullable', 'string', 'max:255'],
            'distance_note' => ['nullable', 'string', 'max:500'],
            'about' => ['nullable', 'string'],
            'highlights' => ['nullable', 'string', 'max:500'],
            'google_maps_link' => ['nullable', 'url', 'max:1000'],
            'media_id' => ['nullable', 'integer', 'exists:media,id'],
            'fallback_bg' => ['nullable', 'string', 'max:255'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'is_active' => ['boolean'],
        ];
    }
}
