import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PagesController::update
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: update.url(options),
    method: 'get',
})

update.definition = {
    methods: ["get","head"],
    url: '/project-profile/update',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::update
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::update
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
update.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: update.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::update
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
update.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: update.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::update
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: update.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::update
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
updateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: update.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::update
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
updateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\PagesController::highlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
export const highlights = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: highlights.url(options),
    method: 'get',
})

highlights.definition = {
    methods: ["get","head"],
    url: '/project-profile/highlights',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::highlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
highlights.url = (options?: RouteQueryOptions) => {
    return highlights.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::highlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
highlights.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: highlights.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::highlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
highlights.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: highlights.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::highlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
const highlightsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: highlights.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::highlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
highlightsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: highlights.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::highlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
highlightsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: highlights.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

highlights.form = highlightsForm

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:30
* @route '/project-profile/route-map'
*/
export const routeMap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: routeMap.url(options),
    method: 'get',
})

routeMap.definition = {
    methods: ["get","head"],
    url: '/project-profile/route-map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:30
* @route '/project-profile/route-map'
*/
routeMap.url = (options?: RouteQueryOptions) => {
    return routeMap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:30
* @route '/project-profile/route-map'
*/
routeMap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: routeMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:30
* @route '/project-profile/route-map'
*/
routeMap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: routeMap.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:30
* @route '/project-profile/route-map'
*/
const routeMapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: routeMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:30
* @route '/project-profile/route-map'
*/
routeMapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: routeMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:30
* @route '/project-profile/route-map'
*/
routeMapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: routeMap.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

routeMap.form = routeMapForm

const projectProfile = {
    update: Object.assign(update, update),
    highlights: Object.assign(highlights, highlights),
    routeMap: Object.assign(routeMap, routeMap),
}

export default projectProfile