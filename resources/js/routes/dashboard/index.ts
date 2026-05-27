import media from './media'
import posts from './posts'
import categories from './categories'
import comments from './comments'
import sliders from './sliders'
import galleryAlbums from './gallery-albums'
import boardMembers from './board-members'
import explorePune from './explore-pune'

const dashboard = {
    media: Object.assign(media, media),
    posts: Object.assign(posts, posts),
    categories: Object.assign(categories, categories),
    comments: Object.assign(comments, comments),
    sliders: Object.assign(sliders, sliders),
    galleryAlbums: Object.assign(galleryAlbums, galleryAlbums),
    boardMembers: Object.assign(boardMembers, boardMembers),
    explorePune: Object.assign(explorePune, explorePune),
}

export default dashboard