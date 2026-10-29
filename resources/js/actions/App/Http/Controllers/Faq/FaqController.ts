import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Faq\FaqController::index
* @see app/Http/Controllers/Faq/FaqController.php:20
* @route '/dashboard/faqs'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/faqs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faq\FaqController::index
* @see app/Http/Controllers/Faq/FaqController.php:20
* @route '/dashboard/faqs'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faq\FaqController::index
* @see app/Http/Controllers/Faq/FaqController.php:20
* @route '/dashboard/faqs'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::index
* @see app/Http/Controllers/Faq/FaqController.php:20
* @route '/dashboard/faqs'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::index
* @see app/Http/Controllers/Faq/FaqController.php:20
* @route '/dashboard/faqs'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::index
* @see app/Http/Controllers/Faq/FaqController.php:20
* @route '/dashboard/faqs'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::index
* @see app/Http/Controllers/Faq/FaqController.php:20
* @route '/dashboard/faqs'
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
* @see \App\Http\Controllers\Faq\FaqController::store
* @see app/Http/Controllers/Faq/FaqController.php:33
* @route '/dashboard/faqs'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/faqs',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Faq\FaqController::store
* @see app/Http/Controllers/Faq/FaqController.php:33
* @route '/dashboard/faqs'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faq\FaqController::store
* @see app/Http/Controllers/Faq/FaqController.php:33
* @route '/dashboard/faqs'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::store
* @see app/Http/Controllers/Faq/FaqController.php:33
* @route '/dashboard/faqs'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::store
* @see app/Http/Controllers/Faq/FaqController.php:33
* @route '/dashboard/faqs'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Faq\FaqController::assign
* @see app/Http/Controllers/Faq/FaqController.php:54
* @route '/dashboard/faqs/assign'
*/
export const assign = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assign.url(options),
    method: 'post',
})

assign.definition = {
    methods: ["post"],
    url: '/dashboard/faqs/assign',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Faq\FaqController::assign
* @see app/Http/Controllers/Faq/FaqController.php:54
* @route '/dashboard/faqs/assign'
*/
assign.url = (options?: RouteQueryOptions) => {
    return assign.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faq\FaqController::assign
* @see app/Http/Controllers/Faq/FaqController.php:54
* @route '/dashboard/faqs/assign'
*/
assign.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assign.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::assign
* @see app/Http/Controllers/Faq/FaqController.php:54
* @route '/dashboard/faqs/assign'
*/
const assignForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assign.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::assign
* @see app/Http/Controllers/Faq/FaqController.php:54
* @route '/dashboard/faqs/assign'
*/
assignForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assign.url(options),
    method: 'post',
})

assign.form = assignForm

/**
* @see \App\Http\Controllers\Faq\FaqController::unassign
* @see app/Http/Controllers/Faq/FaqController.php:61
* @route '/dashboard/faqs/unassign'
*/
export const unassign = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unassign.url(options),
    method: 'post',
})

unassign.definition = {
    methods: ["post"],
    url: '/dashboard/faqs/unassign',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Faq\FaqController::unassign
* @see app/Http/Controllers/Faq/FaqController.php:61
* @route '/dashboard/faqs/unassign'
*/
unassign.url = (options?: RouteQueryOptions) => {
    return unassign.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faq\FaqController::unassign
* @see app/Http/Controllers/Faq/FaqController.php:61
* @route '/dashboard/faqs/unassign'
*/
unassign.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unassign.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::unassign
* @see app/Http/Controllers/Faq/FaqController.php:61
* @route '/dashboard/faqs/unassign'
*/
const unassignForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unassign.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::unassign
* @see app/Http/Controllers/Faq/FaqController.php:61
* @route '/dashboard/faqs/unassign'
*/
unassignForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unassign.url(options),
    method: 'post',
})

unassign.form = unassignForm

/**
* @see \App\Http\Controllers\Faq\FaqController::bulkStatus
* @see app/Http/Controllers/Faq/FaqController.php:68
* @route '/dashboard/faqs/bulk-status'
*/
export const bulkStatus = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStatus.url(options),
    method: 'post',
})

bulkStatus.definition = {
    methods: ["post"],
    url: '/dashboard/faqs/bulk-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Faq\FaqController::bulkStatus
* @see app/Http/Controllers/Faq/FaqController.php:68
* @route '/dashboard/faqs/bulk-status'
*/
bulkStatus.url = (options?: RouteQueryOptions) => {
    return bulkStatus.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faq\FaqController::bulkStatus
* @see app/Http/Controllers/Faq/FaqController.php:68
* @route '/dashboard/faqs/bulk-status'
*/
bulkStatus.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkStatus.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::bulkStatus
* @see app/Http/Controllers/Faq/FaqController.php:68
* @route '/dashboard/faqs/bulk-status'
*/
const bulkStatusForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStatus.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::bulkStatus
* @see app/Http/Controllers/Faq/FaqController.php:68
* @route '/dashboard/faqs/bulk-status'
*/
bulkStatusForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkStatus.url(options),
    method: 'post',
})

bulkStatus.form = bulkStatusForm

/**
* @see \App\Http\Controllers\Faq\FaqController::bulkDestroy
* @see app/Http/Controllers/Faq/FaqController.php:76
* @route '/dashboard/faqs'
*/
export const bulkDestroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDestroy.url(options),
    method: 'delete',
})

bulkDestroy.definition = {
    methods: ["delete"],
    url: '/dashboard/faqs',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Faq\FaqController::bulkDestroy
* @see app/Http/Controllers/Faq/FaqController.php:76
* @route '/dashboard/faqs'
*/
bulkDestroy.url = (options?: RouteQueryOptions) => {
    return bulkDestroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faq\FaqController::bulkDestroy
* @see app/Http/Controllers/Faq/FaqController.php:76
* @route '/dashboard/faqs'
*/
bulkDestroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDestroy.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::bulkDestroy
* @see app/Http/Controllers/Faq/FaqController.php:76
* @route '/dashboard/faqs'
*/
const bulkDestroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkDestroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::bulkDestroy
* @see app/Http/Controllers/Faq/FaqController.php:76
* @route '/dashboard/faqs'
*/
bulkDestroyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkDestroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

bulkDestroy.form = bulkDestroyForm

/**
* @see \App\Http\Controllers\Faq\FaqController::update
* @see app/Http/Controllers/Faq/FaqController.php:40
* @route '/dashboard/faqs/{faq}'
*/
export const update = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/faqs/{faq}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Faq\FaqController::update
* @see app/Http/Controllers/Faq/FaqController.php:40
* @route '/dashboard/faqs/{faq}'
*/
update.url = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faq: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { faq: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            faq: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        faq: typeof args.faq === 'object'
        ? args.faq.id
        : args.faq,
    }

    return update.definition.url
            .replace('{faq}', parsedArgs.faq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faq\FaqController::update
* @see app/Http/Controllers/Faq/FaqController.php:40
* @route '/dashboard/faqs/{faq}'
*/
update.put = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::update
* @see app/Http/Controllers/Faq/FaqController.php:40
* @route '/dashboard/faqs/{faq}'
*/
const updateForm = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::update
* @see app/Http/Controllers/Faq/FaqController.php:40
* @route '/dashboard/faqs/{faq}'
*/
updateForm.put = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Faq\FaqController::destroy
* @see app/Http/Controllers/Faq/FaqController.php:47
* @route '/dashboard/faqs/{faq}'
*/
export const destroy = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/faqs/{faq}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Faq\FaqController::destroy
* @see app/Http/Controllers/Faq/FaqController.php:47
* @route '/dashboard/faqs/{faq}'
*/
destroy.url = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faq: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { faq: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            faq: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        faq: typeof args.faq === 'object'
        ? args.faq.id
        : args.faq,
    }

    return destroy.definition.url
            .replace('{faq}', parsedArgs.faq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faq\FaqController::destroy
* @see app/Http/Controllers/Faq/FaqController.php:47
* @route '/dashboard/faqs/{faq}'
*/
destroy.delete = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::destroy
* @see app/Http/Controllers/Faq/FaqController.php:47
* @route '/dashboard/faqs/{faq}'
*/
const destroyForm = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Faq\FaqController::destroy
* @see app/Http/Controllers/Faq/FaqController.php:47
* @route '/dashboard/faqs/{faq}'
*/
destroyForm.delete = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const FaqController = { index, store, assign, unassign, bulkStatus, bulkDestroy, update, destroy }

export default FaqController