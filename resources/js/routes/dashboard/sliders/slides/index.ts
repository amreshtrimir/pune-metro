import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Slider\SliderController::store
* @see app/Http/Controllers/Slider/SliderController.php:58
* @route '/dashboard/sliders/{slider}/slides'
*/
export const store = (args: { slider: string | number | { id: string | number } } | [slider: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/sliders/{slider}/slides',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Slider\SliderController::store
* @see app/Http/Controllers/Slider/SliderController.php:58
* @route '/dashboard/sliders/{slider}/slides'
*/
store.url = (args: { slider: string | number | { id: string | number } } | [slider: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{slider}', parsedArgs.slider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Slider\SliderController::store
* @see app/Http/Controllers/Slider/SliderController.php:58
* @route '/dashboard/sliders/{slider}/slides'
*/
store.post = (args: { slider: string | number | { id: string | number } } | [slider: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::update
* @see app/Http/Controllers/Slider/SliderController.php:65
* @route '/dashboard/sliders/{slider}/slides/{slide}'
*/
export const update = (args: { slider: string | number | { id: string | number }, slide: string | number | { id: string | number } } | [slider: string | number | { id: string | number }, slide: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/sliders/{slider}/slides/{slide}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Slider\SliderController::update
* @see app/Http/Controllers/Slider/SliderController.php:65
* @route '/dashboard/sliders/{slider}/slides/{slide}'
*/
update.url = (args: { slider: string | number | { id: string | number }, slide: string | number | { id: string | number } } | [slider: string | number | { id: string | number }, slide: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            slider: args[0],
            slide: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slider: typeof args.slider === 'object'
        ? args.slider.id
        : args.slider,
        slide: typeof args.slide === 'object'
        ? args.slide.id
        : args.slide,
    }

    return update.definition.url
            .replace('{slider}', parsedArgs.slider.toString())
            .replace('{slide}', parsedArgs.slide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Slider\SliderController::update
* @see app/Http/Controllers/Slider/SliderController.php:65
* @route '/dashboard/sliders/{slider}/slides/{slide}'
*/
update.put = (args: { slider: string | number | { id: string | number }, slide: string | number | { id: string | number } } | [slider: string | number | { id: string | number }, slide: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::destroy
* @see app/Http/Controllers/Slider/SliderController.php:72
* @route '/dashboard/sliders/{slider}/slides/{slide}'
*/
export const destroy = (args: { slider: string | number | { id: string | number }, slide: string | number | { id: string | number } } | [slider: string | number | { id: string | number }, slide: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/sliders/{slider}/slides/{slide}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Slider\SliderController::destroy
* @see app/Http/Controllers/Slider/SliderController.php:72
* @route '/dashboard/sliders/{slider}/slides/{slide}'
*/
destroy.url = (args: { slider: string | number | { id: string | number }, slide: string | number | { id: string | number } } | [slider: string | number | { id: string | number }, slide: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            slider: args[0],
            slide: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slider: typeof args.slider === 'object'
        ? args.slider.id
        : args.slider,
        slide: typeof args.slide === 'object'
        ? args.slide.id
        : args.slide,
    }

    return destroy.definition.url
            .replace('{slider}', parsedArgs.slider.toString())
            .replace('{slide}', parsedArgs.slide.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Slider\SliderController::destroy
* @see app/Http/Controllers/Slider/SliderController.php:72
* @route '/dashboard/sliders/{slider}/slides/{slide}'
*/
destroy.delete = (args: { slider: string | number | { id: string | number }, slide: string | number | { id: string | number } } | [slider: string | number | { id: string | number }, slide: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Slider\SliderController::reorder
* @see app/Http/Controllers/Slider/SliderController.php:79
* @route '/dashboard/sliders/{slider}/slides/reorder'
*/
export const reorder = (args: { slider: string | number | { id: string | number } } | [slider: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/sliders/{slider}/slides/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Slider\SliderController::reorder
* @see app/Http/Controllers/Slider/SliderController.php:79
* @route '/dashboard/sliders/{slider}/slides/reorder'
*/
reorder.url = (args: { slider: string | number | { id: string | number } } | [slider: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return reorder.definition.url
            .replace('{slider}', parsedArgs.slider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Slider\SliderController::reorder
* @see app/Http/Controllers/Slider/SliderController.php:79
* @route '/dashboard/sliders/{slider}/slides/reorder'
*/
reorder.post = (args: { slider: string | number | { id: string | number } } | [slider: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

const slides = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    reorder: Object.assign(reorder, reorder),
}

export default slides