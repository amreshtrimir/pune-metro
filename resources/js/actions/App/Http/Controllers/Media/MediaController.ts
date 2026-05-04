import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Media\MediaController::index
* @see app/Http/Controllers/Media/MediaController.php:20
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
* @see app/Http/Controllers/Media/MediaController.php:20
* @route '/dashboard/media'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Media\MediaController::index
* @see app/Http/Controllers/Media/MediaController.php:20
* @route '/dashboard/media'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::index
* @see app/Http/Controllers/Media/MediaController.php:20
* @route '/dashboard/media'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Media\MediaController::index
* @see app/Http/Controllers/Media/MediaController.php:20
* @route '/dashboard/media'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::index
* @see app/Http/Controllers/Media/MediaController.php:20
* @route '/dashboard/media'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::index
* @see app/Http/Controllers/Media/MediaController.php:20
* @route '/dashboard/media'
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
* @see \App\Http\Controllers\Media\MediaController::store
* @see app/Http/Controllers/Media/MediaController.php:37
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
* @see app/Http/Controllers/Media/MediaController.php:37
* @route '/dashboard/media'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Media\MediaController::store
* @see app/Http/Controllers/Media/MediaController.php:37
* @route '/dashboard/media'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Media\MediaController::store
* @see app/Http/Controllers/Media/MediaController.php:37
* @route '/dashboard/media'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Media\MediaController::store
* @see app/Http/Controllers/Media/MediaController.php:37
* @route '/dashboard/media'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Media\MediaController::dimensions
* @see app/Http/Controllers/Media/MediaController.php:85
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
* @see app/Http/Controllers/Media/MediaController.php:85
* @route '/dashboard/media/dimensions'
*/
dimensions.url = (options?: RouteQueryOptions) => {
    return dimensions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Media\MediaController::dimensions
* @see app/Http/Controllers/Media/MediaController.php:85
* @route '/dashboard/media/dimensions'
*/
dimensions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dimensions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::dimensions
* @see app/Http/Controllers/Media/MediaController.php:85
* @route '/dashboard/media/dimensions'
*/
dimensions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dimensions.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Media\MediaController::dimensions
* @see app/Http/Controllers/Media/MediaController.php:85
* @route '/dashboard/media/dimensions'
*/
const dimensionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dimensions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::dimensions
* @see app/Http/Controllers/Media/MediaController.php:85
* @route '/dashboard/media/dimensions'
*/
dimensionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dimensions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::dimensions
* @see app/Http/Controllers/Media/MediaController.php:85
* @route '/dashboard/media/dimensions'
*/
dimensionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dimensions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dimensions.form = dimensionsForm

/**
* @see \App\Http\Controllers\Media\MediaController::show
* @see app/Http/Controllers/Media/MediaController.php:59
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
* @see app/Http/Controllers/Media/MediaController.php:59
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
* @see app/Http/Controllers/Media/MediaController.php:59
* @route '/dashboard/media/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::show
* @see app/Http/Controllers/Media/MediaController.php:59
* @route '/dashboard/media/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Media\MediaController::show
* @see app/Http/Controllers/Media/MediaController.php:59
* @route '/dashboard/media/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::show
* @see app/Http/Controllers/Media/MediaController.php:59
* @route '/dashboard/media/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::show
* @see app/Http/Controllers/Media/MediaController.php:59
* @route '/dashboard/media/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Media\MediaController::usages
* @see app/Http/Controllers/Media/MediaController.php:66
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
* @see app/Http/Controllers/Media/MediaController.php:66
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
* @see app/Http/Controllers/Media/MediaController.php:66
* @route '/dashboard/media/{id}/usages'
*/
usages.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: usages.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::usages
* @see app/Http/Controllers/Media/MediaController.php:66
* @route '/dashboard/media/{id}/usages'
*/
usages.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: usages.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Media\MediaController::usages
* @see app/Http/Controllers/Media/MediaController.php:66
* @route '/dashboard/media/{id}/usages'
*/
const usagesForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: usages.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::usages
* @see app/Http/Controllers/Media/MediaController.php:66
* @route '/dashboard/media/{id}/usages'
*/
usagesForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: usages.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Media\MediaController::usages
* @see app/Http/Controllers/Media/MediaController.php:66
* @route '/dashboard/media/{id}/usages'
*/
usagesForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: usages.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

usages.form = usagesForm

/**
* @see \App\Http\Controllers\Media\MediaController::update
* @see app/Http/Controllers/Media/MediaController.php:71
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
* @see app/Http/Controllers/Media/MediaController.php:71
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
* @see app/Http/Controllers/Media/MediaController.php:71
* @route '/dashboard/media/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Media\MediaController::update
* @see app/Http/Controllers/Media/MediaController.php:71
* @route '/dashboard/media/{id}'
*/
const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Media\MediaController::update
* @see app/Http/Controllers/Media/MediaController.php:71
* @route '/dashboard/media/{id}'
*/
updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Media\MediaController::destroy
* @see app/Http/Controllers/Media/MediaController.php:78
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
* @see app/Http/Controllers/Media/MediaController.php:78
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
* @see app/Http/Controllers/Media/MediaController.php:78
* @route '/dashboard/media/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Media\MediaController::destroy
* @see app/Http/Controllers/Media/MediaController.php:78
* @route '/dashboard/media/{id}'
*/
const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Media\MediaController::destroy
* @see app/Http/Controllers/Media/MediaController.php:78
* @route '/dashboard/media/{id}'
*/
destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const MediaController = { index, store, dimensions, show, usages, update, destroy }

export default MediaController