interface PageHeroBannerProps {
    src: string;
    alt: string;
}

export default function PageHeroBanner({ src, alt }: PageHeroBannerProps) {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1450px]">
                <div className="relative max-h-[240px] overflow-hidden md:max-h-[400px]">
                    <img
                        src={src}
                        alt={alt}
                        className="h-full max-h-[240px] w-full object-cover object-center md:max-h-[400px]"
                    />
                    <div className="absolute inset-0" style={{ background: '#00000036' }} />
                    <img
                        src="/banners/key-page-banners/puneri-metro-bottom-right.png"
                        alt=""
                        className="absolute right-0 bottom-0 h-auto max-h-full object-contain object-bottom"
                    />
                </div>
            </div>
        </section>
    );
}
