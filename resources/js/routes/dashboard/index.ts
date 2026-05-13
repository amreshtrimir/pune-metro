import media from './media'
import posts from './posts'
import categories from './categories'
import comments from './comments'
import sliders from './sliders'
import galleryAlbums from './gallery-albums'

const dashboard = {
    media: Object.assign(media, media),
    posts: Object.assign(posts, posts),
    categories: Object.assign(categories, categories),
    comments: Object.assign(comments, comments),
    sliders: Object.assign(sliders, sliders),
    galleryAlbums: Object.assign(galleryAlbums, galleryAlbums),
}

export default dashboard