<x-mail::message>
# We received your customer service request

Hi {{ $submission->name }},

Thank you for contacting Pune Metro Line 3. We received your request and will get back to you shortly.

**Submitted details:**

- **Name:** {{ $submission->name }}
- **Mobile:** {{ $submission->mobile }}
- **Email:** {{ $submission->email }}
- **Subject:** {{ $submission->subject }}

<x-mail::panel>
{{ $submission->message }}
</x-mail::panel>

If you need to share additional information, you can reply to this email.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
