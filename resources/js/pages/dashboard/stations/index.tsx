import { Head, router } from '@inertiajs/react';
import { ArrowUp, ArrowDown, Pencil, Save, Plus, Trash2, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import DashboardRoutes from '@/routes/dashboard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import type { Station } from '@/types/cms';

type Props = {
    stations: Station[];
};

type StationForm = {
    code: string;
    name: string;
    slug: string;
    description: string;
    mapKey: string;
    embedMapUrl: string;
    entrances: string;
    platforms: string;
    liftsEscalators: string;
    facilities: string;
    nearbyPlaces: string;
    emergency: string;
    transport: string;
    sortOrder: number;
    isActive: boolean;
};

const defaultJson = {
    entrances: '[\n  { "gate": "Gate 1", "landmarks": "" }\n]',
    platforms: '[\n  { "number": "Platform 1", "direction": "" }\n]',
    liftsEscalators: '[\n  { "name": "Lift 1", "level": "" }\n]',
    facilities: '[\n  { "name": "Restrooms", "location": "" }\n]',
    nearbyPlaces: '[\n  ""\n]',
    emergency: '[\n  { "type": "Hospital", "name": "", "distance": "", "walking": "", "car": "" }\n]',
    transport: '[\n  { "type": "Airport", "name": "", "distance": "", "car": "" }\n]',
};

const emptyForm = (sortOrder = 0): StationForm => ({
    code: '',
    name: '',
    slug: '',
    description: '',
    mapKey: '',
    embedMapUrl: '',
    entrances: defaultJson.entrances,
    platforms: defaultJson.platforms,
    liftsEscalators: defaultJson.liftsEscalators,
    facilities: defaultJson.facilities,
    nearbyPlaces: defaultJson.nearbyPlaces,
    emergency: defaultJson.emergency,
    transport: defaultJson.transport,
    sortOrder,
    isActive: true,
});

type EditState = { mode: 'edit'; station: Station } | null;

const toJsonString = (value: unknown): string => {
    try {
        return JSON.stringify(value, null, 2);
    } catch {
        return '';
    }
};

const toArray = (value: string): unknown[] => {
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
};

export default function StationsIndex({ stations }: Props) {
    const sorted = useMemo(() => [...stations].sort((a, b) => a.sortOrder - b.sortOrder), [stations]);
    const [edit, setEdit] = useState<EditState>(null);
    const [form, setForm] = useState<StationForm>(emptyForm());
    const [saving, setSaving] = useState(false);

    const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const payload = {
            code: data.get('code')?.toString(),
            name: data.get('name')?.toString(),
            slug: data.get('slug')?.toString(),
            description: data.get('description')?.toString(),
            map_key: data.get('mapKey')?.toString() || null,
            embed_map_url: data.get('embedMapUrl')?.toString() || null,
            entrances: toArray((data.get('entrances')?.toString() ?? '[]')),
            platforms: toArray((data.get('platforms')?.toString() ?? '[]')),
            lifts_escalators: toArray((data.get('liftsEscalators')?.toString() ?? '[]')),
            facilities: toArray((data.get('facilities')?.toString() ?? '[]')),
            nearby_places: toArray((data.get('nearbyPlaces')?.toString() ?? '[]')),
            emergency: toArray((data.get('emergency')?.toString() ?? '[]')),
            transport: toArray((data.get('transport')?.toString() ?? '[]')),
            sort_order: Number(data.get('sortOrder') ?? 0),
            is_active: data.get('isActive') === 'on',
        };

        router.post(DashboardRoutes.stations.store.url(), payload, {
            preserveScroll: true,
            onSuccess: () => {
                setForm(emptyForm());
                event.currentTarget.reset();
            },
        });
    };

    const openEdit = (station: Station) => {
        setEdit({ mode: 'edit', station });
        setForm({
            code: station.code,
            name: station.name,
            slug: station.slug,
            description: station.description,
            mapKey: station.mapKey,
            embedMapUrl: station.embedMapUrl,
            entrances: toJsonString(station.entrances),
            platforms: toJsonString(station.platforms),
            liftsEscalators: toJsonString(station.liftsEscalators),
            facilities: toJsonString(station.facilities),
            nearbyPlaces: toJsonString(station.nearbyPlaces),
            emergency: toJsonString(station.emergency),
            transport: toJsonString(station.transport),
            sortOrder: station.sortOrder,
            isActive: station.isActive,
        });
    };

    const closeEdit = () => {
        setEdit(null);
        setSaving(false);
        setForm(emptyForm());
    };

    const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!edit) {
            return;
        }

        setSaving(true);
        const payload = {
            code: form.code,
            name: form.name,
            slug: form.slug,
            description: form.description,
            map_key: form.mapKey,
            embed_map_url: form.embedMapUrl,
            entrances: toArray(form.entrances),
            platforms: toArray(form.platforms),
            lifts_escalators: toArray(form.liftsEscalators),
            facilities: toArray(form.facilities),
            nearby_places: toArray(form.nearbyPlaces),
            emergency: toArray(form.emergency),
            transport: toArray(form.transport),
            sort_order: form.sortOrder,
            is_active: form.isActive,
        };

        router.put(DashboardRoutes.stations.update.url(edit.station.id), payload, {
            onSuccess: closeEdit,
            onFinish: () => setSaving(false),
        });
    };

    const handleDelete = (station: Station) => {
        if (!confirm(`Delete ${station.name}?`)) {
            return;
        }

        router.delete(DashboardRoutes.stations.destroy.url(station.id), {
            preserveScroll: true,
        });
    };

    const handleMove = (station: Station, direction: 'up' | 'down') => {
        const idx = sorted.findIndex((item) => item.id === station.id);
        if (direction === 'up' && idx === 0) {
            return;
        }
        if (direction === 'down' && idx === sorted.length - 1) {
            return;
        }
        const orderedIds = sorted.map((item) => item.id);
        const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
        [orderedIds[idx], orderedIds[swapIdx]] = [orderedIds[swapIdx], orderedIds[idx]];
        router.post(DashboardRoutes.stations.reorder.url(), { ordered_ids: orderedIds }, { preserveScroll: true });
    };

    return (
        <>
            <Head title="Stations" />

            <div className="space-y-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold">Stations</h1>
                    <p className="text-sm text-muted-foreground">Manage route station details shown on public pages.</p>
                </div>

                <form onSubmit={handleCreate} className="rounded-xl border p-4 space-y-3">
                    <h2 className="text-sm font-semibold">Add station</h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <div className="space-y-1">
                            <Input required name="code" placeholder="PMR 1" />
                        </div>
                        <div className="space-y-1">
                            <Input required name="name" placeholder="Station Name" />
                        </div>
                        <div className="space-y-1">
                            <Input required name="slug" placeholder="pmr-1" />
                        </div>
                        <div className="space-y-1">
                            <Input name="sortOrder" type="number" min="0" defaultValue="0" />
                        </div>
                        <div className="space-y-1">
                            <Input name="mapKey" placeholder="https://share.google/..." />
                        </div>
                        <div className="space-y-1">
                            <Input name="embedMapUrl" placeholder="<iframe ...> or https://www.google.com/maps/embed?..." />
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                            <textarea required name="description" className="w-full min-h-20 rounded-md border p-2 text-sm" placeholder="Description" />
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                            <label className="text-xs text-muted-foreground">Entrances JSON</label>
                            <textarea required name="entrances" className="w-full min-h-24 rounded-md border p-2 font-mono text-sm" defaultValue={defaultJson.entrances} />
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                            <label className="text-xs text-muted-foreground">Platforms JSON</label>
                            <textarea required name="platforms" className="w-full min-h-24 rounded-md border p-2 font-mono text-sm" defaultValue={defaultJson.platforms} />
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                            <label className="text-xs text-muted-foreground">Lifts / Escalators JSON</label>
                            <textarea required name="liftsEscalators" className="w-full min-h-24 rounded-md border p-2 font-mono text-sm" defaultValue={defaultJson.liftsEscalators} />
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                            <label className="text-xs text-muted-foreground">Facilities JSON</label>
                            <textarea required name="facilities" className="w-full min-h-24 rounded-md border p-2 font-mono text-sm" defaultValue={defaultJson.facilities} />
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                            <label className="text-xs text-muted-foreground">Nearby Places JSON</label>
                            <textarea required name="nearbyPlaces" className="w-full min-h-20 rounded-md border p-2 font-mono text-sm" defaultValue={defaultJson.nearbyPlaces} />
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                            <label className="text-xs text-muted-foreground">Emergency JSON</label>
                            <textarea required name="emergency" className="w-full min-h-24 rounded-md border p-2 font-mono text-sm" defaultValue={defaultJson.emergency} />
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                            <label className="text-xs text-muted-foreground">Transport JSON</label>
                            <textarea required name="transport" className="w-full min-h-24 rounded-md border p-2 font-mono text-sm" defaultValue={defaultJson.transport} />
                        </div>
                        <label className="inline-flex items-center gap-2 text-sm text-muted-foreground sm:col-span-2">
                            <input name="isActive" type="checkbox" defaultChecked /> Active
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit">
                            <Plus className="size-4" />
                            Add Station
                        </Button>
                    </div>
                </form>

                <div className="rounded-xl border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/40">
                                <th className="px-4 py-3 text-left font-medium">Code</th>
                                <th className="px-4 py-3 text-left font-medium">Name</th>
                                <th className="px-4 py-3 text-left font-medium">Order</th>
                                <th className="px-4 py-3 text-left font-medium">Status</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {sorted.map((station, idx) => (
                                <tr key={station.id} className="hover:bg-muted/20">
                                    <td className="px-4 py-3 font-medium">{station.code}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{station.name}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{station.sortOrder}</td>
                                    <td className="px-4 py-3">{station.isActive ? <Badge>Active</Badge> : <Badge variant="secondary">Inactive</Badge>}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-1">
                                            <Button size="icon" variant="ghost" disabled={idx === 0} onClick={() => handleMove(station, 'up')}>
                                                <ArrowUp className="size-4" />
                                            </Button>
                                            <Button size="icon" variant="ghost" disabled={idx === sorted.length - 1} onClick={() => handleMove(station, 'down')}>
                                                <ArrowDown className="size-4" />
                                            </Button>
                                            <Button size="icon" variant="ghost" onClick={() => openEdit(station)}>
                                                <Pencil className="size-4" />
                                            </Button>
                                            <Button size="icon" variant="ghost" onClick={() => handleDelete(station)}>
                                                <Trash2 className="size-4" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {edit && (
                <Dialog open onOpenChange={closeEdit}>
                    <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>Edit Station</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleUpdate} className="space-y-3">
                            <div className="grid gap-3 sm:grid-cols-2">
                                <Input value={form.code} onChange={(event) => setForm((p) => ({ ...p, code: event.target.value }))} placeholder="PMR 1" required />
                                <Input value={form.name} onChange={(event) => setForm((p) => ({ ...p, name: event.target.value }))} placeholder="Station Name" required />
                                <Input value={form.slug} onChange={(event) => setForm((p) => ({ ...p, slug: event.target.value }))} placeholder="pmr-1" required />
                                <Input value={form.sortOrder} onChange={(event) => setForm((p) => ({ ...p, sortOrder: Number(event.target.value) }))} type="number" min="0" />
                                <Input value={form.mapKey} onChange={(event) => setForm((p) => ({ ...p, mapKey: event.target.value }))} placeholder="https://share.google/..." />
                                <Input value={form.embedMapUrl} onChange={(event) => setForm((p) => ({ ...p, embedMapUrl: event.target.value }))} placeholder="https://www.google.com/maps/embed?..." />
                                <div className="sm:col-span-2">
                                    <textarea
                                        value={form.description}
                                        onChange={(event) => setForm((p) => ({ ...p, description: event.target.value }))}
                                        className="w-full min-h-20 rounded-md border p-2"
                                        placeholder="Description"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea
                                        value={form.entrances}
                                        onChange={(event) => setForm((p) => ({ ...p, entrances: event.target.value }))}
                                        className="w-full min-h-24 rounded-md border p-2"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea
                                        value={form.platforms}
                                        onChange={(event) => setForm((p) => ({ ...p, platforms: event.target.value }))}
                                        className="w-full min-h-24 rounded-md border p-2"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea
                                        value={form.liftsEscalators}
                                        onChange={(event) => setForm((p) => ({ ...p, liftsEscalators: event.target.value }))}
                                        className="w-full min-h-24 rounded-md border p-2"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea
                                        value={form.facilities}
                                        onChange={(event) => setForm((p) => ({ ...p, facilities: event.target.value }))}
                                        className="w-full min-h-24 rounded-md border p-2"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea
                                        value={form.nearbyPlaces}
                                        onChange={(event) => setForm((p) => ({ ...p, nearbyPlaces: event.target.value }))}
                                        className="w-full min-h-20 rounded-md border p-2"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea
                                        value={form.emergency}
                                        onChange={(event) => setForm((p) => ({ ...p, emergency: event.target.value }))}
                                        className="w-full min-h-24 rounded-md border p-2"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <textarea
                                        value={form.transport}
                                        onChange={(event) => setForm((p) => ({ ...p, transport: event.target.value }))}
                                        className="w-full min-h-24 rounded-md border p-2"
                                    />
                                </div>
                                <label className="inline-flex items-center gap-2 text-sm text-muted-foreground sm:col-span-2">
                                    <input type="checkbox" checked={form.isActive} onChange={(event) => setForm((p) => ({ ...p, isActive: event.target.checked }))} />
                                    Active
                                </label>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                <Button type="button" variant="outline" onClick={closeEdit}>
                                    <X className="size-4" />
                                    Close
                                </Button>
                                <Button type="submit" disabled={saving}>
                                    <Save className="size-4" />
                                    {saving ? 'Saving...' : 'Save'}
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}
