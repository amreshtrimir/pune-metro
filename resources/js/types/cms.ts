export type MediaVariant = {
    id: number;
    media_id: number;
    width: number;
    height: number;
    file_path: string;
    url: string;
    created_at: string;
    updated_at: string;
};

export type Media = {
    id: number;
    file_name: string;
    file_path: string;
    file_type: string;
    file_size: number;
    uploaded_by: number;
    module: string | null;
    url: string;
    variants: MediaVariant[];
    created_at: string;
    updated_at: string;
};

export type MediaDimension = {
    id: number;
    name: string;
    width: number;
    height: number;
    module: string | null;
};

export type SelectedMedia = {
    media_id: number;
    variant: {
        width: number;
        height: number;
        file_path: string;
        url?: string;
    };
};

export type SectionType = 'text' | 'image' | 'image_text' | 'gallery' | 'quote';

export type TextContent = { text: string };
export type ImageContent = { media_id: number; variant: { width: number; height: number; file_path: string } };
export type ImageTextContent = { media_id: number; text: string };
export type GalleryContent = { items: Array<{ media_id: number; variant: { width: number; height: number; file_path: string } }> };
export type QuoteContent = { text: string; author: string };

export type SectionContent = TextContent | ImageContent | ImageTextContent | GalleryContent | QuoteContent;

export type PostSection = {
    id?: number;
    post_id?: number;
    type: SectionType;
    content: SectionContent;
    position: number;
};

export type Category = {
    id: number;
    name: string;
    slug: string;
    description?: string;
};

export type Tag = {
    id: number;
    name: string;
    slug: string;
};

export type Comment = {
    id: number;
    post_id: number;
    author_name: string;
    author_email: string;
    body: string;
    status: 'pending' | 'approved' | 'rejected';
    created_at: string;
    updated_at: string;
    post?: Pick<Post, 'id' | 'title' | 'slug'>;
};

export type PostStatus = 'draft' | 'published' | 'scheduled';

export type Post = {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    status: PostStatus;
    published_at: string | null;
    is_featured: boolean;
    is_trending: boolean;
    user_id: number;
    featured_image_media_id: number | null;
    card_image_media_id: number | null;
    featured_image?: Media | null;
    card_image?: Media | null;
    meta_title: string | null;
    meta_description: string | null;
    author?: { id: number; name: string };
    sections?: PostSection[];
    categories?: Category[];
    tags?: Tag[];
    comments?: Comment[];
    views_count?: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string | null;
};

export type PaginatedData<T> = {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    links: Array<{ url: string | null; label: string; active: boolean }>;
};
