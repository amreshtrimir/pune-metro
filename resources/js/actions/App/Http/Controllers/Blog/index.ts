import PublicBlogController from './PublicBlogController'
import PostController from './PostController'
import CategoryController from './CategoryController'
import CommentController from './CommentController'

const Blog = {
    PublicBlogController: Object.assign(PublicBlogController, PublicBlogController),
    PostController: Object.assign(PostController, PostController),
    CategoryController: Object.assign(CategoryController, CategoryController),
    CommentController: Object.assign(CommentController, CommentController),
}

export default Blog