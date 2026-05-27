import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:65
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
* @see app/Http/Controllers/PagesController.php:65
* @route '/route/station-list'
*/
stationList.url = (options?: RouteQueryOptions) => {
    return stationList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:65
* @route '/route/station-list'
*/
stationList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:65
* @route '/route/station-list'
*/
stationList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:65
* @route '/route/station-list'
*/
const stationListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:65
* @route '/route/station-list'
*/
stationListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:65
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

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:70
* @route '/route/station/{slug}'
*/
export const stationDetail = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationDetail.url(args, options),
    method: 'get',
})

stationDetail.definition = {
    methods: ["get","head"],
    url: '/route/station/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:70
* @route '/route/station/{slug}'
*/
stationDetail.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slug: args.slug,
    }

    return stationDetail.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:70
* @route '/route/station/{slug}'
*/
stationDetail.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:70
* @route '/route/station/{slug}'
*/
stationDetail.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:70
* @route '/route/station/{slug}'
*/
const stationDetailForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:70
* @route '/route/station/{slug}'
*/
stationDetailForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:70
* @route '/route/station/{slug}'
*/
stationDetailForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationDetail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stationDetail.form = stationDetailForm

const route = {
    stationList: Object.assign(stationList, stationList),
    stationDetail: Object.assign(stationDetail, stationDetail),
}

export default route