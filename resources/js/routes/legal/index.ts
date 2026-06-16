import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:166
* @route '/legal/terms-and-conditions'
*/
export const termsAndConditions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: termsAndConditions.url(options),
    method: 'get',
})

termsAndConditions.definition = {
    methods: ["get","head"],
    url: '/legal/terms-and-conditions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:166
* @route '/legal/terms-and-conditions'
*/
termsAndConditions.url = (options?: RouteQueryOptions) => {
    return termsAndConditions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:166
* @route '/legal/terms-and-conditions'
*/
termsAndConditions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: termsAndConditions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:166
* @route '/legal/terms-and-conditions'
*/
termsAndConditions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: termsAndConditions.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:171
* @route '/legal/privacy-policy'
*/
export const privacyPolicy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacyPolicy.url(options),
    method: 'get',
})

privacyPolicy.definition = {
    methods: ["get","head"],
    url: '/legal/privacy-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:171
* @route '/legal/privacy-policy'
*/
privacyPolicy.url = (options?: RouteQueryOptions) => {
    return privacyPolicy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:171
* @route '/legal/privacy-policy'
*/
privacyPolicy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacyPolicy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:171
* @route '/legal/privacy-policy'
*/
privacyPolicy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacyPolicy.url(options),
    method: 'head',
})

const legal = {
    termsAndConditions: Object.assign(termsAndConditions, termsAndConditions),
    privacyPolicy: Object.assign(privacyPolicy, privacyPolicy),
}

export default legal