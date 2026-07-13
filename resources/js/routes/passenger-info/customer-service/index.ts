import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerServiceSubmissionController::store
* @see app/Http/Controllers/CustomerServiceSubmissionController.php:37
* @route '/passenger-info/customer-service'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/passenger-info/customer-service',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerServiceSubmissionController::store
* @see app/Http/Controllers/CustomerServiceSubmissionController.php:37
* @route '/passenger-info/customer-service'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerServiceSubmissionController::store
* @see app/Http/Controllers/CustomerServiceSubmissionController.php:37
* @route '/passenger-info/customer-service'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CustomerServiceSubmissionController::store
* @see app/Http/Controllers/CustomerServiceSubmissionController.php:37
* @route '/passenger-info/customer-service'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CustomerServiceSubmissionController::store
* @see app/Http/Controllers/CustomerServiceSubmissionController.php:37
* @route '/passenger-info/customer-service'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const customerService = {
    store: Object.assign(store, store),
}

export default customerService