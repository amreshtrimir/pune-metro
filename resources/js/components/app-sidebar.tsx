import { Link } from '@inertiajs/react';
import { BookOpen, FolderGit2, Globe, LayoutGrid, Image, FileText, MessageSquare, Tag, SlidersHorizontal, Images, UserSquare2, MapPin, MoveRight, TrainFront } from 'lucide-react';
import * as CategoryController from '@/actions/App/Http/Controllers/Blog/CategoryController';
import * as CommentController from '@/actions/App/Http/Controllers/Blog/CommentController';
import * as PostController from '@/actions/App/Http/Controllers/Blog/PostController';
import * as BoardMemberController from '@/actions/App/Http/Controllers/Board/BoardMemberController';
import * as ExplorePunePlaceController from '@/actions/App/Http/Controllers/ExplorePune/ExplorePunePlaceController';
import * as GalleryAlbumController from '@/actions/App/Http/Controllers/Gallery/GalleryAlbumController';
import * as MarqueeItemController from '@/actions/App/Http/Controllers/Marquee/MarqueeItemController';
import * as StationController from '@/actions/App/Http/Controllers/Station/StationController';
import * as MediaController from '@/actions/App/Http/Controllers/Media/MediaController';
import * as SliderController from '@/actions/App/Http/Controllers/Slider/SliderController';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const cmsNavItems: NavItem[] = [
    {
        title: 'Media Library',
        href: MediaController.index.url(),
        icon: Image,
    },
    {
        title: 'Posts',
        href: PostController.index.url(),
        icon: FileText,
    },
    {
        title: 'Categories',
        href: CategoryController.index.url(),
        icon: Tag,
    },
    {
        title: 'Comments',
        href: CommentController.index.url(),
        icon: MessageSquare,
    },
    {
        title: 'Customer Service Queries',
        href: '/dashboard/customer-service-submissions',
        icon: MessageSquare,
    },
    {
        title: 'Sliders',
        href: SliderController.index.url(),
        icon: SlidersHorizontal,
    },
    {
        title: 'Gallery Albums',
        href: GalleryAlbumController.index.url(),
        icon: Images,
    },
    {
        title: 'Board Members',
        href: BoardMemberController.index.url(),
        icon: UserSquare2,
    },
    {
        title: 'Explore Pune',
        href: ExplorePunePlaceController.index.url(),
        icon: MapPin,
    },
    {
        title: 'Stations',
        href: StationController.index.url(),
        icon: TrainFront,
    },
    {
        title: 'Marquee Banner',
        href: MarqueeItemController.index.url(),
        icon: MoveRight,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'View Website',
        href: '/',
        icon: Globe,
    },
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
                <NavMain items={cmsNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
