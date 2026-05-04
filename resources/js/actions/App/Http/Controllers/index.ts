import PagesController from './PagesController'
import SitemapController from './SitemapController'
import Blog from './Blog'
import DashboardController from './DashboardController'
import Media from './Media'
import Slider from './Slider'
import Settings from './Settings'

const Controllers = {
    PagesController: Object.assign(PagesController, PagesController),
    SitemapController: Object.assign(SitemapController, SitemapController),
    Blog: Object.assign(Blog, Blog),
    DashboardController: Object.assign(DashboardController, DashboardController),
    Media: Object.assign(Media, Media),
    Slider: Object.assign(Slider, Slider),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers