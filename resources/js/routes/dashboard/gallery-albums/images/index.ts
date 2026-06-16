import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::store
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:57
* @route '/dashboard/gallery-albums/{galleryAlbum}/images'
*/
export const store = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::store
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:57
* @route '/dashboard/gallery-albums/{galleryAlbum}/images'
*/
store.url = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { galleryAlbum: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { galleryAlbum: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            galleryAlbum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        galleryAlbum: typeof args.galleryAlbum === 'object'
        ? args.galleryAlbum.id
        : args.galleryAlbum,
    }

    return store.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::store
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:57
* @route '/dashboard/gallery-albums/{galleryAlbum}/images'
*/
store.post = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::bulkStore
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/bulk'
*/
export const bulkStore = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(args, options),
    method: 'post',
})

bulkStore.definition = {
    methods: ["post"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::bulkStore
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/bulk'
*/
bulkStore.url = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { galleryAlbum: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { galleryAlbum: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            galleryAlbum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        galleryAlbum: typeof args.galleryAlbum === 'object'
        ? args.galleryAlbum.id
        : args.galleryAlbum,
    }

    return bulkStore.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::bulkStore
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/bulk'
*/
bulkStore.post = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStore.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::update
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:77
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
export const update = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/{image}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::update
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:77
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
update.url = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            galleryAlbum: args[0],
            image: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        galleryAlbum: typeof args.galleryAlbum === 'object'
        ? args.galleryAlbum.id
        : args.galleryAlbum,
        image: typeof args.image === 'object'
        ? args.image.id
        : args.image,
    }

    return update.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace('{image}', parsedArgs.image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::update
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:77
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
update.put = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroy
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:84
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
export const destroy = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/{image}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroy
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:84
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
destroy.url = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            galleryAlbum: args[0],
            image: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        galleryAlbum: typeof args.galleryAlbum === 'object'
        ? args.galleryAlbum.id
        : args.galleryAlbum,
        image: typeof args.image === 'object'
        ? args.image.id
        : args.image,
    }

    return destroy.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace('{image}', parsedArgs.image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroy
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:84
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
destroy.delete = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::reorder
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:91
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
export const reorder = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::reorder
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:91
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
reorder.url = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { galleryAlbum: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { galleryAlbum: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            galleryAlbum: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        galleryAlbum: typeof args.galleryAlbum === 'object'
        ? args.galleryAlbum.id
        : args.galleryAlbum,
    }

    return reorder.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::reorder
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:91
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
reorder.post = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

const images = {
    store: Object.assign(store, store),
    bulkStore: Object.assign(bulkStore, bulkStore),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    reorder: Object.assign(reorder, reorder),
}

export default images