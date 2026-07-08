import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:181
* @route '/business-development/station-retail'
*/
export const stationRetail = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationRetail.url(options),
    method: 'get',
})

stationRetail.definition = {
    methods: ["get","head"],
    url: '/business-development/station-retail',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:181
* @route '/business-development/station-retail'
*/
stationRetail.url = (options?: RouteQueryOptions) => {
    return stationRetail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:181
* @route '/business-development/station-retail'
*/
stationRetail.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationRetail.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:181
* @route '/business-development/station-retail'
*/
stationRetail.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationRetail.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:181
* @route '/business-development/station-retail'
*/
const stationRetailForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationRetail.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:181
* @route '/business-development/station-retail'
*/
stationRetailForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationRetail.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:181
* @route '/business-development/station-retail'
*/
stationRetailForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationRetail.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stationRetail.form = stationRetailForm

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:186
* @route '/business-development/non-fare-business-revenue'
*/
export const nonFareBusinessRevenue = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nonFareBusinessRevenue.url(options),
    method: 'get',
})

nonFareBusinessRevenue.definition = {
    methods: ["get","head"],
    url: '/business-development/non-fare-business-revenue',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:186
* @route '/business-development/non-fare-business-revenue'
*/
nonFareBusinessRevenue.url = (options?: RouteQueryOptions) => {
    return nonFareBusinessRevenue.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:186
* @route '/business-development/non-fare-business-revenue'
*/
nonFareBusinessRevenue.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nonFareBusinessRevenue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:186
* @route '/business-development/non-fare-business-revenue'
*/
nonFareBusinessRevenue.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: nonFareBusinessRevenue.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:186
* @route '/business-development/non-fare-business-revenue'
*/
const nonFareBusinessRevenueForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: nonFareBusinessRevenue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:186
* @route '/business-development/non-fare-business-revenue'
*/
nonFareBusinessRevenueForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: nonFareBusinessRevenue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:186
* @route '/business-development/non-fare-business-revenue'
*/
nonFareBusinessRevenueForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: nonFareBusinessRevenue.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

nonFareBusinessRevenue.form = nonFareBusinessRevenueForm

const businessDevelopment = {
    stationRetail: Object.assign(stationRetail, stationRetail),
    nonFareBusinessRevenue: Object.assign(nonFareBusinessRevenue, nonFareBusinessRevenue),
}

export default businessDevelopment