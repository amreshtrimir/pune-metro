import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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

const environment = {
    eiaReports: Object.assign(eiaReports, eiaReports),
    carbonCredit: Object.assign(carbonCredit, carbonCredit),
    artFromScrap: Object.assign(artFromScrap, artFromScrap),
    greenInitiatives: Object.assign(greenInitiatives, greenInitiatives),
}

export default environment