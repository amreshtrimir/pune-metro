import type { PostSection, TextContent, ImageContent, ImageTextContent, GalleryContent, QuoteContent } from '@/types';

type SectionRendererProps = {
    sections: PostSection[];
};

function TextSection({ content }: { content: TextContent }) {
    return (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
            {content.text.split('\n').map((para, i) => (
                para ? <p key={i}>{para}</p> : <br key={i} />
            ))}
        </div>
    );
}

function ImageSection({ content }: { content: ImageContent }) {
    if (!content.variant?.file_path) return null;
    return (
        <figure className="my-6">
            <img
                src={`/storage/${content.variant.file_path}`}
                alt=""
                width={content.variant.width}
                height={content.variant.height}
                className="mx-auto rounded-xl object-cover"
                loading="lazy"
            />
        </figure>
    );
}

function ImageTextSection({ content }: { content: ImageTextContent }) {
    return (
        <div className="my-6 flex flex-col gap-4 sm:flex-row sm:items-start">
            {content.media_id > 0 && (
                <div className="flex-shrink-0 sm:w-1/3">
                    <img
                        src={`/storage/media/originals/${content.media_id}`}
                        alt=""
                        className="w-full rounded-xl object-cover"
                        loading="lazy"
                    />
                </div>
            )}
            <div className="prose prose-neutral dark:prose-invert flex-1 max-w-none">
                {content.text.split('\n').map((para, i) => (
                    para ? <p key={i}>{para}</p> : <br key={i} />
                ))}
            </div>
        </div>
    );
}

function GallerySection({ content }: { content: GalleryContent }) {
    if (!content.items?.length) return null;
    return (
        <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {content.items.map((item, i) => (
                <div key={i} className="overflow-hidden rounded-xl">
                    <img
                        src={`/storage/${item.variant.file_path}`}
                        alt=""
                        width={item.variant.width}
                        height={item.variant.height}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
}

function QuoteSection({ content }: { content: QuoteContent }) {
    return (
        <blockquote className="my-6 border-l-4 border-primary pl-6">
            <p className="text-lg font-medium italic text-foreground">"{content.text}"</p>
            {content.author && (
                <cite className="mt-2 block text-sm text-muted-foreground not-italic">— {content.author}</cite>
            )}
        </blockquote>
    );
}

export function SectionRenderer({ sections }: SectionRendererProps) {
    return (
        <div className="space-y-4">
            {sections.map((section, i) => {
                switch (section.type) {
                    case 'text':
                        return <TextSection key={i} content={section.content as TextContent} />;
                    case 'image':
                        return <ImageSection key={i} content={section.content as ImageContent} />;
                    case 'image_text':
                        return <ImageTextSection key={i} content={section.content as ImageTextContent} />;
                    case 'gallery':
                        return <GallerySection key={i} content={section.content as GalleryContent} />;
                    case 'quote':
                        return <QuoteSection key={i} content={section.content as QuoteContent} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
}
