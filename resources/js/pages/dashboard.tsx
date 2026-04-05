import { Head, usePage } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';

type Permissions = {
    canManageUsers: boolean;
    isAdmin: boolean;
};

type DashboardProps = {
    permissions: Permissions;
};

export default function Dashboard({ permissions }: DashboardProps) {
    const { auth } = usePage().props;
    const { roles } = auth;

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {permissions.isAdmin && (
                    <div className="rounded-xl border border-sidebar-border/70 bg-amber-50 p-4 dark:border-sidebar-border dark:bg-amber-950/20">
                        <h2 className="mb-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
                            Admin Panel
                        </h2>
                        <p className="text-xs text-amber-600 dark:text-amber-400">
                            You have admin access. Roles: {roles.join(', ')}
                        </p>
                        {permissions.canManageUsers && (
                            <div className="mt-3 flex gap-2">
                                <button className="rounded-md bg-amber-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-700">
                                    Manage Users
                                </button>
                                <button className="rounded-md border border-amber-300 px-3 py-1.5 text-xs font-medium text-amber-700 hover:bg-amber-100 dark:border-amber-700 dark:text-amber-300">
                                    View Reports
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {!permissions.isAdmin && (
                    <div className="rounded-xl border border-sidebar-border/70 bg-blue-50 p-4 dark:border-sidebar-border dark:bg-blue-950/20">
                        <h2 className="mb-1 text-sm font-semibold text-blue-800 dark:text-blue-300">
                            Welcome
                        </h2>
                        <p className="text-xs text-blue-600 dark:text-blue-400">
                            Roles: {roles.join(', ') || 'none'}
                        </p>
                    </div>
                )}

                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
