import { Link } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid, Image, FileText, MessageSquare, Tag } from 'lucide-react';
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
import * as MediaController from '@/actions/App/Http/Controllers/Media/MediaController';
import * as PostController from '@/actions/App/Http/Controllers/Blog/PostController';
import * as CommentController from '@/actions/App/Http/Controllers/Blog/CommentController';
import * as CategoryController from '@/actions/App/Http/Controllers/Blog/CategoryController';
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
];

const footerNavItems: NavItem[] = [
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
