<?php

namespace App\Http\Requests\Station;

use App\Models\Station;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateStationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->isAdmin() ?? false;
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'is_active' => $this->boolean('is_active'),
            'entrances' => $this->parseJsonArray('entrances'),
            'platforms' => $this->parseJsonArray('platforms'),
            'lifts_escalators' => $this->parseJsonArray('lifts_escalators'),
            'facilities' => $this->parseJsonArray('facilities'),
            'nearby_places' => $this->parseJsonArray('nearby_places'),
            'emergency' => $this->parseJsonArray('emergency'),
            'transport' => $this->parseJsonArray('transport'),
        ]);
    }

    public function rules(): array
    {
        $station = $this->route('station');

        if (! $station instanceof Station) {
            throw new ModelNotFoundException();
        }

        return [
            'code' => ['required', 'string', 'max:32'],
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', Rule::unique('stations', 'slug')->ignore($station->id)],
            'description' => ['nullable', 'string'],
            'map_key' => ['nullable', 'string', 'max:5000'],
            'embed_map_url' => ['nullable', 'string', 'max:10000'],
            'entrances' => ['required', 'array'],
            'platforms' => ['required', 'array'],
            'lifts_escalators' => ['required', 'array'],
            'facilities' => ['required', 'array'],
            'nearby_places' => ['required', 'array'],
            'emergency' => ['required', 'array'],
            'transport' => ['required', 'array'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'is_active' => ['boolean'],
        ];
    }

    /**
     * @return array<int, mixed>
     */
    private function parseJsonArray(string $field): array
    {
        $value = $this->input($field);

        if (is_string($value) && $value === '') {
            return [];
        }

        if (is_string($value)) {
            $parsed = json_decode($value, true);

            return is_array($parsed) ? $parsed : [];
        }

        return is_array($value) ? $value : [];
    }
}
