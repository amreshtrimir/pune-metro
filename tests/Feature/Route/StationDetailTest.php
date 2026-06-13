<?php

it('includes the station map key in the detail payload', function (): void {
    $this->get(route('route.station-detail', 'pmr-2'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('frontend/route/station-detail')
            ->where('station.code', 'PMR 2')
            ->where('station.mapKey', 'https://share.google/ZfIlIqPnqmFYXeTR6')
        );
});

it('includes the station map key for other linked stations', function (): void {
    $this->get(route('route.station-detail', 'pmr-11'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('frontend/route/station-detail')
            ->where('station.code', 'PMR 11')
            ->where('station.mapKey', 'https://share.google/24DJLDRCMdEF8DELK')
        );
});
