import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::index
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:22
* @route '/dashboard/gallery-albums'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/gallery-albums',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::index
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:22
* @route '/dashboard/gallery-albums'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::index
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:22
* @route '/dashboard/gallery-albums'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::index
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:22
* @route '/dashboard/gallery-albums'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::store
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:29
* @route '/dashboard/gallery-albums'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/gallery-albums',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::store
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:29
* @route '/dashboard/gallery-albums'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::store
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:29
* @route '/dashboard/gallery-albums'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::edit
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:36
* @route '/dashboard/gallery-albums/{galleryAlbum}/edit'
*/
export const edit = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::edit
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:36
* @route '/dashboard/gallery-albums/{galleryAlbum}/edit'
*/
edit.url = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::edit
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:36
* @route '/dashboard/gallery-albums/{galleryAlbum}/edit'
*/
edit.get = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::edit
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:36
* @route '/dashboard/gallery-albums/{galleryAlbum}/edit'
*/
edit.head = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::update
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:43
* @route '/dashboard/gallery-albums/{galleryAlbum}'
*/
export const update = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/gallery-albums/{galleryAlbum}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::update
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:43
* @route '/dashboard/gallery-albums/{galleryAlbum}'
*/
update.url = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::update
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:43
* @route '/dashboard/gallery-albums/{galleryAlbum}'
*/
update.put = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroy
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:50
* @route '/dashboard/gallery-albums/{galleryAlbum}'
*/
export const destroy = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/gallery-albums/{galleryAlbum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroy
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:50
* @route '/dashboard/gallery-albums/{galleryAlbum}'
*/
destroy.url = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroy
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:50
* @route '/dashboard/gallery-albums/{galleryAlbum}'
*/
destroy.delete = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::storeImage
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:57
* @route '/dashboard/gallery-albums/{galleryAlbum}/images'
*/
export const storeImage = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeImage.url(args, options),
    method: 'post',
})

storeImage.definition = {
    methods: ["post"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::storeImage
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:57
* @route '/dashboard/gallery-albums/{galleryAlbum}/images'
*/
storeImage.url = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return storeImage.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::storeImage
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:57
* @route '/dashboard/gallery-albums/{galleryAlbum}/images'
*/
storeImage.post = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeImage.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::bulkStoreImages
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/bulk'
*/
export const bulkStoreImages = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStoreImages.url(args, options),
    method: 'post',
})

bulkStoreImages.definition = {
    methods: ["post"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/bulk',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::bulkStoreImages
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/bulk'
*/
bulkStoreImages.url = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return bulkStoreImages.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::bulkStoreImages
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:64
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/bulk'
*/
bulkStoreImages.post = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStoreImages.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::updateImage
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:77
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
export const updateImage = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateImage.url(args, options),
    method: 'put',
})

updateImage.definition = {
    methods: ["put"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/{image}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::updateImage
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:77
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
updateImage.url = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
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

    return updateImage.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace('{image}', parsedArgs.image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::updateImage
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:77
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
updateImage.put = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateImage.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroyImage
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:84
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
export const destroyImage = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyImage.url(args, options),
    method: 'delete',
})

destroyImage.definition = {
    methods: ["delete"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/{image}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroyImage
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:84
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
destroyImage.url = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
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

    return destroyImage.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace('{image}', parsedArgs.image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::destroyImage
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:84
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/{image}'
*/
destroyImage.delete = (args: { galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number }, image: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyImage.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::reorderImages
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:91
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
export const reorderImages = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorderImages.url(args, options),
    method: 'post',
})

reorderImages.definition = {
    methods: ["post"],
    url: '/dashboard/gallery-albums/{galleryAlbum}/images/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::reorderImages
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:91
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
reorderImages.url = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return reorderImages.definition.url
            .replace('{galleryAlbum}', parsedArgs.galleryAlbum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Gallery\GalleryAlbumController::reorderImages
* @see app/Http/Controllers/Gallery/GalleryAlbumController.php:91
* @route '/dashboard/gallery-albums/{galleryAlbum}/images/reorder'
*/
reorderImages.post = (args: { galleryAlbum: string | number | { id: string | number } } | [galleryAlbum: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorderImages.url(args, options),
    method: 'post',
})

const GalleryAlbumController = { index, store, edit, update, destroy, storeImage, bulkStoreImages, updateImage, destroyImage, reorderImages }

export default GalleryAlbumController