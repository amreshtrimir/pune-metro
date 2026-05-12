import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import slides from './slides'
/**
* @see \App\Http\Controllers\Slider\SliderController::index
* @see app/Http/Controllers/Slider/SliderController.php:23
* @route '/dashboard/sliders'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/sliders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Slider\SliderController::index
* @see app/Http/Controllers/Slider/SliderController.php:23
* @route '/dashboard/sliders'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Slider\SliderController::index
* @see app/Http/Controllers/Slider/SliderController.php:23
* @route '/dashboard/sliders'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::index
* @see app/Http/Controllers/Slider/SliderController.php:23
* @route '/dashboard/sliders'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::index
* @see app/Http/Controllers/Slider/SliderController.php:23
* @route '/dashboard/sliders'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::index
* @see app/Http/Controllers/Slider/SliderController.php:23
* @route '/dashboard/sliders'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::index
* @see app/Http/Controllers/Slider/SliderController.php:23
* @route '/dashboard/sliders'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Slider\SliderController::store
* @see app/Http/Controllers/Slider/SliderController.php:30
* @route '/dashboard/sliders'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/sliders',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Slider\SliderController::store
* @see app/Http/Controllers/Slider/SliderController.php:30
* @route '/dashboard/sliders'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Slider\SliderController::store
* @see app/Http/Controllers/Slider/SliderController.php:30
* @route '/dashboard/sliders'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::store
* @see app/Http/Controllers/Slider/SliderController.php:30
* @route '/dashboard/sliders'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::store
* @see app/Http/Controllers/Slider/SliderController.php:30
* @route '/dashboard/sliders'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Slider\SliderController::edit
* @see app/Http/Controllers/Slider/SliderController.php:37
* @route '/dashboard/sliders/{slider}/edit'
*/
export const edit = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/sliders/{slider}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Slider\SliderController::edit
* @see app/Http/Controllers/Slider/SliderController.php:37
* @route '/dashboard/sliders/{slider}/edit'
*/
edit.url = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slider: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { slider: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            slider: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slider: typeof args.slider === 'object'
        ? args.slider.id
        : args.slider,
    }

    return edit.definition.url
            .replace('{slider}', parsedArgs.slider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Slider\SliderController::edit
* @see app/Http/Controllers/Slider/SliderController.php:37
* @route '/dashboard/sliders/{slider}/edit'
*/
edit.get = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::edit
* @see app/Http/Controllers/Slider/SliderController.php:37
* @route '/dashboard/sliders/{slider}/edit'
*/
edit.head = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::edit
* @see app/Http/Controllers/Slider/SliderController.php:37
* @route '/dashboard/sliders/{slider}/edit'
*/
const editForm = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::edit
* @see app/Http/Controllers/Slider/SliderController.php:37
* @route '/dashboard/sliders/{slider}/edit'
*/
editForm.get = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::edit
* @see app/Http/Controllers/Slider/SliderController.php:37
* @route '/dashboard/sliders/{slider}/edit'
*/
editForm.head = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Slider\SliderController::update
* @see app/Http/Controllers/Slider/SliderController.php:44
* @route '/dashboard/sliders/{slider}'
*/
export const update = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/sliders/{slider}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Slider\SliderController::update
* @see app/Http/Controllers/Slider/SliderController.php:44
* @route '/dashboard/sliders/{slider}'
*/
update.url = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slider: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { slider: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            slider: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slider: typeof args.slider === 'object'
        ? args.slider.id
        : args.slider,
    }

    return update.definition.url
            .replace('{slider}', parsedArgs.slider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Slider\SliderController::update
* @see app/Http/Controllers/Slider/SliderController.php:44
* @route '/dashboard/sliders/{slider}'
*/
update.put = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::update
* @see app/Http/Controllers/Slider/SliderController.php:44
* @route '/dashboard/sliders/{slider}'
*/
const updateForm = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::update
* @see app/Http/Controllers/Slider/SliderController.php:44
* @route '/dashboard/sliders/{slider}'
*/
updateForm.put = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Slider\SliderController::destroy
* @see app/Http/Controllers/Slider/SliderController.php:51
* @route '/dashboard/sliders/{slider}'
*/
export const destroy = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/sliders/{slider}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Slider\SliderController::destroy
* @see app/Http/Controllers/Slider/SliderController.php:51
* @route '/dashboard/sliders/{slider}'
*/
destroy.url = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slider: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { slider: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            slider: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slider: typeof args.slider === 'object'
        ? args.slider.id
        : args.slider,
    }

    return destroy.definition.url
            .replace('{slider}', parsedArgs.slider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Slider\SliderController::destroy
* @see app/Http/Controllers/Slider/SliderController.php:51
* @route '/dashboard/sliders/{slider}'
*/
destroy.delete = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::destroy
* @see app/Http/Controllers/Slider/SliderController.php:51
* @route '/dashboard/sliders/{slider}'
*/
const destroyForm = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::destroy
* @see app/Http/Controllers/Slider/SliderController.php:51
* @route '/dashboard/sliders/{slider}'
*/
destroyForm.delete = (args: { slider: number | { id: number } } | [slider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const sliders = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    slides: Object.assign(slides, slides),
}

export default sliders