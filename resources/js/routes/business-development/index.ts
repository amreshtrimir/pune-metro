import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:190
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
* @see app/Http/Controllers/PagesController.php:190
* @route '/business-development/station-retail'
*/
stationRetail.url = (options?: RouteQueryOptions) => {
    return stationRetail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:190
* @route '/business-development/station-retail'
*/
stationRetail.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationRetail.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:190
* @route '/business-development/station-retail'
*/
stationRetail.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationRetail.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:190
* @route '/business-development/station-retail'
*/
const stationRetailForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationRetail.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:190
* @route '/business-development/station-retail'
*/
stationRetailForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationRetail.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:190
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
* @see app/Http/Controllers/PagesController.php:195
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
* @see app/Http/Controllers/PagesController.php:195
* @route '/business-development/non-fare-business-revenue'
*/
nonFareBusinessRevenue.url = (options?: RouteQueryOptions) => {
    return nonFareBusinessRevenue.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:195
* @route '/business-development/non-fare-business-revenue'
*/
nonFareBusinessRevenue.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nonFareBusinessRevenue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:195
* @route '/business-development/non-fare-business-revenue'
*/
nonFareBusinessRevenue.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: nonFareBusinessRevenue.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:195
* @route '/business-development/non-fare-business-revenue'
*/
const nonFareBusinessRevenueForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: nonFareBusinessRevenue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:195
* @route '/business-development/non-fare-business-revenue'
*/
nonFareBusinessRevenueForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: nonFareBusinessRevenue.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::nonFareBusinessRevenue
* @see app/Http/Controllers/PagesController.php:195
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

/**
* @see \App\Http\Controllers\PagesController::stationFullNamingSemiNamingOpportunities
* @see app/Http/Controllers/PagesController.php:200
* @route '/business-development/station-full-naming-semi-naming-opportunities'
*/
export const stationFullNamingSemiNamingOpportunities = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationFullNamingSemiNamingOpportunities.url(options),
    method: 'get',
})

stationFullNamingSemiNamingOpportunities.definition = {
    methods: ["get","head"],
    url: '/business-development/station-full-naming-semi-naming-opportunities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::stationFullNamingSemiNamingOpportunities
* @see app/Http/Controllers/PagesController.php:200
* @route '/business-development/station-full-naming-semi-naming-opportunities'
*/
stationFullNamingSemiNamingOpportunities.url = (options?: RouteQueryOptions) => {
    return stationFullNamingSemiNamingOpportunities.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationFullNamingSemiNamingOpportunities
* @see app/Http/Controllers/PagesController.php:200
* @route '/business-development/station-full-naming-semi-naming-opportunities'
*/
stationFullNamingSemiNamingOpportunities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationFullNamingSemiNamingOpportunities.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationFullNamingSemiNamingOpportunities
* @see app/Http/Controllers/PagesController.php:200
* @route '/business-development/station-full-naming-semi-naming-opportunities'
*/
stationFullNamingSemiNamingOpportunities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationFullNamingSemiNamingOpportunities.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationFullNamingSemiNamingOpportunities
* @see app/Http/Controllers/PagesController.php:200
* @route '/business-development/station-full-naming-semi-naming-opportunities'
*/
const stationFullNamingSemiNamingOpportunitiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationFullNamingSemiNamingOpportunities.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationFullNamingSemiNamingOpportunities
* @see app/Http/Controllers/PagesController.php:200
* @route '/business-development/station-full-naming-semi-naming-opportunities'
*/
stationFullNamingSemiNamingOpportunitiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationFullNamingSemiNamingOpportunities.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationFullNamingSemiNamingOpportunities
* @see app/Http/Controllers/PagesController.php:200
* @route '/business-development/station-full-naming-semi-naming-opportunities'
*/
stationFullNamingSemiNamingOpportunitiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationFullNamingSemiNamingOpportunities.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stationFullNamingSemiNamingOpportunities.form = stationFullNamingSemiNamingOpportunitiesForm

/**
* @see \App\Http\Controllers\PagesController::stationInternalAdvertising
* @see app/Http/Controllers/PagesController.php:205
* @route '/business-development/station-internal-advertising'
*/
export const stationInternalAdvertising = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationInternalAdvertising.url(options),
    method: 'get',
})

stationInternalAdvertising.definition = {
    methods: ["get","head"],
    url: '/business-development/station-internal-advertising',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::stationInternalAdvertising
* @see app/Http/Controllers/PagesController.php:205
* @route '/business-development/station-internal-advertising'
*/
stationInternalAdvertising.url = (options?: RouteQueryOptions) => {
    return stationInternalAdvertising.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationInternalAdvertising
* @see app/Http/Controllers/PagesController.php:205
* @route '/business-development/station-internal-advertising'
*/
stationInternalAdvertising.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationInternalAdvertising.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationInternalAdvertising
* @see app/Http/Controllers/PagesController.php:205
* @route '/business-development/station-internal-advertising'
*/
stationInternalAdvertising.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationInternalAdvertising.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationInternalAdvertising
* @see app/Http/Controllers/PagesController.php:205
* @route '/business-development/station-internal-advertising'
*/
const stationInternalAdvertisingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationInternalAdvertising.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationInternalAdvertising
* @see app/Http/Controllers/PagesController.php:205
* @route '/business-development/station-internal-advertising'
*/
stationInternalAdvertisingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationInternalAdvertising.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationInternalAdvertising
* @see app/Http/Controllers/PagesController.php:205
* @route '/business-development/station-internal-advertising'
*/
stationInternalAdvertisingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationInternalAdvertising.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stationInternalAdvertising.form = stationInternalAdvertisingForm

const businessDevelopment = {
    stationRetail: Object.assign(stationRetail, stationRetail),
    nonFareBusinessRevenue: Object.assign(nonFareBusinessRevenue, nonFareBusinessRevenue),
    stationFullNamingSemiNamingOpportunities: Object.assign(stationFullNamingSemiNamingOpportunities, stationFullNamingSemiNamingOpportunities),
    stationInternalAdvertising: Object.assign(stationInternalAdvertising, stationInternalAdvertising),
}

export default businessDevelopment