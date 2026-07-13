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

type EntranceRow = {
    gate: string;
    landmarks: string;
};

type PlatformRow = {
    number: string;
    direction: string;
};

type LiftEscalatorRow = {
    name: string;
    level: string;
};

type FacilityRow = {
    name: string;
    location: string;
};

type EmergencyRow = {
    type: string;
    name: string;
    distance: string;
    walking: string;
    car: string;
};

type TransportRow = {
    type: string;
    name: string;
    distance: string;
    car: string;
};

type StationForm = {
    code: string;
    name: string;
    slug: string;
    description: string;
    mapKey: string;
    embedMapUrl: string;
    entrances: EntranceRow[];
    platforms: PlatformRow[];
    liftsEscalators: LiftEscalatorRow[];
    facilities: FacilityRow[];
    nearbyPlaces: string[];
    emergency: EmergencyRow[];
    transport: TransportRow[];
    sortOrder: number;
    isActive: boolean;
};

const defaultEntrances: EntranceRow[] = [{ gate: 'Gate 1', landmarks: '' }];
const defaultPlatforms: PlatformRow[] = [{ number: 'Platform 1', direction: '' }];
const defaultLiftsEscalators: LiftEscalatorRow[] = [{ name: 'Lift 1', level: '' }];
const defaultFacilities: FacilityRow[] = [{ name: 'Restrooms', location: '' }];
const defaultNearbyPlaces: string[] = [''];
const defaultEmergency: EmergencyRow[] = [{ type: 'Hospital', name: '', distance: '', walking: '', car: '' }];
const defaultTransport: TransportRow[] = [{ type: 'Airport', name: '', distance: '', car: '' }];

const emptyForm = (sortOrder = 0): StationForm => ({
    code: '',
    name: '',
    slug: '',
    description: '',
    mapKey: '',
    embedMapUrl: '',
    entrances: defaultEntrances,
    platforms: defaultPlatforms,
    liftsEscalators: defaultLiftsEscalators,
    facilities: defaultFacilities,
    nearbyPlaces: defaultNearbyPlaces,
    emergency: defaultEmergency,
    transport: defaultTransport,
    sortOrder,
    isActive: true,
});

type EditState = { mode: 'edit'; station: Station } | null;

const stationPayload = (form: StationForm) => ({
    code: form.code,
    name: form.name,
    slug: form.slug,
    description: form.description,
    map_key: form.mapKey || null,
    embed_map_url: form.embedMapUrl || null,
    entrances: form.entrances,
    platforms: form.platforms,
    lifts_escalators: form.liftsEscalators,
    facilities: form.facilities,
    nearby_places: form.nearbyPlaces,
    emergency: form.emergency,
    transport: form.transport,
    sort_order: Number(form.sortOrder),
    is_active: form.isActive,
});

export default function StationsIndex({ stations }: Props) {
    const sorted = useMemo(() => [...stations].sort((a, b) => a.sortOrder - b.sortOrder), [stations]);
    const [edit, setEdit] = useState<EditState>(null);
    const [activeTab, setActiveTab] = useState<'form' | 'list'>('list');
    const [form, setForm] = useState<StationForm>(() => emptyForm(1));
    const [saving, setSaving] = useState(false);

    const nextSortOrder = useMemo(() => {
        if (sorted.length === 0) {
            return 1;
        }

        const lastOrder = sorted.reduce((max, station) => (station.sortOrder > max ? station.sortOrder : max), sorted[0].sortOrder);
        return lastOrder + 1;
    }, [sorted]);

    const clearForCreate = () => {
        setForm(emptyForm(nextSortOrder));
    };

    const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.post(DashboardRoutes.stations.store.url(), stationPayload(form), {
            preserveScroll: true,
            onSuccess: () => {
                clearForCreate();
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
            entrances: station.entrances.length > 0 ? station.entrances : defaultEntrances,
            platforms: station.platforms.length > 0 ? station.platforms : defaultPlatforms,
            liftsEscalators: station.liftsEscalators.length > 0 ? station.liftsEscalators : defaultLiftsEscalators,
            facilities: station.facilities.length > 0 ? station.facilities : defaultFacilities,
            nearbyPlaces: station.nearbyPlaces.length > 0 ? station.nearbyPlaces : defaultNearbyPlaces,
            emergency: station.emergency.length > 0 ? station.emergency : defaultEmergency,
            transport: station.transport.length > 0 ? station.transport : defaultTransport,
            sortOrder: station.sortOrder,
            isActive: station.isActive,
        });
    };

    const closeEdit = () => {
        setEdit(null);
        setSaving(false);
        clearForCreate();
    };

    const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!edit) {
            return;
        }

        setSaving(true);
        router.put(DashboardRoutes.stations.update.url(edit.station.id), stationPayload(form), {
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

    const addEntrance = () => {
        setForm((previous) => ({ ...previous, entrances: [...previous.entrances, { gate: '', landmarks: '' }] }));
    };

    const removeEntrance = (index: number) => {
        setForm((previous) => {
            if (previous.entrances.length <= 1) {
                return previous;
            }

            const next = [...previous.entrances];
            next.splice(index, 1);
            return { ...previous, entrances: next };
        });
    };

    const updateEntrance = (index: number, key: keyof EntranceRow, value: string) => {
        setForm((previous) => ({
            ...previous,
            entrances: previous.entrances.map((entry, i) => (i === index ? { ...entry, [key]: value } : entry)),
        }));
    };

    const addPlatform = () => {
        setForm((previous) => ({ ...previous, platforms: [...previous.platforms, { number: '', direction: '' }] }));
    };

    const removePlatform = (index: number) => {
        setForm((previous) => {
            if (previous.platforms.length <= 1) {
                return previous;
            }

            const next = [...previous.platforms];
            next.splice(index, 1);
            return { ...previous, platforms: next };
        });
    };

    const updatePlatform = (index: number, key: keyof PlatformRow, value: string) => {
        setForm((previous) => ({
            ...previous,
            platforms: previous.platforms.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
        }));
    };

    const addLiftEscalator = () => {
        setForm((previous) => ({ ...previous, liftsEscalators: [...previous.liftsEscalators, { name: '', level: '' }] }));
    };

    const removeLiftEscalator = (index: number) => {
        setForm((previous) => {
            if (previous.liftsEscalators.length <= 1) {
                return previous;
            }

            const next = [...previous.liftsEscalators];
            next.splice(index, 1);
            return { ...previous, liftsEscalators: next };
        });
    };

    const updateLiftEscalator = (index: number, key: keyof LiftEscalatorRow, value: string) => {
        setForm((previous) => ({
            ...previous,
            liftsEscalators: previous.liftsEscalators.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
        }));
    };

    const addFacility = () => {
        setForm((previous) => ({ ...previous, facilities: [...previous.facilities, { name: '', location: '' }] }));
    };

    const removeFacility = (index: number) => {
        setForm((previous) => {
            if (previous.facilities.length <= 1) {
                return previous;
            }

            const next = [...previous.facilities];
            next.splice(index, 1);
            return { ...previous, facilities: next };
        });
    };

    const updateFacility = (index: number, key: keyof FacilityRow, value: string) => {
        setForm((previous) => ({
            ...previous,
            facilities: previous.facilities.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
        }));
    };

    const addNearbyPlace = () => {
        setForm((previous) => ({ ...previous, nearbyPlaces: [...previous.nearbyPlaces, ''] }));
    };

    const removeNearbyPlace = (index: number) => {
        setForm((previous) => {
            if (previous.nearbyPlaces.length <= 1) {
                return previous;
            }

            const next = [...previous.nearbyPlaces];
            next.splice(index, 1);
            return { ...previous, nearbyPlaces: next };
        });
    };

    const updateNearbyPlace = (index: number, value: string) => {
        setForm((previous) => ({
            ...previous,
            nearbyPlaces: previous.nearbyPlaces.map((item, i) => (i === index ? value : item)),
        }));
    };

    const addEmergency = () => {
        setForm((previous) => ({
            ...previous,
            emergency: [...previous.emergency, { type: '', name: '', distance: '', walking: '', car: '' }],
        }));
    };

    const removeEmergency = (index: number) => {
        setForm((previous) => {
            if (previous.emergency.length <= 1) {
                return previous;
            }

            const next = [...previous.emergency];
            next.splice(index, 1);
            return { ...previous, emergency: next };
        });
    };

    const updateEmergency = (index: number, key: keyof EmergencyRow, value: string) => {
        setForm((previous) => ({
            ...previous,
            emergency: previous.emergency.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
        }));
    };

    const addTransport = () => {
        setForm((previous) => ({ ...previous, transport: [...previous.transport, { type: '', name: '', distance: '', car: '' }] }));
    };

    const removeTransport = (index: number) => {
        setForm((previous) => {
            if (previous.transport.length <= 1) {
                return previous;
            }

            const next = [...previous.transport];
            next.splice(index, 1);
            return { ...previous, transport: next };
        });
    };

    const updateTransport = (index: number, key: keyof TransportRow, value: string) => {
        setForm((previous) => ({
            ...previous,
            transport: previous.transport.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
        }));
    };

    const stationFields = () => (
        <div className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Code</label>
                    <Input required value={form.code} onChange={(event) => setForm((previous) => ({ ...previous, code: event.target.value }))} placeholder="PMR 1" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Name</label>
                    <Input required value={form.name} onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))} placeholder="Station Name" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Slug</label>
                    <Input required value={form.slug} onChange={(event) => setForm((previous) => ({ ...previous, slug: event.target.value }))} placeholder="pmr-1" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Sort order</label>
                    <Input
                        value={form.sortOrder}
                        onChange={(event) => setForm((previous) => ({ ...previous, sortOrder: Number(event.target.value) }))}
                        type="number"
                        min="0"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Map Key</label>
                    <Input
                        value={form.mapKey}
                        onChange={(event) => setForm((previous) => ({ ...previous, mapKey: event.target.value }))}
                        placeholder="https://share.google.com/..."
                    />
                </div>
                <div className="space-y-1 sm:col-span-2 xl:col-span-3">
                    <label className="text-xs font-medium text-muted-foreground">Embed map URL / IFrame</label>
                    <Input
                        value={form.embedMapUrl}
                        onChange={(event) => setForm((previous) => ({ ...previous, embedMapUrl: event.target.value }))}
                        placeholder="https://www.google.com/maps/embed?..."
                    />
                </div>
                <div className="sm:col-span-2 xl:col-span-4 space-y-1">
                    <label className="text-xs font-medium text-muted-foreground">Description</label>
                    <textarea
                        value={form.description}
                        onChange={(event) => setForm((previous) => ({ ...previous, description: event.target.value }))}
                        className="w-full min-h-20 rounded-md border p-2"
                        placeholder="Station description"
                    />
                </div>
                <label className="inline-flex items-center gap-2 text-sm text-muted-foreground sm:col-span-2 xl:col-span-4">
                    <input
                        checked={form.isActive}
                        onChange={(event) => setForm((previous) => ({ ...previous, isActive: event.target.checked }))}
                        type="checkbox"
                    />
                    Active
                </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold">Entrances</h3>
                        <Button type="button" variant="outline" size="sm" onClick={addEntrance}>
                            <Plus className="size-4" /> Add
                        </Button>
                    </div>
                    <div className="space-y-3">
                        {form.entrances.map((row, index) => (
                            <div key={`entrance-${index}`} className="grid gap-2 md:grid-cols-[1fr_2fr_auto]">
                                <Input
                                    value={row.gate}
                                    onChange={(event) => updateEntrance(index, 'gate', event.target.value)}
                                    placeholder="Gate 1"
                                />
                                <Input
                                    value={row.landmarks}
                                    onChange={(event) => updateEntrance(index, 'landmarks', event.target.value)}
                                    placeholder="Landmarks"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => removeEntrance(index)}
                                    disabled={form.entrances.length <= 1}
                                >
                                    <Trash2 className="size-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold">Platforms</h3>
                        <Button type="button" variant="outline" size="sm" onClick={addPlatform}>
                            <Plus className="size-4" /> Add
                        </Button>
                    </div>
                    <div className="space-y-3">
                        {form.platforms.map((row, index) => (
                            <div key={`platform-${index}`} className="grid gap-2 md:grid-cols-[1fr_1fr_auto]">
                                <Input
                                    value={row.number}
                                    onChange={(event) => updatePlatform(index, 'number', event.target.value)}
                                    placeholder="Platform 1"
                                />
                                <Input
                                    value={row.direction}
                                    onChange={(event) => updatePlatform(index, 'direction', event.target.value)}
                                    placeholder="Direction"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => removePlatform(index)}
                                    disabled={form.platforms.length <= 1}
                                >
                                    <Trash2 className="size-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold">Lifts / Escalators</h3>
                        <Button type="button" variant="outline" size="sm" onClick={addLiftEscalator}>
                            <Plus className="size-4" /> Add
                        </Button>
                    </div>
                    <div className="space-y-3">
                        {form.liftsEscalators.map((row, index) => (
                            <div key={`lift-${index}`} className="grid gap-2 md:grid-cols-[1fr_1fr_auto]">
                                <Input
                                    value={row.name}
                                    onChange={(event) => updateLiftEscalator(index, 'name', event.target.value)}
                                    placeholder="Lift 1"
                                />
                                <Input
                                    value={row.level}
                                    onChange={(event) => updateLiftEscalator(index, 'level', event.target.value)}
                                    placeholder="Level"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => removeLiftEscalator(index)}
                                    disabled={form.liftsEscalators.length <= 1}
                                >
                                    <Trash2 className="size-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold">Facilities</h3>
                        <Button type="button" variant="outline" size="sm" onClick={addFacility}>
                            <Plus className="size-4" /> Add
                        </Button>
                    </div>
                    <div className="space-y-3">
                        {form.facilities.map((row, index) => (
                            <div key={`facility-${index}`} className="grid gap-2 md:grid-cols-[1fr_2fr_auto]">
                                <Input
                                    value={row.name}
                                    onChange={(event) => updateFacility(index, 'name', event.target.value)}
                                    placeholder="Restrooms"
                                />
                                <Input
                                    value={row.location}
                                    onChange={(event) => updateFacility(index, 'location', event.target.value)}
                                    placeholder="Location"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => removeFacility(index)}
                                    disabled={form.facilities.length <= 1}
                                >
                                    <Trash2 className="size-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold">Nearby Places</h3>
                        <Button type="button" variant="outline" size="sm" onClick={addNearbyPlace}>
                            <Plus className="size-4" /> Add
                        </Button>
                    </div>
                    <div className="space-y-3">
                        {form.nearbyPlaces.map((row, index) => (
                            <div key={`nearby-${index}`} className="grid gap-2 md:grid-cols-[1fr_auto]">
                                <Input value={row} onChange={(event) => updateNearbyPlace(index, event.target.value)} placeholder="Nearby place" />
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => removeNearbyPlace(index)}
                                    disabled={form.nearbyPlaces.length <= 1}
                                >
                                    <Trash2 className="size-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold">Emergency</h3>
                        <Button type="button" variant="outline" size="sm" onClick={addEmergency}>
                            <Plus className="size-4" /> Add
                        </Button>
                    </div>
                    <div className="space-y-3">
                        {form.emergency.map((row, index) => (
                            <div key={`emergency-${index}`} className="grid gap-2 lg:grid-cols-6">
                                <Input value={row.type} onChange={(event) => updateEmergency(index, 'type', event.target.value)} placeholder="Hospital" />
                                <Input value={row.name} onChange={(event) => updateEmergency(index, 'name', event.target.value)} placeholder="Name" />
                                <Input value={row.distance} onChange={(event) => updateEmergency(index, 'distance', event.target.value)} placeholder="Distance" />
                                <Input value={row.walking} onChange={(event) => updateEmergency(index, 'walking', event.target.value)} placeholder="Walking" />
                                <Input value={row.car} onChange={(event) => updateEmergency(index, 'car', event.target.value)} placeholder="By car" />
                                <div className="flex items-end">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => removeEmergency(index)}
                                        disabled={form.emergency.length <= 1}
                                    >
                                        <Trash2 className="size-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold">Transport</h3>
                        <Button type="button" variant="outline" size="sm" onClick={addTransport}>
                            <Plus className="size-4" /> Add
                        </Button>
                    </div>
                    <div className="space-y-3">
                        {form.transport.map((row, index) => (
                            <div key={`transport-${index}`} className="grid gap-2 lg:grid-cols-5">
                                <Input value={row.type} onChange={(event) => updateTransport(index, 'type', event.target.value)} placeholder="Airport" />
                                <Input value={row.name} onChange={(event) => updateTransport(index, 'name', event.target.value)} placeholder="Name" />
                                <Input value={row.distance} onChange={(event) => updateTransport(index, 'distance', event.target.value)} placeholder="Distance" />
                                <Input value={row.car} onChange={(event) => updateTransport(index, 'car', event.target.value)} placeholder="By car" />
                                <div className="flex items-end">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => removeTransport(index)}
                                        disabled={form.transport.length <= 1}
                                    >
                                        <Trash2 className="size-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Head title="Stations" />

            <div className="w-full space-y-6 p-6">
                <div>
                    <h1 className="text-2xl font-semibold">Stations</h1>
                    <p className="text-sm text-muted-foreground">Manage route station details shown on public pages.</p>
                </div>
                <div className="inline-flex rounded-lg border">
                    <Button
                        type="button"
                        variant={activeTab === 'form' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveTab('form')}
                    >
                        Add / Edit Station
                    </Button>
                    <Button
                        type="button"
                        variant={activeTab === 'list' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveTab('list')}
                    >
                        Station Listing
                    </Button>
                </div>

                {activeTab === 'form' && (
                    <form onSubmit={handleCreate} className="rounded-xl border p-4 space-y-5">
                        <h2 className="text-sm font-semibold">Add station</h2>
                        {stationFields()}
                        <div className="flex justify-end">
                            <Button type="submit">
                                <Plus className="size-4" />
                                Add Station
                            </Button>
                        </div>
                    </form>
                )}

                {activeTab === 'list' && (
                    <div className="overflow-hidden rounded-xl border">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[640px] text-sm">
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
                                            <td className="px-4 py-3">
                                                {station.isActive ? <Badge>Active</Badge> : <Badge variant="secondary">Inactive</Badge>}
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center justify-end gap-1">
                                                    <Button size="icon" variant="ghost" disabled={idx === 0} onClick={() => handleMove(station, 'up')}>
                                                        <ArrowUp className="size-4" />
                                                    </Button>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        disabled={idx === sorted.length - 1}
                                                        onClick={() => handleMove(station, 'down')}
                                                    >
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
                )}
            </div>

            {edit && (
                <Dialog open onOpenChange={closeEdit}>
                    <DialogContent className="w-[98vw] max-w-[1900px] sm:!max-w-[95vw] xl:!max-w-[1600px] max-h-[95vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>Edit Station</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleUpdate} className="space-y-5">
                            {stationFields()}
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
