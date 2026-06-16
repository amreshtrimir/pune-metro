import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
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

const passengerInfo = {
    timeTable: Object.assign(timeTable, timeTable),
    fareTable: Object.assign(fareTable, fareTable),
    dosAndDonts: Object.assign(dosAndDonts, dosAndDonts),
    itemsNotToCarry: Object.assign(itemsNotToCarry, itemsNotToCarry),
    offencesAndPenalties: Object.assign(offencesAndPenalties, offencesAndPenalties),
    lostAndFound: Object.assign(lostAndFound, lostAndFound),
    customerService: Object.assign(customerService, customerService),
    lastMileConnectivity: Object.assign(lastMileConnectivity, lastMileConnectivity),
    retailFnb: Object.assign(retailFnb, retailFnb),
    stationAreaMap: Object.assign(stationAreaMap, stationAreaMap),
    passengerAmenities: Object.assign(passengerAmenities, passengerAmenities),
}

export default passengerInfo