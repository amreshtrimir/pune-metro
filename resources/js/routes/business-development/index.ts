import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:671
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
* @see app/Http/Controllers/PagesController.php:671
* @route '/business-development/station-retail'
*/
stationRetail.url = (options?: RouteQueryOptions) => {
    return stationRetail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:671
* @route '/business-development/station-retail'
*/
stationRetail.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationRetail.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:671
* @route '/business-development/station-retail'
*/
stationRetail.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationRetail.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:671
* @route '/business-development/station-retail'
*/
const stationRetailForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationRetail.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:671
* @route '/business-development/station-retail'
*/
stationRetailForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationRetail.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationRetail
* @see app/Http/Controllers/PagesController.php:671
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

const businessDevelopment = {
    stationRetail: Object.assign(stationRetail, stationRetail),
}

export default businessDevelopment