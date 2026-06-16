import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
import images from './images'
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

const galleryAlbums = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    images: Object.assign(images, images),
}

export default galleryAlbums