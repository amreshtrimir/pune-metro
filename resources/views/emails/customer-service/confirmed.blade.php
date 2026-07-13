<x-mail::message>
# We received your feedback

Hi {{ $submission->name }},

Thank you for sharing your feedback with Pune Metro Line 3. We received your submission and will get back to you shortly if follow-up is required.

**Submitted details:**

- **Name:** {{ $submission->name }}
- **Mobile:** {{ $submission->mobile }}
- **Email:** {{ $submission->email }}
- **Type of Feedback:** {{ $submission->subject }}

<x-mail::panel>
{{ $submission->message }}
</x-mail::panel>

If you need to share additional information, you can reply to this email.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
