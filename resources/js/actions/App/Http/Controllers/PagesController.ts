import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PagesController::home
* @see app/Http/Controllers/PagesController.php:24
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::home
* @see app/Http/Controllers/PagesController.php:24
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::home
* @see app/Http/Controllers/PagesController.php:24
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::home
* @see app/Http/Controllers/PagesController.php:24
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::home
* @see app/Http/Controllers/PagesController.php:24
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::home
* @see app/Http/Controllers/PagesController.php:24
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::home
* @see app/Http/Controllers/PagesController.php:24
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \App\Http\Controllers\PagesController::contact
* @see app/Http/Controllers/PagesController.php:39
* @route '/contact'
*/
export const contact = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

contact.definition = {
    methods: ["get","head"],
    url: '/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::contact
* @see app/Http/Controllers/PagesController.php:39
* @route '/contact'
*/
contact.url = (options?: RouteQueryOptions) => {
    return contact.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::contact
* @see app/Http/Controllers/PagesController.php:39
* @route '/contact'
*/
contact.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::contact
* @see app/Http/Controllers/PagesController.php:39
* @route '/contact'
*/
contact.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::contact
* @see app/Http/Controllers/PagesController.php:39
* @route '/contact'
*/
const contactForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contact.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::contact
* @see app/Http/Controllers/PagesController.php:39
* @route '/contact'
*/
contactForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contact.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::contact
* @see app/Http/Controllers/PagesController.php:39
* @route '/contact'
*/
contactForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contact.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

contact.form = contactForm

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:34
* @route '/about/overview'
*/
export const overview = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})

overview.definition = {
    methods: ["get","head"],
    url: '/about/overview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:34
* @route '/about/overview'
*/
overview.url = (options?: RouteQueryOptions) => {
    return overview.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:34
* @route '/about/overview'
*/
overview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:34
* @route '/about/overview'
*/
overview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overview.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:34
* @route '/about/overview'
*/
const overviewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: overview.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:34
* @route '/about/overview'
*/
overviewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: overview.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:34
* @route '/about/overview'
*/
overviewForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: overview.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

overview.form = overviewForm

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:44
* @route '/about/board'
*/
export const board = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: board.url(options),
    method: 'get',
})

board.definition = {
    methods: ["get","head"],
    url: '/about/board',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:44
* @route '/about/board'
*/
board.url = (options?: RouteQueryOptions) => {
    return board.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:44
* @route '/about/board'
*/
board.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: board.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:44
* @route '/about/board'
*/
board.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: board.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:44
* @route '/about/board'
*/
const boardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: board.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:44
* @route '/about/board'
*/
boardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: board.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:44
* @route '/about/board'
*/
boardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: board.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

board.form = boardForm

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:51
* @route '/project-profile/update'
*/
export const projectUpdate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectUpdate.url(options),
    method: 'get',
})

projectUpdate.definition = {
    methods: ["get","head"],
    url: '/project-profile/update',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:51
* @route '/project-profile/update'
*/
projectUpdate.url = (options?: RouteQueryOptions) => {
    return projectUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:51
* @route '/project-profile/update'
*/
projectUpdate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectUpdate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:51
* @route '/project-profile/update'
*/
projectUpdate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projectUpdate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:51
* @route '/project-profile/update'
*/
const projectUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projectUpdate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:51
* @route '/project-profile/update'
*/
projectUpdateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projectUpdate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:51
* @route '/project-profile/update'
*/
projectUpdateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projectUpdate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

projectUpdate.form = projectUpdateForm

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:58
* @route '/project-profile/highlights'
*/
export const keyHighlights = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: keyHighlights.url(options),
    method: 'get',
})

keyHighlights.definition = {
    methods: ["get","head"],
    url: '/project-profile/highlights',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:58
* @route '/project-profile/highlights'
*/
keyHighlights.url = (options?: RouteQueryOptions) => {
    return keyHighlights.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:58
* @route '/project-profile/highlights'
*/
keyHighlights.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: keyHighlights.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:58
* @route '/project-profile/highlights'
*/
keyHighlights.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: keyHighlights.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:58
* @route '/project-profile/highlights'
*/
const keyHighlightsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: keyHighlights.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:58
* @route '/project-profile/highlights'
*/
keyHighlightsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: keyHighlights.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:58
* @route '/project-profile/highlights'
*/
keyHighlightsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: keyHighlights.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

keyHighlights.form = keyHighlightsForm

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:70
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
* @see app/Http/Controllers/PagesController.php:70
* @route '/project-profile/route-map'
*/
routeMap.url = (options?: RouteQueryOptions) => {
    return routeMap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:70
* @route '/project-profile/route-map'
*/
routeMap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: routeMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:70
* @route '/project-profile/route-map'
*/
routeMap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: routeMap.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:70
* @route '/project-profile/route-map'
*/
const routeMapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: routeMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:70
* @route '/project-profile/route-map'
*/
routeMapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: routeMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:70
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

/**
* @see \App\Http\Controllers\PagesController::photoGallery
* @see app/Http/Controllers/PagesController.php:63
* @route '/project-profile/photo-gallery'
*/
export const photoGallery = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: photoGallery.url(options),
    method: 'get',
})

photoGallery.definition = {
    methods: ["get","head"],
    url: '/project-profile/photo-gallery',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::photoGallery
* @see app/Http/Controllers/PagesController.php:63
* @route '/project-profile/photo-gallery'
*/
photoGallery.url = (options?: RouteQueryOptions) => {
    return photoGallery.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::photoGallery
* @see app/Http/Controllers/PagesController.php:63
* @route '/project-profile/photo-gallery'
*/
photoGallery.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: photoGallery.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::photoGallery
* @see app/Http/Controllers/PagesController.php:63
* @route '/project-profile/photo-gallery'
*/
photoGallery.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: photoGallery.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::photoGallery
* @see app/Http/Controllers/PagesController.php:63
* @route '/project-profile/photo-gallery'
*/
const photoGalleryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: photoGallery.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::photoGallery
* @see app/Http/Controllers/PagesController.php:63
* @route '/project-profile/photo-gallery'
*/
photoGalleryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: photoGallery.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::photoGallery
* @see app/Http/Controllers/PagesController.php:63
* @route '/project-profile/photo-gallery'
*/
photoGalleryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: photoGallery.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

photoGallery.form = photoGalleryForm

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:75
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
* @see app/Http/Controllers/PagesController.php:75
* @route '/route/station-list'
*/
stationList.url = (options?: RouteQueryOptions) => {
    return stationList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:75
* @route '/route/station-list'
*/
stationList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:75
* @route '/route/station-list'
*/
stationList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:75
* @route '/route/station-list'
*/
const stationListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:75
* @route '/route/station-list'
*/
stationListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:75
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
* @see app/Http/Controllers/PagesController.php:86
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
* @see app/Http/Controllers/PagesController.php:86
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
* @see app/Http/Controllers/PagesController.php:86
* @route '/route/station/{slug}'
*/
stationDetail.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:86
* @route '/route/station/{slug}'
*/
stationDetail.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:86
* @route '/route/station/{slug}'
*/
const stationDetailForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:86
* @route '/route/station/{slug}'
*/
stationDetailForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:86
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

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:120
* @route '/passenger-info/time-table'
*/
export const timeTable = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timeTable.url(options),
    method: 'get',
})

timeTable.definition = {
    methods: ["get","head"],
    url: '/passenger-info/time-table',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:120
* @route '/passenger-info/time-table'
*/
timeTable.url = (options?: RouteQueryOptions) => {
    return timeTable.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:120
* @route '/passenger-info/time-table'
*/
timeTable.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timeTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:120
* @route '/passenger-info/time-table'
*/
timeTable.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: timeTable.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:120
* @route '/passenger-info/time-table'
*/
const timeTableForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: timeTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:120
* @route '/passenger-info/time-table'
*/
timeTableForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: timeTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:120
* @route '/passenger-info/time-table'
*/
timeTableForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: timeTable.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

timeTable.form = timeTableForm

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:125
* @route '/passenger-info/fare-table'
*/
export const fareTable = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fareTable.url(options),
    method: 'get',
})

fareTable.definition = {
    methods: ["get","head"],
    url: '/passenger-info/fare-table',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:125
* @route '/passenger-info/fare-table'
*/
fareTable.url = (options?: RouteQueryOptions) => {
    return fareTable.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:125
* @route '/passenger-info/fare-table'
*/
fareTable.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fareTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:125
* @route '/passenger-info/fare-table'
*/
fareTable.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fareTable.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:125
* @route '/passenger-info/fare-table'
*/
const fareTableForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fareTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:125
* @route '/passenger-info/fare-table'
*/
fareTableForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fareTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:125
* @route '/passenger-info/fare-table'
*/
fareTableForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fareTable.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

fareTable.form = fareTableForm

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:130
* @route '/passenger-info/dos-and-donts'
*/
export const dosAndDonts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dosAndDonts.url(options),
    method: 'get',
})

dosAndDonts.definition = {
    methods: ["get","head"],
    url: '/passenger-info/dos-and-donts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:130
* @route '/passenger-info/dos-and-donts'
*/
dosAndDonts.url = (options?: RouteQueryOptions) => {
    return dosAndDonts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:130
* @route '/passenger-info/dos-and-donts'
*/
dosAndDonts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dosAndDonts.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:130
* @route '/passenger-info/dos-and-donts'
*/
dosAndDonts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dosAndDonts.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:130
* @route '/passenger-info/dos-and-donts'
*/
const dosAndDontsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dosAndDonts.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:130
* @route '/passenger-info/dos-and-donts'
*/
dosAndDontsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dosAndDonts.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:130
* @route '/passenger-info/dos-and-donts'
*/
dosAndDontsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dosAndDonts.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dosAndDonts.form = dosAndDontsForm

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:135
* @route '/passenger-info/items-not-to-carry'
*/
export const itemsNotToCarry = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: itemsNotToCarry.url(options),
    method: 'get',
})

itemsNotToCarry.definition = {
    methods: ["get","head"],
    url: '/passenger-info/items-not-to-carry',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:135
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarry.url = (options?: RouteQueryOptions) => {
    return itemsNotToCarry.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:135
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarry.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: itemsNotToCarry.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:135
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarry.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: itemsNotToCarry.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:135
* @route '/passenger-info/items-not-to-carry'
*/
const itemsNotToCarryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: itemsNotToCarry.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:135
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: itemsNotToCarry.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:135
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: itemsNotToCarry.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

itemsNotToCarry.form = itemsNotToCarryForm

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:140
* @route '/passenger-info/offences-and-penalties'
*/
export const offencesAndPenalties = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: offencesAndPenalties.url(options),
    method: 'get',
})

offencesAndPenalties.definition = {
    methods: ["get","head"],
    url: '/passenger-info/offences-and-penalties',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:140
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenalties.url = (options?: RouteQueryOptions) => {
    return offencesAndPenalties.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:140
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenalties.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: offencesAndPenalties.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:140
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenalties.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: offencesAndPenalties.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:140
* @route '/passenger-info/offences-and-penalties'
*/
const offencesAndPenaltiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: offencesAndPenalties.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:140
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenaltiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: offencesAndPenalties.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:140
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenaltiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: offencesAndPenalties.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

offencesAndPenalties.form = offencesAndPenaltiesForm

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:145
* @route '/passenger-info/lost-and-found'
*/
export const lostAndFound = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lostAndFound.url(options),
    method: 'get',
})

lostAndFound.definition = {
    methods: ["get","head"],
    url: '/passenger-info/lost-and-found',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:145
* @route '/passenger-info/lost-and-found'
*/
lostAndFound.url = (options?: RouteQueryOptions) => {
    return lostAndFound.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:145
* @route '/passenger-info/lost-and-found'
*/
lostAndFound.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lostAndFound.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:145
* @route '/passenger-info/lost-and-found'
*/
lostAndFound.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lostAndFound.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:145
* @route '/passenger-info/lost-and-found'
*/
const lostAndFoundForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: lostAndFound.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:145
* @route '/passenger-info/lost-and-found'
*/
lostAndFoundForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: lostAndFound.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:145
* @route '/passenger-info/lost-and-found'
*/
lostAndFoundForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: lostAndFound.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

lostAndFound.form = lostAndFoundForm

/**
* @see \App\Http\Controllers\PagesController::customerService
* @see app/Http/Controllers/PagesController.php:150
* @route '/passenger-info/customer-service'
*/
export const customerService = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: customerService.url(options),
    method: 'get',
})

customerService.definition = {
    methods: ["get","head"],
    url: '/passenger-info/customer-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::customerService
* @see app/Http/Controllers/PagesController.php:150
* @route '/passenger-info/customer-service'
*/
customerService.url = (options?: RouteQueryOptions) => {
    return customerService.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::customerService
* @see app/Http/Controllers/PagesController.php:150
* @route '/passenger-info/customer-service'
*/
customerService.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: customerService.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::customerService
* @see app/Http/Controllers/PagesController.php:150
* @route '/passenger-info/customer-service'
*/
customerService.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: customerService.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::customerService
* @see app/Http/Controllers/PagesController.php:150
* @route '/passenger-info/customer-service'
*/
const customerServiceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: customerService.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::customerService
* @see app/Http/Controllers/PagesController.php:150
* @route '/passenger-info/customer-service'
*/
customerServiceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: customerService.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::customerService
* @see app/Http/Controllers/PagesController.php:150
* @route '/passenger-info/customer-service'
*/
customerServiceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: customerService.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

customerService.form = customerServiceForm

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:155
* @route '/passenger-info/last-mile-connectivity'
*/
export const lastMileConnectivity = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lastMileConnectivity.url(options),
    method: 'get',
})

lastMileConnectivity.definition = {
    methods: ["get","head"],
    url: '/passenger-info/last-mile-connectivity',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:155
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivity.url = (options?: RouteQueryOptions) => {
    return lastMileConnectivity.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:155
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivity.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lastMileConnectivity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:155
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivity.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lastMileConnectivity.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:155
* @route '/passenger-info/last-mile-connectivity'
*/
const lastMileConnectivityForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: lastMileConnectivity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:155
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivityForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: lastMileConnectivity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:155
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivityForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: lastMileConnectivity.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

lastMileConnectivity.form = lastMileConnectivityForm

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:160
* @route '/passenger-info/retail-fnb'
*/
export const retailFnb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: retailFnb.url(options),
    method: 'get',
})

retailFnb.definition = {
    methods: ["get","head"],
    url: '/passenger-info/retail-fnb',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:160
* @route '/passenger-info/retail-fnb'
*/
retailFnb.url = (options?: RouteQueryOptions) => {
    return retailFnb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:160
* @route '/passenger-info/retail-fnb'
*/
retailFnb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: retailFnb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:160
* @route '/passenger-info/retail-fnb'
*/
retailFnb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: retailFnb.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:160
* @route '/passenger-info/retail-fnb'
*/
const retailFnbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: retailFnb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:160
* @route '/passenger-info/retail-fnb'
*/
retailFnbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: retailFnb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:160
* @route '/passenger-info/retail-fnb'
*/
retailFnbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: retailFnb.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

retailFnb.form = retailFnbForm

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:165
* @route '/passenger-info/station-area-map'
*/
export const stationAreaMap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationAreaMap.url(options),
    method: 'get',
})

stationAreaMap.definition = {
    methods: ["get","head"],
    url: '/passenger-info/station-area-map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:165
* @route '/passenger-info/station-area-map'
*/
stationAreaMap.url = (options?: RouteQueryOptions) => {
    return stationAreaMap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:165
* @route '/passenger-info/station-area-map'
*/
stationAreaMap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationAreaMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:165
* @route '/passenger-info/station-area-map'
*/
stationAreaMap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationAreaMap.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:165
* @route '/passenger-info/station-area-map'
*/
const stationAreaMapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationAreaMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:165
* @route '/passenger-info/station-area-map'
*/
stationAreaMapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationAreaMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:165
* @route '/passenger-info/station-area-map'
*/
stationAreaMapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationAreaMap.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stationAreaMap.form = stationAreaMapForm

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:170
* @route '/passenger-info/passenger-amenities'
*/
export const passengerAmenities = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: passengerAmenities.url(options),
    method: 'get',
})

passengerAmenities.definition = {
    methods: ["get","head"],
    url: '/passenger-info/passenger-amenities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:170
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenities.url = (options?: RouteQueryOptions) => {
    return passengerAmenities.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:170
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: passengerAmenities.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:170
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: passengerAmenities.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:170
* @route '/passenger-info/passenger-amenities'
*/
const passengerAmenitiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: passengerAmenities.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:170
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenitiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: passengerAmenities.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:170
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenitiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: passengerAmenities.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

passengerAmenities.form = passengerAmenitiesForm

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

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:175
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
* @see app/Http/Controllers/PagesController.php:175
* @route '/legal/terms-and-conditions'
*/
termsAndConditions.url = (options?: RouteQueryOptions) => {
    return termsAndConditions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:175
* @route '/legal/terms-and-conditions'
*/
termsAndConditions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: termsAndConditions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:175
* @route '/legal/terms-and-conditions'
*/
termsAndConditions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: termsAndConditions.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:175
* @route '/legal/terms-and-conditions'
*/
const termsAndConditionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: termsAndConditions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:175
* @route '/legal/terms-and-conditions'
*/
termsAndConditionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: termsAndConditions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:175
* @route '/legal/terms-and-conditions'
*/
termsAndConditionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: termsAndConditions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

termsAndConditions.form = termsAndConditionsForm

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:180
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
* @see app/Http/Controllers/PagesController.php:180
* @route '/legal/privacy-policy'
*/
privacyPolicy.url = (options?: RouteQueryOptions) => {
    return privacyPolicy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:180
* @route '/legal/privacy-policy'
*/
privacyPolicy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacyPolicy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:180
* @route '/legal/privacy-policy'
*/
privacyPolicy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacyPolicy.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:180
* @route '/legal/privacy-policy'
*/
const privacyPolicyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: privacyPolicy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:180
* @route '/legal/privacy-policy'
*/
privacyPolicyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: privacyPolicy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:180
* @route '/legal/privacy-policy'
*/
privacyPolicyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: privacyPolicy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

privacyPolicy.form = privacyPolicyForm

/**
* @see \App\Http\Controllers\PagesController::policies
* @see app/Http/Controllers/PagesController.php:185
* @route '/policies'
*/
export const policies = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: policies.url(options),
    method: 'get',
})

policies.definition = {
    methods: ["get","head"],
    url: '/policies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::policies
* @see app/Http/Controllers/PagesController.php:185
* @route '/policies'
*/
policies.url = (options?: RouteQueryOptions) => {
    return policies.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::policies
* @see app/Http/Controllers/PagesController.php:185
* @route '/policies'
*/
policies.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: policies.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::policies
* @see app/Http/Controllers/PagesController.php:185
* @route '/policies'
*/
policies.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: policies.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::policies
* @see app/Http/Controllers/PagesController.php:185
* @route '/policies'
*/
const policiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: policies.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::policies
* @see app/Http/Controllers/PagesController.php:185
* @route '/policies'
*/
policiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: policies.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::policies
* @see app/Http/Controllers/PagesController.php:185
* @route '/policies'
*/
policiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: policies.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

policies.form = policiesForm

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:100
* @route '/environment/eia-reports'
*/
export const eiaReports = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eiaReports.url(options),
    method: 'get',
})

eiaReports.definition = {
    methods: ["get","head"],
    url: '/environment/eia-reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:100
* @route '/environment/eia-reports'
*/
eiaReports.url = (options?: RouteQueryOptions) => {
    return eiaReports.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:100
* @route '/environment/eia-reports'
*/
eiaReports.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eiaReports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:100
* @route '/environment/eia-reports'
*/
eiaReports.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eiaReports.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:100
* @route '/environment/eia-reports'
*/
const eiaReportsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eiaReports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:100
* @route '/environment/eia-reports'
*/
eiaReportsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eiaReports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:100
* @route '/environment/eia-reports'
*/
eiaReportsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eiaReports.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

eiaReports.form = eiaReportsForm

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:105
* @route '/environment/carbon-credit'
*/
export const carbonCredit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: carbonCredit.url(options),
    method: 'get',
})

carbonCredit.definition = {
    methods: ["get","head"],
    url: '/environment/carbon-credit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:105
* @route '/environment/carbon-credit'
*/
carbonCredit.url = (options?: RouteQueryOptions) => {
    return carbonCredit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:105
* @route '/environment/carbon-credit'
*/
carbonCredit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: carbonCredit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:105
* @route '/environment/carbon-credit'
*/
carbonCredit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: carbonCredit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:105
* @route '/environment/carbon-credit'
*/
const carbonCreditForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: carbonCredit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:105
* @route '/environment/carbon-credit'
*/
carbonCreditForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: carbonCredit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:105
* @route '/environment/carbon-credit'
*/
carbonCreditForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: carbonCredit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

carbonCredit.form = carbonCreditForm

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:110
* @route '/environment/art-from-scrap'
*/
export const artFromScrap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: artFromScrap.url(options),
    method: 'get',
})

artFromScrap.definition = {
    methods: ["get","head"],
    url: '/environment/art-from-scrap',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:110
* @route '/environment/art-from-scrap'
*/
artFromScrap.url = (options?: RouteQueryOptions) => {
    return artFromScrap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:110
* @route '/environment/art-from-scrap'
*/
artFromScrap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: artFromScrap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:110
* @route '/environment/art-from-scrap'
*/
artFromScrap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: artFromScrap.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:110
* @route '/environment/art-from-scrap'
*/
const artFromScrapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: artFromScrap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:110
* @route '/environment/art-from-scrap'
*/
artFromScrapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: artFromScrap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:110
* @route '/environment/art-from-scrap'
*/
artFromScrapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: artFromScrap.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

artFromScrap.form = artFromScrapForm

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:115
* @route '/environment/green-initiatives'
*/
export const greenInitiatives = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: greenInitiatives.url(options),
    method: 'get',
})

greenInitiatives.definition = {
    methods: ["get","head"],
    url: '/environment/green-initiatives',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:115
* @route '/environment/green-initiatives'
*/
greenInitiatives.url = (options?: RouteQueryOptions) => {
    return greenInitiatives.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:115
* @route '/environment/green-initiatives'
*/
greenInitiatives.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: greenInitiatives.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:115
* @route '/environment/green-initiatives'
*/
greenInitiatives.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: greenInitiatives.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:115
* @route '/environment/green-initiatives'
*/
const greenInitiativesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: greenInitiatives.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:115
* @route '/environment/green-initiatives'
*/
greenInitiativesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: greenInitiatives.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:115
* @route '/environment/green-initiatives'
*/
greenInitiativesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: greenInitiatives.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

greenInitiatives.form = greenInitiativesForm

const PagesController = { home, contact, overview, board, projectUpdate, keyHighlights, routeMap, photoGallery, stationList, stationDetail, timeTable, fareTable, dosAndDonts, itemsNotToCarry, offencesAndPenalties, lostAndFound, customerService, lastMileConnectivity, retailFnb, stationAreaMap, passengerAmenities, stationRetail, nonFareBusinessRevenue, stationFullNamingSemiNamingOpportunities, stationInternalAdvertising, termsAndConditions, privacyPolicy, policies, eiaReports, carbonCredit, artFromScrap, greenInitiatives }

export default PagesController