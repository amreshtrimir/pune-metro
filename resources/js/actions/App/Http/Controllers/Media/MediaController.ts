import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Media\MediaController::index
* @see app/Http/Controllers/Media/MediaController.php:21
* @route '/dashboard/media'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Media\MediaController::index
* @see app/Http/Controllers/Media/MediaController.php:21
* @route '/dashboard/media'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Media\MediaController::index
* @see app/Http/Controllers/Media/MediaController.php:21
* @route '/dashboard/media'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::index
* @see app/Http/Controllers/Media/MediaController.php:21
* @route '/dashboard/media'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Media\MediaController::store
* @see app/Http/Controllers/Media/MediaController.php:40
* @route '/dashboard/media'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Media\MediaController::store
* @see app/Http/Controllers/Media/MediaController.php:40
* @route '/dashboard/media'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Media\MediaController::store
* @see app/Http/Controllers/Media/MediaController.php:40
* @route '/dashboard/media'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Media\MediaController::dimensions
* @see app/Http/Controllers/Media/MediaController.php:88
* @route '/dashboard/media/dimensions'
*/
export const dimensions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dimensions.url(options),
    method: 'get',
})

dimensions.definition = {
    methods: ["get","head"],
    url: '/dashboard/media/dimensions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Media\MediaController::dimensions
* @see app/Http/Controllers/Media/MediaController.php:88
* @route '/dashboard/media/dimensions'
*/
dimensions.url = (options?: RouteQueryOptions) => {
    return dimensions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Media\MediaController::dimensions
* @see app/Http/Controllers/Media/MediaController.php:88
* @route '/dashboard/media/dimensions'
*/
dimensions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dimensions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::dimensions
* @see app/Http/Controllers/Media/MediaController.php:88
* @route '/dashboard/media/dimensions'
*/
dimensions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dimensions.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Media\MediaController::show
* @see app/Http/Controllers/Media/MediaController.php:62
* @route '/dashboard/media/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/media/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Media\MediaController::show
* @see app/Http/Controllers/Media/MediaController.php:62
* @route '/dashboard/media/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Media\MediaController::show
* @see app/Http/Controllers/Media/MediaController.php:62
* @route '/dashboard/media/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::show
* @see app/Http/Controllers/Media/MediaController.php:62
* @route '/dashboard/media/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Media\MediaController::usages
* @see app/Http/Controllers/Media/MediaController.php:69
* @route '/dashboard/media/{id}/usages'
*/
export const usages = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: usages.url(args, options),
    method: 'get',
})

usages.definition = {
    methods: ["get","head"],
    url: '/dashboard/media/{id}/usages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Media\MediaController::usages
* @see app/Http/Controllers/Media/MediaController.php:69
* @route '/dashboard/media/{id}/usages'
*/
usages.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return usages.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Media\MediaController::usages
* @see app/Http/Controllers/Media/MediaController.php:69
* @route '/dashboard/media/{id}/usages'
*/
usages.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: usages.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::usages
* @see app/Http/Controllers/Media/MediaController.php:69
* @route '/dashboard/media/{id}/usages'
*/
usages.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: usages.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Media\MediaController::update
* @see app/Http/Controllers/Media/MediaController.php:74
* @route '/dashboard/media/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/media/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Media\MediaController::update
* @see app/Http/Controllers/Media/MediaController.php:74
* @route '/dashboard/media/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Media\MediaController::update
* @see app/Http/Controllers/Media/MediaController.php:74
* @route '/dashboard/media/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Media\MediaController::destroy
* @see app/Http/Controllers/Media/MediaController.php:81
* @route '/dashboard/media/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/media/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Media\MediaController::destroy
* @see app/Http/Controllers/Media/MediaController.php:81
* @route '/dashboard/media/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Media\MediaController::destroy
* @see app/Http/Controllers/Media/MediaController.php:81
* @route '/dashboard/media/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const MediaController = { index, store, dimensions, show, usages, update, destroy }

export default MediaController