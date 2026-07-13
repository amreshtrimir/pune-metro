<x-mail::message>
# New customer service submission received

A new customer service submission has been received on the website.

**Submitted by:** {{ $submission->name }}

| Field | Value |
| --- | --- |
| Name | {{ $submission->name }} |
| Email | {{ $submission->email }} |
| Mobile | {{ $submission->mobile }} |
| Subject | {{ $submission->subject }} |
| Status | {{ $submission->status }} |
| Message | {{ $submission->message }} |

You can review it in the admin dashboard.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
