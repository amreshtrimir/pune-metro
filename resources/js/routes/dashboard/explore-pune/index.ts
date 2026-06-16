import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::index
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:19
* @route '/dashboard/explore-pune'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/explore-pune',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::index
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:19
* @route '/dashboard/explore-pune'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::index
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:19
* @route '/dashboard/explore-pune'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::index
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:19
* @route '/dashboard/explore-pune'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::index
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:19
* @route '/dashboard/explore-pune'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::index
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:19
* @route '/dashboard/explore-pune'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::index
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:19
* @route '/dashboard/explore-pune'
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
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::store
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:26
* @route '/dashboard/explore-pune'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/explore-pune',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::store
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:26
* @route '/dashboard/explore-pune'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::store
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:26
* @route '/dashboard/explore-pune'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::store
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:26
* @route '/dashboard/explore-pune'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::store
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:26
* @route '/dashboard/explore-pune'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::update
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:33
* @route '/dashboard/explore-pune/{explorePunePlace}'
*/
export const update = (args: { explorePunePlace: string | number | { id: string | number } } | [explorePunePlace: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/explore-pune/{explorePunePlace}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::update
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:33
* @route '/dashboard/explore-pune/{explorePunePlace}'
*/
update.url = (args: { explorePunePlace: string | number | { id: string | number } } | [explorePunePlace: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { explorePunePlace: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { explorePunePlace: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            explorePunePlace: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        explorePunePlace: typeof args.explorePunePlace === 'object'
        ? args.explorePunePlace.id
        : args.explorePunePlace,
    }

    return update.definition.url
            .replace('{explorePunePlace}', parsedArgs.explorePunePlace.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::update
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:33
* @route '/dashboard/explore-pune/{explorePunePlace}'
*/
update.put = (args: { explorePunePlace: string | number | { id: string | number } } | [explorePunePlace: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::update
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:33
* @route '/dashboard/explore-pune/{explorePunePlace}'
*/
const updateForm = (args: { explorePunePlace: string | number | { id: string | number } } | [explorePunePlace: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::update
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:33
* @route '/dashboard/explore-pune/{explorePunePlace}'
*/
updateForm.put = (args: { explorePunePlace: string | number | { id: string | number } } | [explorePunePlace: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::destroy
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:40
* @route '/dashboard/explore-pune/{explorePunePlace}'
*/
export const destroy = (args: { explorePunePlace: string | number | { id: string | number } } | [explorePunePlace: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/explore-pune/{explorePunePlace}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::destroy
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:40
* @route '/dashboard/explore-pune/{explorePunePlace}'
*/
destroy.url = (args: { explorePunePlace: string | number | { id: string | number } } | [explorePunePlace: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { explorePunePlace: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { explorePunePlace: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            explorePunePlace: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        explorePunePlace: typeof args.explorePunePlace === 'object'
        ? args.explorePunePlace.id
        : args.explorePunePlace,
    }

    return destroy.definition.url
            .replace('{explorePunePlace}', parsedArgs.explorePunePlace.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::destroy
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:40
* @route '/dashboard/explore-pune/{explorePunePlace}'
*/
destroy.delete = (args: { explorePunePlace: string | number | { id: string | number } } | [explorePunePlace: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::destroy
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:40
* @route '/dashboard/explore-pune/{explorePunePlace}'
*/
const destroyForm = (args: { explorePunePlace: string | number | { id: string | number } } | [explorePunePlace: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::destroy
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:40
* @route '/dashboard/explore-pune/{explorePunePlace}'
*/
destroyForm.delete = (args: { explorePunePlace: string | number | { id: string | number } } | [explorePunePlace: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::reorder
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:47
* @route '/dashboard/explore-pune/reorder'
*/
export const reorder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/explore-pune/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::reorder
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:47
* @route '/dashboard/explore-pune/reorder'
*/
reorder.url = (options?: RouteQueryOptions) => {
    return reorder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::reorder
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:47
* @route '/dashboard/explore-pune/reorder'
*/
reorder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::reorder
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:47
* @route '/dashboard/explore-pune/reorder'
*/
const reorderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExplorePune\ExplorePunePlaceController::reorder
* @see app/Http/Controllers/ExplorePune/ExplorePunePlaceController.php:47
* @route '/dashboard/explore-pune/reorder'
*/
reorderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(options),
    method: 'post',
})

reorder.form = reorderForm

const explorePune = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    reorder: Object.assign(reorder, reorder),
}

export default explorePune