import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Station\StationController::index
* @see app/Http/Controllers/Station/StationController.php:19
* @route '/dashboard/stations'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/stations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Station\StationController::index
* @see app/Http/Controllers/Station/StationController.php:19
* @route '/dashboard/stations'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Station\StationController::index
* @see app/Http/Controllers/Station/StationController.php:19
* @route '/dashboard/stations'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Station\StationController::index
* @see app/Http/Controllers/Station/StationController.php:19
* @route '/dashboard/stations'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Station\StationController::index
* @see app/Http/Controllers/Station/StationController.php:19
* @route '/dashboard/stations'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Station\StationController::index
* @see app/Http/Controllers/Station/StationController.php:19
* @route '/dashboard/stations'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Station\StationController::index
* @see app/Http/Controllers/Station/StationController.php:19
* @route '/dashboard/stations'
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
* @see \App\Http\Controllers\Station\StationController::store
* @see app/Http/Controllers/Station/StationController.php:49
* @route '/dashboard/stations'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/stations',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Station\StationController::store
* @see app/Http/Controllers/Station/StationController.php:49
* @route '/dashboard/stations'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Station\StationController::store
* @see app/Http/Controllers/Station/StationController.php:49
* @route '/dashboard/stations'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Station\StationController::store
* @see app/Http/Controllers/Station/StationController.php:49
* @route '/dashboard/stations'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Station\StationController::store
* @see app/Http/Controllers/Station/StationController.php:49
* @route '/dashboard/stations'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Station\StationController::update
* @see app/Http/Controllers/Station/StationController.php:56
* @route '/dashboard/stations/{station}'
*/
export const update = (args: { station: number | { id: number } } | [station: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/stations/{station}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Station\StationController::update
* @see app/Http/Controllers/Station/StationController.php:56
* @route '/dashboard/stations/{station}'
*/
update.url = (args: { station: number | { id: number } } | [station: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { station: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { station: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            station: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        station: typeof args.station === 'object'
        ? args.station.id
        : args.station,
    }

    return update.definition.url
            .replace('{station}', parsedArgs.station.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Station\StationController::update
* @see app/Http/Controllers/Station/StationController.php:56
* @route '/dashboard/stations/{station}'
*/
update.put = (args: { station: number | { id: number } } | [station: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Station\StationController::update
* @see app/Http/Controllers/Station/StationController.php:56
* @route '/dashboard/stations/{station}'
*/
const updateForm = (args: { station: number | { id: number } } | [station: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Station\StationController::update
* @see app/Http/Controllers/Station/StationController.php:56
* @route '/dashboard/stations/{station}'
*/
updateForm.put = (args: { station: number | { id: number } } | [station: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Station\StationController::destroy
* @see app/Http/Controllers/Station/StationController.php:63
* @route '/dashboard/stations/{station}'
*/
export const destroy = (args: { station: number | { id: number } } | [station: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/stations/{station}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Station\StationController::destroy
* @see app/Http/Controllers/Station/StationController.php:63
* @route '/dashboard/stations/{station}'
*/
destroy.url = (args: { station: number | { id: number } } | [station: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { station: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { station: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            station: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        station: typeof args.station === 'object'
        ? args.station.id
        : args.station,
    }

    return destroy.definition.url
            .replace('{station}', parsedArgs.station.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Station\StationController::destroy
* @see app/Http/Controllers/Station/StationController.php:63
* @route '/dashboard/stations/{station}'
*/
destroy.delete = (args: { station: number | { id: number } } | [station: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Station\StationController::destroy
* @see app/Http/Controllers/Station/StationController.php:63
* @route '/dashboard/stations/{station}'
*/
const destroyForm = (args: { station: number | { id: number } } | [station: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Station\StationController::destroy
* @see app/Http/Controllers/Station/StationController.php:63
* @route '/dashboard/stations/{station}'
*/
destroyForm.delete = (args: { station: number | { id: number } } | [station: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Station\StationController::reorder
* @see app/Http/Controllers/Station/StationController.php:70
* @route '/dashboard/stations/reorder'
*/
export const reorder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/stations/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Station\StationController::reorder
* @see app/Http/Controllers/Station/StationController.php:70
* @route '/dashboard/stations/reorder'
*/
reorder.url = (options?: RouteQueryOptions) => {
    return reorder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Station\StationController::reorder
* @see app/Http/Controllers/Station/StationController.php:70
* @route '/dashboard/stations/reorder'
*/
reorder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Station\StationController::reorder
* @see app/Http/Controllers/Station/StationController.php:70
* @route '/dashboard/stations/reorder'
*/
const reorderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Station\StationController::reorder
* @see app/Http/Controllers/Station/StationController.php:70
* @route '/dashboard/stations/reorder'
*/
reorderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(options),
    method: 'post',
})

reorder.form = reorderForm

const stations = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    reorder: Object.assign(reorder, reorder),
}

export default stations