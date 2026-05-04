import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:10
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
* @see app/Http/Controllers/PagesController.php:10
* @route '/about/overview'
*/
overview.url = (options?: RouteQueryOptions) => {
    return overview.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:10
* @route '/about/overview'
*/
overview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:10
* @route '/about/overview'
*/
overview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overview.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:10
* @route '/about/overview'
*/
const overviewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: overview.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:10
* @route '/about/overview'
*/
overviewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: overview.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::overview
* @see app/Http/Controllers/PagesController.php:10
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
* @see app/Http/Controllers/PagesController.php:15
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
* @see app/Http/Controllers/PagesController.php:15
* @route '/about/board'
*/
board.url = (options?: RouteQueryOptions) => {
    return board.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:15
* @route '/about/board'
*/
board.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: board.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:15
* @route '/about/board'
*/
board.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: board.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:15
* @route '/about/board'
*/
const boardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: board.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:15
* @route '/about/board'
*/
boardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: board.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::board
* @see app/Http/Controllers/PagesController.php:15
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
* @see app/Http/Controllers/PagesController.php:20
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
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
projectUpdate.url = (options?: RouteQueryOptions) => {
    return projectUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
projectUpdate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: projectUpdate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
projectUpdate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: projectUpdate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
const projectUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projectUpdate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:20
* @route '/project-profile/update'
*/
projectUpdateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: projectUpdate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::projectUpdate
* @see app/Http/Controllers/PagesController.php:20
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
* @see app/Http/Controllers/PagesController.php:25
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
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
keyHighlights.url = (options?: RouteQueryOptions) => {
    return keyHighlights.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
keyHighlights.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: keyHighlights.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
keyHighlights.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: keyHighlights.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
const keyHighlightsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: keyHighlights.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:25
* @route '/project-profile/highlights'
*/
keyHighlightsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: keyHighlights.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::keyHighlights
* @see app/Http/Controllers/PagesController.php:25
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

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:55
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
* @see app/Http/Controllers/PagesController.php:55
* @route '/passenger-info/time-table'
*/
timeTable.url = (options?: RouteQueryOptions) => {
    return timeTable.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:55
* @route '/passenger-info/time-table'
*/
timeTable.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timeTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:55
* @route '/passenger-info/time-table'
*/
timeTable.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: timeTable.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:55
* @route '/passenger-info/time-table'
*/
const timeTableForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: timeTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:55
* @route '/passenger-info/time-table'
*/
timeTableForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: timeTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::timeTable
* @see app/Http/Controllers/PagesController.php:55
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
* @see app/Http/Controllers/PagesController.php:60
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
* @see app/Http/Controllers/PagesController.php:60
* @route '/passenger-info/fare-table'
*/
fareTable.url = (options?: RouteQueryOptions) => {
    return fareTable.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:60
* @route '/passenger-info/fare-table'
*/
fareTable.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fareTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:60
* @route '/passenger-info/fare-table'
*/
fareTable.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fareTable.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:60
* @route '/passenger-info/fare-table'
*/
const fareTableForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fareTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:60
* @route '/passenger-info/fare-table'
*/
fareTableForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: fareTable.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::fareTable
* @see app/Http/Controllers/PagesController.php:60
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
* @see app/Http/Controllers/PagesController.php:65
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
* @see app/Http/Controllers/PagesController.php:65
* @route '/passenger-info/dos-and-donts'
*/
dosAndDonts.url = (options?: RouteQueryOptions) => {
    return dosAndDonts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:65
* @route '/passenger-info/dos-and-donts'
*/
dosAndDonts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dosAndDonts.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:65
* @route '/passenger-info/dos-and-donts'
*/
dosAndDonts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dosAndDonts.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:65
* @route '/passenger-info/dos-and-donts'
*/
const dosAndDontsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dosAndDonts.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:65
* @route '/passenger-info/dos-and-donts'
*/
dosAndDontsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dosAndDonts.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::dosAndDonts
* @see app/Http/Controllers/PagesController.php:65
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
* @see app/Http/Controllers/PagesController.php:70
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
* @see app/Http/Controllers/PagesController.php:70
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarry.url = (options?: RouteQueryOptions) => {
    return itemsNotToCarry.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:70
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarry.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: itemsNotToCarry.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:70
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarry.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: itemsNotToCarry.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:70
* @route '/passenger-info/items-not-to-carry'
*/
const itemsNotToCarryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: itemsNotToCarry.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:70
* @route '/passenger-info/items-not-to-carry'
*/
itemsNotToCarryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: itemsNotToCarry.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::itemsNotToCarry
* @see app/Http/Controllers/PagesController.php:70
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
* @see app/Http/Controllers/PagesController.php:75
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
* @see app/Http/Controllers/PagesController.php:75
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenalties.url = (options?: RouteQueryOptions) => {
    return offencesAndPenalties.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:75
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenalties.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: offencesAndPenalties.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:75
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenalties.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: offencesAndPenalties.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:75
* @route '/passenger-info/offences-and-penalties'
*/
const offencesAndPenaltiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: offencesAndPenalties.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:75
* @route '/passenger-info/offences-and-penalties'
*/
offencesAndPenaltiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: offencesAndPenalties.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::offencesAndPenalties
* @see app/Http/Controllers/PagesController.php:75
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
* @see app/Http/Controllers/PagesController.php:80
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
* @see app/Http/Controllers/PagesController.php:80
* @route '/passenger-info/lost-and-found'
*/
lostAndFound.url = (options?: RouteQueryOptions) => {
    return lostAndFound.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:80
* @route '/passenger-info/lost-and-found'
*/
lostAndFound.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lostAndFound.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:80
* @route '/passenger-info/lost-and-found'
*/
lostAndFound.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lostAndFound.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:80
* @route '/passenger-info/lost-and-found'
*/
const lostAndFoundForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: lostAndFound.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:80
* @route '/passenger-info/lost-and-found'
*/
lostAndFoundForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: lostAndFound.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lostAndFound
* @see app/Http/Controllers/PagesController.php:80
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
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:85
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
* @see app/Http/Controllers/PagesController.php:85
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivity.url = (options?: RouteQueryOptions) => {
    return lastMileConnectivity.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:85
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivity.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lastMileConnectivity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:85
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivity.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lastMileConnectivity.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:85
* @route '/passenger-info/last-mile-connectivity'
*/
const lastMileConnectivityForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: lastMileConnectivity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:85
* @route '/passenger-info/last-mile-connectivity'
*/
lastMileConnectivityForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: lastMileConnectivity.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::lastMileConnectivity
* @see app/Http/Controllers/PagesController.php:85
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
* @see app/Http/Controllers/PagesController.php:90
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
* @see app/Http/Controllers/PagesController.php:90
* @route '/passenger-info/retail-fnb'
*/
retailFnb.url = (options?: RouteQueryOptions) => {
    return retailFnb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:90
* @route '/passenger-info/retail-fnb'
*/
retailFnb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: retailFnb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:90
* @route '/passenger-info/retail-fnb'
*/
retailFnb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: retailFnb.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:90
* @route '/passenger-info/retail-fnb'
*/
const retailFnbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: retailFnb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:90
* @route '/passenger-info/retail-fnb'
*/
retailFnbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: retailFnb.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::retailFnb
* @see app/Http/Controllers/PagesController.php:90
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
* @see app/Http/Controllers/PagesController.php:95
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
* @see app/Http/Controllers/PagesController.php:95
* @route '/passenger-info/station-area-map'
*/
stationAreaMap.url = (options?: RouteQueryOptions) => {
    return stationAreaMap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:95
* @route '/passenger-info/station-area-map'
*/
stationAreaMap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stationAreaMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:95
* @route '/passenger-info/station-area-map'
*/
stationAreaMap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stationAreaMap.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:95
* @route '/passenger-info/station-area-map'
*/
const stationAreaMapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationAreaMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:95
* @route '/passenger-info/station-area-map'
*/
stationAreaMapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stationAreaMap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::stationAreaMap
* @see app/Http/Controllers/PagesController.php:95
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
* @see app/Http/Controllers/PagesController.php:100
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
* @see app/Http/Controllers/PagesController.php:100
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenities.url = (options?: RouteQueryOptions) => {
    return passengerAmenities.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:100
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: passengerAmenities.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:100
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: passengerAmenities.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:100
* @route '/passenger-info/passenger-amenities'
*/
const passengerAmenitiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: passengerAmenities.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:100
* @route '/passenger-info/passenger-amenities'
*/
passengerAmenitiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: passengerAmenities.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::passengerAmenities
* @see app/Http/Controllers/PagesController.php:100
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
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:105
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
* @see app/Http/Controllers/PagesController.php:105
* @route '/legal/terms-and-conditions'
*/
termsAndConditions.url = (options?: RouteQueryOptions) => {
    return termsAndConditions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:105
* @route '/legal/terms-and-conditions'
*/
termsAndConditions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: termsAndConditions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:105
* @route '/legal/terms-and-conditions'
*/
termsAndConditions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: termsAndConditions.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:105
* @route '/legal/terms-and-conditions'
*/
const termsAndConditionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: termsAndConditions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:105
* @route '/legal/terms-and-conditions'
*/
termsAndConditionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: termsAndConditions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::termsAndConditions
* @see app/Http/Controllers/PagesController.php:105
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
* @see app/Http/Controllers/PagesController.php:110
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
* @see app/Http/Controllers/PagesController.php:110
* @route '/legal/privacy-policy'
*/
privacyPolicy.url = (options?: RouteQueryOptions) => {
    return privacyPolicy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:110
* @route '/legal/privacy-policy'
*/
privacyPolicy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacyPolicy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:110
* @route '/legal/privacy-policy'
*/
privacyPolicy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacyPolicy.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:110
* @route '/legal/privacy-policy'
*/
const privacyPolicyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: privacyPolicy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:110
* @route '/legal/privacy-policy'
*/
privacyPolicyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: privacyPolicy.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::privacyPolicy
* @see app/Http/Controllers/PagesController.php:110
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
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:35
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
* @see app/Http/Controllers/PagesController.php:35
* @route '/environment/eia-reports'
*/
eiaReports.url = (options?: RouteQueryOptions) => {
    return eiaReports.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:35
* @route '/environment/eia-reports'
*/
eiaReports.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eiaReports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:35
* @route '/environment/eia-reports'
*/
eiaReports.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eiaReports.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:35
* @route '/environment/eia-reports'
*/
const eiaReportsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eiaReports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:35
* @route '/environment/eia-reports'
*/
eiaReportsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: eiaReports.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::eiaReports
* @see app/Http/Controllers/PagesController.php:35
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
* @see app/Http/Controllers/PagesController.php:40
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
* @see app/Http/Controllers/PagesController.php:40
* @route '/environment/carbon-credit'
*/
carbonCredit.url = (options?: RouteQueryOptions) => {
    return carbonCredit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:40
* @route '/environment/carbon-credit'
*/
carbonCredit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: carbonCredit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:40
* @route '/environment/carbon-credit'
*/
carbonCredit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: carbonCredit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:40
* @route '/environment/carbon-credit'
*/
const carbonCreditForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: carbonCredit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:40
* @route '/environment/carbon-credit'
*/
carbonCreditForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: carbonCredit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::carbonCredit
* @see app/Http/Controllers/PagesController.php:40
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
* @see app/Http/Controllers/PagesController.php:45
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
* @see app/Http/Controllers/PagesController.php:45
* @route '/environment/art-from-scrap'
*/
artFromScrap.url = (options?: RouteQueryOptions) => {
    return artFromScrap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:45
* @route '/environment/art-from-scrap'
*/
artFromScrap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: artFromScrap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:45
* @route '/environment/art-from-scrap'
*/
artFromScrap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: artFromScrap.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:45
* @route '/environment/art-from-scrap'
*/
const artFromScrapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: artFromScrap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:45
* @route '/environment/art-from-scrap'
*/
artFromScrapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: artFromScrap.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::artFromScrap
* @see app/Http/Controllers/PagesController.php:45
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
* @see app/Http/Controllers/PagesController.php:50
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
* @see app/Http/Controllers/PagesController.php:50
* @route '/environment/green-initiatives'
*/
greenInitiatives.url = (options?: RouteQueryOptions) => {
    return greenInitiatives.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:50
* @route '/environment/green-initiatives'
*/
greenInitiatives.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: greenInitiatives.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:50
* @route '/environment/green-initiatives'
*/
greenInitiatives.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: greenInitiatives.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:50
* @route '/environment/green-initiatives'
*/
const greenInitiativesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: greenInitiatives.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:50
* @route '/environment/green-initiatives'
*/
greenInitiativesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: greenInitiatives.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PagesController::greenInitiatives
* @see app/Http/Controllers/PagesController.php:50
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

const PagesController = { overview, board, projectUpdate, keyHighlights, routeMap, timeTable, fareTable, dosAndDonts, itemsNotToCarry, offencesAndPenalties, lostAndFound, lastMileConnectivity, retailFnb, stationAreaMap, passengerAmenities, termsAndConditions, privacyPolicy, eiaReports, carbonCredit, artFromScrap, greenInitiatives }

export default PagesController