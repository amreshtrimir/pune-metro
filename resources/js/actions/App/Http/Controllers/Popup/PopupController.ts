import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Popup\PopupController::index
* @see app/Http/Controllers/Popup/PopupController.php:18
* @route '/dashboard/popups'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/popups',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Popup\PopupController::index
* @see app/Http/Controllers/Popup/PopupController.php:18
* @route '/dashboard/popups'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Popup\PopupController::index
* @see app/Http/Controllers/Popup/PopupController.php:18
* @route '/dashboard/popups'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::index
* @see app/Http/Controllers/Popup/PopupController.php:18
* @route '/dashboard/popups'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::index
* @see app/Http/Controllers/Popup/PopupController.php:18
* @route '/dashboard/popups'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::index
* @see app/Http/Controllers/Popup/PopupController.php:18
* @route '/dashboard/popups'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::index
* @see app/Http/Controllers/Popup/PopupController.php:18
* @route '/dashboard/popups'
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
* @see \App\Http\Controllers\Popup\PopupController::store
* @see app/Http/Controllers/Popup/PopupController.php:26
* @route '/dashboard/popups'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/popups',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Popup\PopupController::store
* @see app/Http/Controllers/Popup/PopupController.php:26
* @route '/dashboard/popups'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Popup\PopupController::store
* @see app/Http/Controllers/Popup/PopupController.php:26
* @route '/dashboard/popups'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::store
* @see app/Http/Controllers/Popup/PopupController.php:26
* @route '/dashboard/popups'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::store
* @see app/Http/Controllers/Popup/PopupController.php:26
* @route '/dashboard/popups'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Popup\PopupController::update
* @see app/Http/Controllers/Popup/PopupController.php:33
* @route '/dashboard/popups/{popup}'
*/
export const update = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/popups/{popup}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Popup\PopupController::update
* @see app/Http/Controllers/Popup/PopupController.php:33
* @route '/dashboard/popups/{popup}'
*/
update.url = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { popup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { popup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            popup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        popup: typeof args.popup === 'object'
        ? args.popup.id
        : args.popup,
    }

    return update.definition.url
            .replace('{popup}', parsedArgs.popup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Popup\PopupController::update
* @see app/Http/Controllers/Popup/PopupController.php:33
* @route '/dashboard/popups/{popup}'
*/
update.put = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::update
* @see app/Http/Controllers/Popup/PopupController.php:33
* @route '/dashboard/popups/{popup}'
*/
const updateForm = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::update
* @see app/Http/Controllers/Popup/PopupController.php:33
* @route '/dashboard/popups/{popup}'
*/
updateForm.put = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Popup\PopupController::publish
* @see app/Http/Controllers/Popup/PopupController.php:40
* @route '/dashboard/popups/{popup}/publish'
*/
export const publish = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: publish.url(args, options),
    method: 'patch',
})

publish.definition = {
    methods: ["patch"],
    url: '/dashboard/popups/{popup}/publish',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Popup\PopupController::publish
* @see app/Http/Controllers/Popup/PopupController.php:40
* @route '/dashboard/popups/{popup}/publish'
*/
publish.url = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { popup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { popup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            popup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        popup: typeof args.popup === 'object'
        ? args.popup.id
        : args.popup,
    }

    return publish.definition.url
            .replace('{popup}', parsedArgs.popup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Popup\PopupController::publish
* @see app/Http/Controllers/Popup/PopupController.php:40
* @route '/dashboard/popups/{popup}/publish'
*/
publish.patch = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: publish.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::publish
* @see app/Http/Controllers/Popup/PopupController.php:40
* @route '/dashboard/popups/{popup}/publish'
*/
const publishForm = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: publish.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::publish
* @see app/Http/Controllers/Popup/PopupController.php:40
* @route '/dashboard/popups/{popup}/publish'
*/
publishForm.patch = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: publish.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

publish.form = publishForm

/**
* @see \App\Http\Controllers\Popup\PopupController::destroy
* @see app/Http/Controllers/Popup/PopupController.php:48
* @route '/dashboard/popups/{popup}'
*/
export const destroy = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/popups/{popup}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Popup\PopupController::destroy
* @see app/Http/Controllers/Popup/PopupController.php:48
* @route '/dashboard/popups/{popup}'
*/
destroy.url = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { popup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { popup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            popup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        popup: typeof args.popup === 'object'
        ? args.popup.id
        : args.popup,
    }

    return destroy.definition.url
            .replace('{popup}', parsedArgs.popup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Popup\PopupController::destroy
* @see app/Http/Controllers/Popup/PopupController.php:48
* @route '/dashboard/popups/{popup}'
*/
destroy.delete = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::destroy
* @see app/Http/Controllers/Popup/PopupController.php:48
* @route '/dashboard/popups/{popup}'
*/
const destroyForm = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Popup\PopupController::destroy
* @see app/Http/Controllers/Popup/PopupController.php:48
* @route '/dashboard/popups/{popup}'
*/
destroyForm.delete = (args: { popup: string | number | { id: string | number } } | [popup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const PopupController = { index, store, update, publish, destroy }

export default PopupController