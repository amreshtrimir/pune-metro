import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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

const passengerInfo = {
    timeTable: Object.assign(timeTable, timeTable),
    fareTable: Object.assign(fareTable, fareTable),
    dosAndDonts: Object.assign(dosAndDonts, dosAndDonts),
    itemsNotToCarry: Object.assign(itemsNotToCarry, itemsNotToCarry),
    offencesAndPenalties: Object.assign(offencesAndPenalties, offencesAndPenalties),
    lostAndFound: Object.assign(lostAndFound, lostAndFound),
    lastMileConnectivity: Object.assign(lastMileConnectivity, lastMileConnectivity),
    retailFnb: Object.assign(retailFnb, retailFnb),
    stationAreaMap: Object.assign(stationAreaMap, stationAreaMap),
    passengerAmenities: Object.assign(passengerAmenities, passengerAmenities),
}

export default passengerInfo