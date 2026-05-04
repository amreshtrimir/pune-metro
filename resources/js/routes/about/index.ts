import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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

const about = {
    overview: Object.assign(overview, overview),
    board: Object.assign(board, board),
}

export default about