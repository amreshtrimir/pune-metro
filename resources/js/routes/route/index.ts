import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:47
* @route '/route/station-list'
*/
export const stationList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationList.url(options),
    method: 'get',
})

stationList.definition = {
    methods: ["get","head"],
    url: '/route/station-list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:47
* @route '/route/station-list'
*/
stationList.url = (options?: RouteQueryOptions) => {
    return stationList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:47
* @route '/route/station-list'
*/
stationList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:47
* @route '/route/station-list'
*/
stationList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:47
* @route '/route/station-list'
*/
const stationListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:47
* @route '/route/station-list'
*/
stationListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:47
* @route '/route/station-list'
*/
stationListForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationList.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stationList.form = stationListForm

const route = {
    stationList: Object.assign(stationList, stationList),
}

export default route