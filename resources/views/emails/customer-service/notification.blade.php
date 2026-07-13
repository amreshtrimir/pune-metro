<x-mail::message>
# New feedback submission received

A new customer feedback submission has been received on the website.

**Submitted by:** {{ $submission->name }}

| Field | Value |
| --- | --- |
| Name | {{ $submission->name }} |
| Email | {{ $submission->email }} |
| Mobile | {{ $submission->mobile }} |
| Type of Feedback | {{ $submission->subject }} |
| Status | {{ $submission->status }} |
| Message | {{ $submission->message }} |

You can review it in the admin dashboard.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
