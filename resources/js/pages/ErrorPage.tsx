import { Head, Link } from '@inertiajs/react';

interface Props {
    status: number;
}

const messages: Record<number, { title: string; description: string }> = {
    403: {
        title: 'Access Forbidden',
        description: "You don't have permission to access this page.",
    },
    404: {
        title: 'Page Not Found',
        description: "The page you're looking for doesn't exist or has been moved.",
    },
    500: {
        title: 'Server Error',
        description: 'Something went wrong on our end. Please try again later.',
    },
    503: {
        title: 'Service Unavailable',
        description: 'We are currently performing maintenance. Please check back soon.',
    },
};

export default function ErrorPage({ status }: Props) {
    const { title, description } = messages[status] ?? {
        title: 'Something Went Wrong',
        description: 'An unexpected error occurred.',
    };

    return (
        <>
            <Head title={`${status} – ${title}`} />

            <section className="flex min-h-[72vh] items-center justify-center bg-white px-6 py-20">
                <div className="mx-auto max-w-lg text-center">
                    {/* Large status code */}
                    <p
                        className="select-none font-montserrat text-[9rem] leading-none font-extrabold"
                        style={{
                            background: 'linear-gradient(135deg, #f91c91 0%, #9a0052 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {status}
                    </p>

                    {/* Metro train icon */}
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                        <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 13h2l2-8h10l2 8h2M3 13v4a1 1 0 001 1h1m14-5v4a1 1 0 01-1 1h-1M6 18h12M7 18v1a1 1 0 001 1h1m6-2v1a1 1 0 01-1 1h-1M9 9h6M9 12h6"
                            />
                        </svg>
                    </div>

                    <h1 className="mb-3 font-montserrat text-3xl font-bold text-metro-dark">{title}</h1>

                    <p className="mb-10 font-montserrat text-base text-gray-500">{description}</p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 font-montserrat text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V10" />
                        </svg>
                        Go to Homepage
                    </Link>
                </div>
            </section>
        </>
    );
}
