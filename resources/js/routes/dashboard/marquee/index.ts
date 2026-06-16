import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::index
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:19
* @route '/dashboard/marquee'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/marquee',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::index
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:19
* @route '/dashboard/marquee'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::index
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:19
* @route '/dashboard/marquee'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::index
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:19
* @route '/dashboard/marquee'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::index
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:19
* @route '/dashboard/marquee'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::index
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:19
* @route '/dashboard/marquee'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::index
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:19
* @route '/dashboard/marquee'
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
* @see \App\Http\Controllers\Marquee\MarqueeItemController::store
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:26
* @route '/dashboard/marquee'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/marquee',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::store
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:26
* @route '/dashboard/marquee'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::store
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:26
* @route '/dashboard/marquee'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::store
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:26
* @route '/dashboard/marquee'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::store
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:26
* @route '/dashboard/marquee'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::update
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:33
* @route '/dashboard/marquee/{marqueeItem}'
*/
export const update = (args: { marqueeItem: string | number | { id: string | number } } | [marqueeItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/marquee/{marqueeItem}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::update
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:33
* @route '/dashboard/marquee/{marqueeItem}'
*/
update.url = (args: { marqueeItem: string | number | { id: string | number } } | [marqueeItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { marqueeItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { marqueeItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            marqueeItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        marqueeItem: typeof args.marqueeItem === 'object'
        ? args.marqueeItem.id
        : args.marqueeItem,
    }

    return update.definition.url
            .replace('{marqueeItem}', parsedArgs.marqueeItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::update
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:33
* @route '/dashboard/marquee/{marqueeItem}'
*/
update.put = (args: { marqueeItem: string | number | { id: string | number } } | [marqueeItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::update
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:33
* @route '/dashboard/marquee/{marqueeItem}'
*/
const updateForm = (args: { marqueeItem: string | number | { id: string | number } } | [marqueeItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::update
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:33
* @route '/dashboard/marquee/{marqueeItem}'
*/
updateForm.put = (args: { marqueeItem: string | number | { id: string | number } } | [marqueeItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Marquee\MarqueeItemController::destroy
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:40
* @route '/dashboard/marquee/{marqueeItem}'
*/
export const destroy = (args: { marqueeItem: string | number | { id: string | number } } | [marqueeItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/marquee/{marqueeItem}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::destroy
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:40
* @route '/dashboard/marquee/{marqueeItem}'
*/
destroy.url = (args: { marqueeItem: string | number | { id: string | number } } | [marqueeItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { marqueeItem: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { marqueeItem: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            marqueeItem: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        marqueeItem: typeof args.marqueeItem === 'object'
        ? args.marqueeItem.id
        : args.marqueeItem,
    }

    return destroy.definition.url
            .replace('{marqueeItem}', parsedArgs.marqueeItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::destroy
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:40
* @route '/dashboard/marquee/{marqueeItem}'
*/
destroy.delete = (args: { marqueeItem: string | number | { id: string | number } } | [marqueeItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::destroy
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:40
* @route '/dashboard/marquee/{marqueeItem}'
*/
const destroyForm = (args: { marqueeItem: string | number | { id: string | number } } | [marqueeItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::destroy
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:40
* @route '/dashboard/marquee/{marqueeItem}'
*/
destroyForm.delete = (args: { marqueeItem: string | number | { id: string | number } } | [marqueeItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Marquee\MarqueeItemController::reorder
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:47
* @route '/dashboard/marquee/reorder'
*/
export const reorder = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/marquee/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::reorder
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:47
* @route '/dashboard/marquee/reorder'
*/
reorder.url = (options?: RouteQueryOptions) => {
    return reorder.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::reorder
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:47
* @route '/dashboard/marquee/reorder'
*/
reorder.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::reorder
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:47
* @route '/dashboard/marquee/reorder'
*/
const reorderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Marquee\MarqueeItemController::reorder
* @see app/Http/Controllers/Marquee/MarqueeItemController.php:47
* @route '/dashboard/marquee/reorder'
*/
reorderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(options),
    method: 'post',
})

reorder.form = reorderForm

const marquee = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    reorder: Object.assign(reorder, reorder),
}

export default marquee