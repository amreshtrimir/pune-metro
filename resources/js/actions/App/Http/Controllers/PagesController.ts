import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PagesController::home
* @see app/Http/Controllers/PagesController.php:22
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
* @see app/Http/Controllers/PagesController.php:22
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::home
* @see app/Http/Controllers/PagesController.php:22
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::home
* @see app/Http/Controllers/PagesController.php:22
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::contact
* @see app/Http/Controllers/PagesController.php:37
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
* @see app/Http/Controllers/PagesController.php:37
* @route '/contact'
*/
contact.url = (options?: RouteQueryOptions) => {
    return contact.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::contact
* @see app/Http/Controllers/PagesController.php:37
* @route '/contact'
*/
contact.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::contact
* @see app/Http/Controllers/PagesController.php:37
* @route '/contact'
*/
contact.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:32
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
* @see app/Http/Controllers/PagesController.php:32
* @route '/about/overview'
*/
overview.url = (options?: RouteQueryOptions) => {
    return overview.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:32
* @route '/about/overview'
*/
overview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:32
* @route '/about/overview'
*/
overview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overview.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:42
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
* @see app/Http/Controllers/PagesController.php:42
* @route '/about/board'
*/
board.url = (options?: RouteQueryOptions) => {
    return board.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:42
* @route '/about/board'
*/
board.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: board.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:42
* @route '/about/board'
*/
board.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: board.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:49
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
* @see app/Http/Controllers/PagesController.php:49
* @route '/project-profile/update'
*/
projectUpdate.url = (options?: RouteQueryOptions) => {
    return projectUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:49
* @route '/project-profile/update'
*/
projectUpdate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectUpdate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:49
* @route '/project-profile/update'
*/
projectUpdate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projectUpdate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:56
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
* @see app/Http/Controllers/PagesController.php:56
* @route '/project-profile/highlights'
*/
keyHighlights.url = (options?: RouteQueryOptions) => {
    return keyHighlights.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:56
* @route '/project-profile/highlights'
*/
keyHighlights.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: keyHighlights.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:56
* @route '/project-profile/highlights'
*/
keyHighlights.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: keyHighlights.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:68
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
* @see app/Http/Controllers/PagesController.php:68
* @route '/project-profile/route-map'
*/
routeMap.url = (options?: RouteQueryOptions) => {
    return routeMap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:68
* @route '/project-profile/route-map'
*/
routeMap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: routeMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::routeMap
* @see app/Http/Controllers/PagesController.php:68
* @route '/project-profile/route-map'
*/
routeMap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: routeMap.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::photoGallery
* @see app/Http/Controllers/PagesController.php:61
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
* @see app/Http/Controllers/PagesController.php:61
* @route '/project-profile/photo-gallery'
*/
photoGallery.url = (options?: RouteQueryOptions) => {
    return photoGallery.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::photoGallery
* @see app/Http/Controllers/PagesController.php:61
* @route '/project-profile/photo-gallery'
*/
photoGallery.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: photoGallery.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::photoGallery
* @see app/Http/Controllers/PagesController.php:61
* @route '/project-profile/photo-gallery'
*/
photoGallery.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: photoGallery.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:73
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
* @see app/Http/Controllers/PagesController.php:73
* @route '/route/station-list'
*/
stationList.url = (options?: RouteQueryOptions) => {
    return stationList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:73
* @route '/route/station-list'
*/
stationList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationList
* @see app/Http/Controllers/PagesController.php:73
* @route '/route/station-list'
*/
stationList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:78
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
* @see app/Http/Controllers/PagesController.php:78
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
* @see app/Http/Controllers/PagesController.php:78
* @route '/route/station/{slug}'
*/
stationDetail.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationDetail
* @see app/Http/Controllers/PagesController.php:78
* @route '/route/station/{slug}'
*/
stationDetail.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:111
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
* @see app/Http/Controllers/PagesController.php:111
* @route '/passenger-info/time-table'
*/
timeTable.url = (options?: RouteQueryOptions) => {
    return timeTable.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:111
* @route '/passenger-info/time-table'
*/
timeTable.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timeTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:111
* @route '/passenger-info/time-table'
*/
timeTable.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: timeTable.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:116
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
* @see app/Http/Controllers/PagesController.php:116
* @route '/passenger-info/fare-table'
*/
fareTable.url = (options?: RouteQueryOptions) => {
    return fareTable.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:116
* @route '/passenger-info/fare-table'
*/
fareTable.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fareTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:116
* @route '/passenger-info/fare-table'
*/
fareTable.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fareTable.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:121
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
* @see app/Http/Controllers/PagesController.php:121
* @route '/passenger-info/dos-and-donts'
*/
dosAndDonts.url = (options?: RouteQueryOptions) => {
    return dosAndDonts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:121
* @route '/passenger-info/dos-and-donts'
*/
dosAndDonts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dosAndDonts.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:121
* @route '/passenger-info/dos-and-donts'
*/
dosAndDonts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dosAndDonts.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:126
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
* @see app/Http/Controllers/PagesController.php:126
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarry.url = (options?: RouteQueryOptions) => {
    return itemsNotToCarry.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:126
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarry.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: itemsNotToCarry.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:126
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarry.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: itemsNotToCarry.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:131
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
* @see app/Http/Controllers/PagesController.php:131
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenalties.url = (options?: RouteQueryOptions) => {
    return offencesAndPenalties.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:131
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenalties.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: offencesAndPenalties.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:131
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenalties.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: offencesAndPenalties.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:136
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
* @see app/Http/Controllers/PagesController.php:136
* @route '/passenger-info/lost-and-found'
*/
lostAndFound.url = (options?: RouteQueryOptions) => {
    return lostAndFound.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:136
* @route '/passenger-info/lost-and-found'
*/
lostAndFound.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lostAndFound.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:136
* @route '/passenger-info/lost-and-found'
*/
lostAndFound.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lostAndFound.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::customerService
* @see app/Http/Controllers/PagesController.php:141
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
* @see app/Http/Controllers/PagesController.php:141
* @route '/passenger-info/customer-service'
*/
customerService.url = (options?: RouteQueryOptions) => {
    return customerService.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::customerService
* @see app/Http/Controllers/PagesController.php:141
* @route '/passenger-info/customer-service'
*/
customerService.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: customerService.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::customerService
* @see app/Http/Controllers/PagesController.php:141
* @route '/passenger-info/customer-service'
*/
customerService.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: customerService.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:146
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
* @see app/Http/Controllers/PagesController.php:146
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivity.url = (options?: RouteQueryOptions) => {
    return lastMileConnectivity.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:146
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivity.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lastMileConnectivity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:146
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivity.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lastMileConnectivity.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:151
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
* @see app/Http/Controllers/PagesController.php:151
* @route '/passenger-info/retail-fnb'
*/
retailFnb.url = (options?: RouteQueryOptions) => {
    return retailFnb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:151
* @route '/passenger-info/retail-fnb'
*/
retailFnb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: retailFnb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:151
* @route '/passenger-info/retail-fnb'
*/
retailFnb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: retailFnb.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:156
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
* @see app/Http/Controllers/PagesController.php:156
* @route '/passenger-info/station-area-map'
*/
stationAreaMap.url = (options?: RouteQueryOptions) => {
    return stationAreaMap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:156
* @route '/passenger-info/station-area-map'
*/
stationAreaMap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationAreaMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:156
* @route '/passenger-info/station-area-map'
*/
stationAreaMap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationAreaMap.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:161
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
* @see app/Http/Controllers/PagesController.php:161
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenities.url = (options?: RouteQueryOptions) => {
    return passengerAmenities.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:161
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: passengerAmenities.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:161
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: passengerAmenities.url(options),
    method: 'head',
})

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

/**
* @see \App\Http\Controllers\PagesController::csrPolicy
* @see app/Http/Controllers/PagesController.php:176
* @route '/csr-policy'
*/
export const csrPolicy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csrPolicy.url(options),
    method: 'get',
})

csrPolicy.definition = {
    methods: ["get","head"],
    url: '/csr-policy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PagesController::csrPolicy
* @see app/Http/Controllers/PagesController.php:176
* @route '/csr-policy'
*/
csrPolicy.url = (options?: RouteQueryOptions) => {
    return csrPolicy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::csrPolicy
* @see app/Http/Controllers/PagesController.php:176
* @route '/csr-policy'
*/
csrPolicy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csrPolicy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::csrPolicy
* @see app/Http/Controllers/PagesController.php:176
* @route '/csr-policy'
*/
csrPolicy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: csrPolicy.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:91
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
* @see app/Http/Controllers/PagesController.php:91
* @route '/environment/eia-reports'
*/
eiaReports.url = (options?: RouteQueryOptions) => {
    return eiaReports.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:91
* @route '/environment/eia-reports'
*/
eiaReports.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eiaReports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:91
* @route '/environment/eia-reports'
*/
eiaReports.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eiaReports.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:96
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
* @see app/Http/Controllers/PagesController.php:96
* @route '/environment/carbon-credit'
*/
carbonCredit.url = (options?: RouteQueryOptions) => {
    return carbonCredit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:96
* @route '/environment/carbon-credit'
*/
carbonCredit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: carbonCredit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:96
* @route '/environment/carbon-credit'
*/
carbonCredit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: carbonCredit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:101
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
* @see app/Http/Controllers/PagesController.php:101
* @route '/environment/art-from-scrap'
*/
artFromScrap.url = (options?: RouteQueryOptions) => {
    return artFromScrap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:101
* @route '/environment/art-from-scrap'
*/
artFromScrap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: artFromScrap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:101
* @route '/environment/art-from-scrap'
*/
artFromScrap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: artFromScrap.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:106
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
* @see app/Http/Controllers/PagesController.php:106
* @route '/environment/green-initiatives'
*/
greenInitiatives.url = (options?: RouteQueryOptions) => {
    return greenInitiatives.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:106
* @route '/environment/green-initiatives'
*/
greenInitiatives.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: greenInitiatives.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:106
* @route '/environment/green-initiatives'
*/
greenInitiatives.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: greenInitiatives.url(options),
    method: 'head',
})

const PagesController = { home, contact, overview, board, projectUpdate, keyHighlights, routeMap, photoGallery, stationList, stationDetail, timeTable, fareTable, dosAndDonts, itemsNotToCarry, offencesAndPenalties, lostAndFound, customerService, lastMileConnectivity, retailFnb, stationAreaMap, passengerAmenities, stationRetail, termsAndConditions, privacyPolicy, csrPolicy, eiaReports, carbonCredit, artFromScrap, greenInitiatives }

export default PagesController