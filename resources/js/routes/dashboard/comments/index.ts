import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Blog\CommentController::index
* @see app/Http/Controllers/Blog/CommentController.php:15
* @route '/dashboard/comments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/comments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Blog\CommentController::index
* @see app/Http/Controllers/Blog/CommentController.php:15
* @route '/dashboard/comments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\CommentController::index
* @see app/Http/Controllers/Blog/CommentController.php:15
* @route '/dashboard/comments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\CommentController::index
* @see app/Http/Controllers/Blog/CommentController.php:15
* @route '/dashboard/comments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Blog\CommentController::index
* @see app/Http/Controllers/Blog/CommentController.php:15
* @route '/dashboard/comments'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\CommentController::index
* @see app/Http/Controllers/Blog/CommentController.php:15
* @route '/dashboard/comments'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Blog\CommentController::index
* @see app/Http/Controllers/Blog/CommentController.php:15
* @route '/dashboard/comments'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Blog\CommentController::moderate
* @see app/Http/Controllers/Blog/CommentController.php:28
* @route '/dashboard/comments/{comment}/moderate'
*/
export const moderate = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: moderate.url(args, options),
    method: 'patch',
})

moderate.definition = {
    methods: ["patch"],
    url: '/dashboard/comments/{comment}/moderate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Blog\CommentController::moderate
* @see app/Http/Controllers/Blog/CommentController.php:28
* @route '/dashboard/comments/{comment}/moderate'
*/
moderate.url = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { comment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { comment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            comment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        comment: typeof args.comment === 'object'
        ? args.comment.id
        : args.comment,
    }

    return moderate.definition.url
            .replace('{comment}', parsedArgs.comment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\CommentController::moderate
* @see app/Http/Controllers/Blog/CommentController.php:28
* @route '/dashboard/comments/{comment}/moderate'
*/
moderate.patch = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: moderate.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Blog\CommentController::moderate
* @see app/Http/Controllers/Blog/CommentController.php:28
* @route '/dashboard/comments/{comment}/moderate'
*/
const moderateForm = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: moderate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Blog\CommentController::moderate
* @see app/Http/Controllers/Blog/CommentController.php:28
* @route '/dashboard/comments/{comment}/moderate'
*/
moderateForm.patch = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: moderate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

moderate.form = moderateForm

/**
* @see \App\Http\Controllers\Blog\CommentController::destroy
* @see app/Http/Controllers/Blog/CommentController.php:35
* @route '/dashboard/comments/{comment}'
*/
export const destroy = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/comments/{comment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Blog\CommentController::destroy
* @see app/Http/Controllers/Blog/CommentController.php:35
* @route '/dashboard/comments/{comment}'
*/
destroy.url = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { comment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { comment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            comment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        comment: typeof args.comment === 'object'
        ? args.comment.id
        : args.comment,
    }

    return destroy.definition.url
            .replace('{comment}', parsedArgs.comment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Blog\CommentController::destroy
* @see app/Http/Controllers/Blog/CommentController.php:35
* @route '/dashboard/comments/{comment}'
*/
destroy.delete = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Blog\CommentController::destroy
* @see app/Http/Controllers/Blog/CommentController.php:35
* @route '/dashboard/comments/{comment}'
*/
const destroyForm = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Blog\CommentController::destroy
* @see app/Http/Controllers/Blog/CommentController.php:35
* @route '/dashboard/comments/{comment}'
*/
destroyForm.delete = (args: { comment: number | { id: number } } | [comment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const comments = {
    index: Object.assign(index, index),
    moderate: Object.assign(moderate, moderate),
    destroy: Object.assign(destroy, destroy),
}

export default comments