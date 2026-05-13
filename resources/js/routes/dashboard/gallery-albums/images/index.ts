import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::store
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:57
* @route '/dashboard/gallery-albums/{galleryAlbum}/images'
*/
export const store = (args: { galleryAlbum: number | { id: number } } | [galleryAlbum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
store.url = (args: { galleryAlbum: number | { id: number } } | [galleryAlbum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
store.post = (args: { galleryAlbum: number | { id: number } } | [galleryAlbum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::store
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:57
* @route '/dashboard/gallery-albums/{galleryAlbum}/images'
*/
const storeForm = (args: { galleryAlbum: number | { id: number } } | [galleryAlbum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::store
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:57
* @route '/dashboard/gallery-albums/{galleryAlbum}/images'
*/
storeForm.post = (args: { galleryAlbum: number | { id: number } } | [galleryAlbum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::update
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
export const update = (args: { galleryAlbum: number | { id: number }, image: number | { id: number } } | [galleryAlbum: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/{image}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::update
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
update.url = (args: { galleryAlbum: number | { id: number }, image: number | { id: number } } | [galleryAlbum: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions) => {
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
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
update.put = (args: { galleryAlbum: number | { id: number }, image: number | { id: number } } | [galleryAlbum: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::update
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
const updateForm = (args: { galleryAlbum: number | { id: number }, image: number | { id: number } } | [galleryAlbum: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::update
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
updateForm.put = (args: { galleryAlbum: number | { id: number }, image: number | { id: number } } | [galleryAlbum: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroy
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:71
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
export const destroy = (args: { galleryAlbum: number | { id: number }, image: number | { id: number } } | [galleryAlbum: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/{image}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroy
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:71
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
destroy.url = (args: { galleryAlbum: number | { id: number }, image: number | { id: number } } | [galleryAlbum: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions) => {
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
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:71
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
destroy.delete = (args: { galleryAlbum: number | { id: number }, image: number | { id: number } } | [galleryAlbum: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroy
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:71
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
const destroyForm = (args: { galleryAlbum: number | { id: number }, image: number | { id: number } } | [galleryAlbum: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroy
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:71
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
destroyForm.delete = (args: { galleryAlbum: number | { id: number }, image: number | { id: number } } | [galleryAlbum: number | { id: number }, image: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::reorder
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:78
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
export const reorder = (args: { galleryAlbum: number | { id: number } } | [galleryAlbum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::reorder
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:78
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
reorder.url = (args: { galleryAlbum: number | { id: number } } | [galleryAlbum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:78
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
reorder.post = (args: { galleryAlbum: number | { id: number } } | [galleryAlbum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::reorder
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:78
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
const reorderForm = (args: { galleryAlbum: number | { id: number } } | [galleryAlbum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::reorder
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:78
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
reorderForm.post = (args: { galleryAlbum: number | { id: number } } | [galleryAlbum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

reorder.form = reorderForm

const images = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    reorder: Object.assign(reorder, reorder),
}

export default images