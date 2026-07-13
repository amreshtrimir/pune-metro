import { Head, router } from '@inertiajs/react';
import { type FormEvent, useState } from 'react';
import PageHeroBanner from '@/components/landing/PageHeroBanner';
import PageSectionHeading from '@/components/landing/PageSectionHeading';

type FormState = {
    name: string;
    mobile: string;
    email: string;
    subject: string;
    message: string;
    recaptcha_token: string;
};

type WindowWithRecaptcha = Window & {
    grecaptcha?: {
        getResponse: () => string;
        reset: () => void;
    };
};

const commitments = [
    'We strive to maintain the highest standards of cleanliness, safety, and accessibility across all stations and trains.',
    'Our trained staff are dedicated to courteous service, prompt assistance, and clear communication at all touchpoints.',
    'We actively listen to customer feedback and continuously improve our services based on passenger needs.',
    'Technology-driven solutions are adopted to ensure seamless ticketing, real-time information, and ease of travel.',
    'Passenger safety remains our top priority through robust systems and proactive monitoring.',
    'We are committed to inclusive services, ensuring convenience for senior citizens, women, and persons with disabilities.',
    'Transparency, accountability, and service excellence guide our day-to-day operations.',
    'Through these efforts, Pune Metro Line 3 aims to build lasting trust and deliver a world-class urban transit experience.',
];

const feedbackTypes = ['Appreciation', 'Comment', 'Complaint', 'Enquiry'];

export default function CustomerService() {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    const [formData, setFormData] = useState<FormState>({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: '',
        recaptcha_token: '',
    });
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFeedback('');
        setError('');

        const grecaptcha = (window as WindowWithRecaptcha).grecaptcha;
        const token = grecaptcha?.getResponse() ?? '';

        if (import.meta.env.PROD && siteKey && !token) {
            setError('Please complete the reCAPTCHA challenge.');
            return;
        }

        setFormData((current) => ({ ...current, recaptcha_token: token }));
        setIsSubmitting(true);

        router.post('/passenger-info/customer-service', { ...formData, recaptcha_token: token }, {
            preserveScroll: true,
            onSuccess: () => {
                setFeedback('Thank you for contacting us. We will get back to you shortly.');
                setFormData({ name: '', mobile: '', email: '', subject: '', message: '', recaptcha_token: '' });
                grecaptcha?.reset();
            },
            onError: (errors) => {
                if (typeof errors === 'object' && errors !== null) {
                    const errorMessage = typeof errors.recaptcha_token === 'string'
                        ? errors.recaptcha_token
                        : 'Something went wrong. Please check the inputs and try again.';
                    setError(errorMessage);

                    return;
                }

                setError('Something went wrong. Please check the inputs and try again.');
            },
            onFinish: () => setIsSubmitting(false),
        });
    };

    return (
        <>
            <Head>
                <title>Customer Service - Pune Metro Line 3</title>
                <meta
                    name="description"
                    content="Learn about Pune Metro Line 3's commitment to safe, reliable, and comfortable travel experience for every passenger."
                />
                {siteKey ? <script src="https://www.google.com/recaptcha/api.js" async defer></script> : null}
            </Head>

            {/* ── Hero Banner ── */}
            <PageHeroBanner
                src="/banners/about-banner/about-banner-md.png"
                srcMd="/banners/about-banner/about-banner-md.png"
                srcLg="/banners/about-banner/about-banner-lg.png"
                alt="Customer Service - Pune Metro"
            />

            {/* ── Page Title ── */}
            <section className="bg-white pt-10 pb-0 mb-5">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">
                    <PageSectionHeading lineColor="#8e8e8e">Customer Service</PageSectionHeading>
                </div>
            </section>

            {/* ── Content ── */}
            <section className="bg-white pb-8 md:pb-24">
                <div className="mx-auto max-w-[1303px] min-[1440px]:max-w-[1440px] px-6 min-[1303px]:px-8">

                    {/* Intro */}
                    <div className="mb-8 flex gap-3">
                        <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" />
                        <p className="font-inter text-sm text-black">
                            At Pune Metro Line 3, our customers are at the heart of everything we do. We are committed to providing a safe, reliable, and comfortable travel experience for every passenger. Our services are designed to be punctual, efficient, and responsive to the daily mobility needs of Pune&apos;s citizens.
                        </p>
                    </div>

                    {/* Commitments */}
                    <div className="mb-8 flex gap-3">
                        {/* <span className="block w-[3px] flex-shrink-0 self-stretch rounded-full bg-[#e8449a]" /> */}
                        <ul className="space-y-3 ml-2.5">
                            {commitments.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e8449a]" />
                                    <span className="font-inter text-sm text-black">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="mt-12 rounded-xl border border-[#f2c8e0] bg-[#fef7fb] p-6">
                        <h2 className="mb-3 font-montserrat text-base font-semibold text-black text-center">Feedback</h2>
                         <p className="font-inter text-sm text-black">
                                If you have any feedback or complaints, you can reach us on our helpline{' '}
                                <span className="font-semibold text-black">020 65525000</span>, write to us at{' '}
                                <a href="mailto:contactpunerimetro@tatarealty.in" className="font-semibold text-brand hover:underline">
                                   contactpunerimetro@tatarealty.in
                                </a>
                                , or visit our Customer Care Centre at any metro station.
                            </p>
                        {feedback && (
                            <p className="mb-4 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                                {feedback}
                            </p>
                        )}
                        {error && (
                            <p className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                {error}
                            </p>
                        )}

                        <form onSubmit={handleSubmit} className="mt-3.5 grid gap-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="cs-subject" className="font-inter text-sm font-medium text-black">
                                        Type of Feedback
                                    </label>
                                    <select
                                        id="cs-subject"
                                        name="subject"
                                        className="rounded-md border border-[#e2b8d2] bg-white px-4 py-2.5 text-sm text-black outline-none focus:border-[#e8449a]"
                                        value={formData.subject}
                                        onChange={(event) => setFormData((current) => ({ ...current, subject: event.target.value }))}
                                        required
                                    >
                                        <option value="">Select type of feedback</option>
                                        {feedbackTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="cs-name" className="font-inter text-sm font-medium text-black">
                                        Name
                                    </label>
                                    <input
                                        id="cs-name"
                                        type="text"
                                        name="name"
                                        className="rounded-md border border-[#e2b8d2] bg-white px-4 py-2.5 text-sm text-black outline-none focus:border-[#e8449a]"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="cs-mobile" className="font-inter text-sm font-medium text-black">
                                        Mobile Number
                                    </label>
                                    <input
                                        id="cs-mobile"
                                        type="tel"
                                        name="mobile"
                                        className="rounded-md border border-[#e2b8d2] bg-white px-4 py-2.5 text-sm text-black outline-none focus:border-[#e8449a]"
                                        placeholder="10 digit number (e.g. 9876543210)"
                                        value={formData.mobile}
                                        pattern="^(?:\\+91[- ]?)?[6-9][0-9]{9}$"
                                        onChange={(event) => setFormData((current) => ({ ...current, mobile: event.target.value }))}
                                        title="Indian mobile number: 10 digits starting 6-9, optional +91"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="cs-email" className="font-inter text-sm font-medium text-black">
                                        Email
                                    </label>
                                    <input
                                        id="cs-email"
                                        type="email"
                                        name="email"
                                        className="rounded-md border border-[#e2b8d2] bg-white px-4 py-2.5 text-sm text-black outline-none focus:border-[#e8449a]"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="cs-message" className="font-inter text-sm font-medium text-black">
                                    Message
                                </label>
                                <textarea
                                    id="cs-message"
                                    name="message"
                                    rows={5}
                                    className="rounded-md border border-[#e2b8d2] bg-white px-4 py-2.5 text-sm text-black outline-none focus:border-[#e8449a]"
                                    placeholder="Please share your details and query"
                                    value={formData.message}
                                    onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                                    required
                                />
                            </div>
                            {siteKey ? (
                                <div className="flex flex-col gap-1.5">
                                    <span className="font-inter text-sm font-medium text-black">Verification</span>
                                    <div className="g-recaptcha" data-sitekey={siteKey}></div>
                                </div>
                            ) : null}

                            <button
                                type="submit"
                                className="inline-flex w-fit items-center rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
