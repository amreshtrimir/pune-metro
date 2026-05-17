interface PageHeroBannerProps {
    src: string;
    alt: string;
    srcMd?: string;
    srcLg?: string;
}

export default function PageHeroBanner({ src, alt, srcMd, srcLg }: PageHeroBannerProps) {
    const hasResponsive = srcMd || srcLg;

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1470px] min-[1460px]:max-w-full">
                <div className="relative max-h-[240px] overflow-hidden md:max-h-[400px] min-[1460px]:max-h-none">
                    {hasResponsive ? (
                        <picture>
                            {srcLg && <source media="(min-width: 1460px)" srcSet={srcLg} />}
                            {srcMd && <source media="(max-width: 1459px)" srcSet={srcMd} />}
                            <img
                                src={srcMd ?? srcLg ?? src}
                                alt={alt}
                                className="h-full max-h-[240px] w-full object-cover object-center md:max-h-[400px] min-[1460px]:max-h-none"
                            />
                        </picture>
                    ) : (
                        <img
                            src={src}
                            alt={alt}
                            className="h-full max-h-[240px] w-full object-cover object-center md:max-h-[400px] min-[1460px]:max-h-none"
                        />
                    )}
                    <div className="absolute inset-0" style={{ background: '#00000036' }} />
                </div>
            </div>
        </section>
    );
}
