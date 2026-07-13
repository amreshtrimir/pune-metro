<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\App;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Support\Facades\Http;
use Throwable;
use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerServiceSubmissionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $isCaptchaRequired = App::environment('production') && ! blank(config('services.recaptcha.secret'));

        return [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
            'mobile' => ['required', 'string', 'max:14', 'regex:/^(?:\\+91[-\\s]?)?[6-9]\\d{9}$/'],
            'subject' => ['required', 'string', 'max:150'],
            'message' => ['required', 'string', 'max:2000'],
            'recaptcha_token' => $isCaptchaRequired ? ['required', 'string'] : ['nullable', 'string'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator): void {
            if (! App::environment('production') || blank(config('services.recaptcha.secret'))) {
                return;
            }

            if (! $this->input('recaptcha_token')) {
                $validator->errors()->add('recaptcha_token', 'Please complete the reCAPTCHA verification.');

                return;
            }

            try {
                $response = Http::asForm()
                    ->timeout(5)
                    ->post(config('services.recaptcha.endpoint'), [
                        'secret' => config('services.recaptcha.secret'),
                        'response' => $this->input('recaptcha_token'),
                        'remoteip' => $this->ip(),
                    ]);
            } catch (Throwable $exception) {
                $validator->errors()->add('recaptcha_token', 'Unable to verify reCAPTCHA right now. Please try again.');

                return;
            }

            $result = $response->json();
            if (! ($result['success'] ?? false)) {
                $validator->errors()->add('recaptcha_token', 'reCAPTCHA verification failed. Please try again.');
            }
        });
    }
}
