<?php

namespace App\Http\Controllers;

use App\Services\Board\BoardMemberService;
use App\Services\ExplorePune\ExplorePunePlaceService;
use App\Services\Gallery\GalleryAlbumService;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Fortify\Features;

class PagesController extends Controller
{
    public function __construct(
        private readonly GalleryAlbumService $galleryAlbumService,
        private readonly BoardMemberService $boardMemberService,
        private readonly ExplorePunePlaceService $explorePunePlaceService,
    ) {}

    public function home(): Response
    {
        return Inertia::render('welcome', [
            'canRegister' => Features::enabled(Features::registration()),
            'members' => $this->boardMemberService->getActiveMembersForFrontend(),
            'explorePlaces' => $this->explorePunePlaceService->getActivePlacesForFrontend(),
        ]);
    }

    public function overview(): Response
    {
        return Inertia::render('frontend/about');
    }

    public function board(): Response
    {
        return Inertia::render('frontend/board', [
            'members' => $this->boardMemberService->getActiveMembersForFrontend(),
        ]);
    }

    public function projectUpdate(): Response
    {
        return Inertia::render('frontend/project-update', [
            'images' => $this->galleryAlbumService->getProjectUpdateImages(),
        ]);
    }

    public function keyHighlights(): Response
    {
        return Inertia::render('frontend/key-highlights');
    }

    public function photoGallery(): Response
    {
        return Inertia::render('frontend/project-profile/photo-gallery', [
            'albums' => $this->galleryAlbumService->getAlbumsForFrontend(),
        ]);
    }

    public function routeMap(): Response
    {
        return Inertia::render('frontend/route-map');
    }

    public function stationList(): Response
    {
        return Inertia::render('frontend/route/station-list');
    }

    public function stationDetail(string $slug): Response
    {
        $stations = [
            [
                'code' => 'PMR 1',
                'name' => 'Maan',
                'slug' => 'pmr-1',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'TCS, Megapolis'],
                    ['gate' => 'Gate 02', 'landmarks' => 'Eon Homes, Tech Mahindra'],
                    ['gate' => 'Gate 03', 'landmarks' => 'Coming Soon'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Ground to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Ground to Platform'],
                    ['name' => 'Lift 8', 'level' => 'Mezzanine to Platform'],
                    ['name' => 'Lift 9', 'level' => 'Mezzanine to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Mezzanine'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Mezzanine'],
                    ['name' => 'Escalator 3', 'level' => 'Mezzanine to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Mezzanine to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Mezzanine'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Available — Paid area beside Station Control Room'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['Megapolis Residential', 'Pawar Public School', 'TCS', 'Tech Mahindra'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Farmazia Hospital', 'distance' => '2.4 km', 'walking' => '29 min', 'car' => '8 min'],
                    ['type' => 'Police Station', 'name' => 'Hinjewadi Police Station, Pimpri-Chinchwad Police Commissionerate', 'distance' => '3.1 km', 'walking' => '37 min', 'car' => '10 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Hinjewadi Fire Station, PCMC Fire Brigade', 'distance' => '4.4 km', 'walking' => '54 min', 'car' => '12 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => 'Pune International Airport', 'distance' => '27 km', 'car' => '50 min'],
                    ['type' => 'Railway Station', 'name' => 'Pune Junction Railway Station', 'distance' => '23 km', 'car' => '45 min'],
                ],
            ],
            [
                'code' => 'PMR 2',
                'name' => 'Maan – MIDC Circle, Phase II',
                'slug' => 'pmr-2',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'Embassy Quadron'],
                    ['gate' => 'Gate 02', 'landmarks' => 'Maan Depot'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'U Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Available — Paid area beside Station Control Room'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['Quadron Park', 'MIDC', 'Vedant Hospital'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Ruby Hall Clinic, Hinjewadi', 'distance' => '1.1 km', 'walking' => '14 min', 'car' => '5 min'],
                    ['type' => 'Police Station', 'name' => 'Hinjewadi Police Station, PCMC', 'distance' => '1.4 km', 'walking' => '17 min', 'car' => '6 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Hinjewadi Fire Station, PCMC', 'distance' => '3.7 km', 'walking' => '44 min', 'car' => '10 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '25 km', 'car' => '48 min'],
                    ['type' => 'Railway Station', 'name' => 'Pune Junction Railway Station', 'distance' => '21 km', 'car' => '42 min'],
                ],
            ],
            [
                'code' => 'PMR 3',
                'name' => 'Maan Bus Depot',
                'slug' => 'pmr-3',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'Dohler'],
                    ['gate' => 'Gate 02', 'landmarks' => 'Abhay Bio CNG Pvt Ltd, SWM Plant'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Not Available'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['Quadron Park', 'MIDC', 'Vedant Hospital'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'LifeTree Hospital', 'distance' => '1.9 km', 'walking' => '23 min', 'car' => '6 min'],
                    ['type' => 'Police Station', 'name' => 'Hinjewadi Police Station, PCMC', 'distance' => '2.0 km', 'walking' => '24 min', 'car' => '7 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Hinjewadi Fire Station, PCMC', 'distance' => '4.1 km', 'walking' => '49 min', 'car' => '11 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '26 km', 'car' => '49 min'],
                    ['type' => 'Railway Station', 'name' => 'Pune Junction Railway Station', 'distance' => '22 km', 'car' => '43 min'],
                ],
            ],
            [
                'code' => 'PMR 4',
                'name' => 'Hinjawadi Phase-II Circle-II',
                'slug' => 'pmr-4',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'Infosys'],
                    ['gate' => 'Gate 02', 'landmarks' => 'TCG International Biotech Park'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Not Available'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['Vedant Hospital', 'Hinjewadi Police Station'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Hinjewadi Superspeciality Hospital', 'distance' => '950 m', 'walking' => '11 min', 'car' => '4 min'],
                    ['type' => 'Police Station', 'name' => 'Hinjewadi Police Station, PCMC', 'distance' => '1.2 km', 'walking' => '15 min', 'car' => '5 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Hinjewadi Fire Station, PCMC', 'distance' => '3.4 km', 'walking' => '41 min', 'car' => '9 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '24 km', 'car' => '46 min'],
                    ['type' => 'Railway Station', 'name' => 'Pune Junction Railway Station', 'distance' => '20 km', 'car' => '40 min'],
                ],
            ],
            [
                'code' => 'PMR 5',
                'name' => 'Hinjawadi Phase-II Circle-I',
                'slug' => 'pmr-5',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'Wipro, Infosys'],
                    ['gate' => 'Gate 02', 'landmarks' => 'Ibys Hotel'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Not Available'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['Wipro'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Sanjeevani Hospital', 'distance' => '1.6 km', 'walking' => '19 min', 'car' => '6 min'],
                    ['type' => 'Police Station', 'name' => 'Hinjewadi Police Station, PCMC', 'distance' => '2.0 km', 'walking' => '24 min', 'car' => '7 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Hinjewadi Fire Station, PCMC', 'distance' => '4.0 km', 'walking' => '48 min', 'car' => '11 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '23 km', 'car' => '44 min'],
                    ['type' => 'Railway Station', 'name' => 'Pune Junction Railway Station', 'distance' => '19 km', 'car' => '38 min'],
                ],
            ],
            [
                'code' => 'PMR 6',
                'name' => 'Padmabhushan Chowk',
                'slug' => 'pmr-6',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'Chroma / Terminal 1'],
                    ['gate' => 'Gate 02', 'landmarks' => 'Atlas Capco'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Not Available'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['Pall Corporation', 'KB Chowk'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Hinjewadi Superspeciality Hospital', 'distance' => '2.7 km', 'walking' => '33 min', 'car' => '9 min'],
                    ['type' => 'Police Station', 'name' => 'Hinjewadi Police Station, PCMC', 'distance' => '2.4 km', 'walking' => '29 min', 'car' => '8 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Hinjewadi Fire Station, PCMC', 'distance' => '4.8 km', 'walking' => '58 min', 'car' => '13 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '22 km', 'car' => '42 min'],
                    ['type' => 'Railway Station', 'name' => 'Shivajinagar Railway Station', 'distance' => '18 km', 'car' => '35 min'],
                ],
            ],
            [
                'code' => 'PMR 7',
                'name' => 'Shree Shiv Chhatrapati Shivaji Maharaj Chowk, Hinjewadi',
                'slug' => 'pmr-7',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'Shivaji Chowk'],
                    ['gate' => 'Gate 02', 'landmarks' => 'Mandi Shivaji Chowk, Birla Soft'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Not Available'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['Shivaji Chowk'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Ruby Hall Clinic, Hinjewadi', 'distance' => '1.3 km', 'walking' => '16 min', 'car' => '5 min'],
                    ['type' => 'Police Station', 'name' => 'Hinjewadi Police Station, PCMC', 'distance' => '1.7 km', 'walking' => '21 min', 'car' => '6 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Hinjewadi Fire Station, PCMC', 'distance' => '4.2 km', 'walking' => '50 min', 'car' => '12 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '21 km', 'car' => '40 min'],
                    ['type' => 'Railway Station', 'name' => 'Shivajinagar Railway Station', 'distance' => '17 km', 'car' => '33 min'],
                ],
            ],
            [
                'code' => 'PMR 8',
                'name' => 'Hinjawadi Phase - I',
                'slug' => 'pmr-8',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'Hotel Vevanta'],
                    ['gate' => 'Gate 02', 'landmarks' => 'Truww Hinjewadi'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Not Available'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['XION Mall', 'D-Mart'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Sanjeevani Hospital', 'distance' => '1.0 km', 'walking' => '13 min', 'car' => '4 min'],
                    ['type' => 'Police Station', 'name' => 'Hinjewadi Police Station, PCMC', 'distance' => '1.4 km', 'walking' => '17 min', 'car' => '6 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Hinjewadi Fire Station, PCMC', 'distance' => '3.9 km', 'walking' => '47 min', 'car' => '11 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '20 km', 'car' => '38 min'],
                    ['type' => 'Railway Station', 'name' => 'Shivajinagar Railway Station', 'distance' => '16 km', 'car' => '31 min'],
                ],
            ],
            [
                'code' => 'PMR 9',
                'name' => 'Wakad Chowk',
                'slug' => 'pmr-9',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'Wakad Chowk'],
                    ['gate' => 'Gate 02', 'landmarks' => 'Surya Hospital'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Available — Paid area beside Station Control Room'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['Blossom Public School', 'Mumbai Pune National Highway'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Surya Mother & Child Super Speciality Hospital', 'distance' => '850 m', 'walking' => '10 min', 'car' => '4 min'],
                    ['type' => 'Police Station', 'name' => 'Wakad Police Station, Pimpri-Chinchwad Police Commissionerate', 'distance' => '950 m', 'walking' => '11 min', 'car' => '5 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Wakad Fire Station, PCMC Fire Brigade', 'distance' => '1.7 km', 'walking' => '21 min', 'car' => '6 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '19 km', 'car' => '36 min'],
                    ['type' => 'Railway Station', 'name' => 'Pimpri Railway Station', 'distance' => '11 km', 'car' => '24 min'],
                ],
            ],
            [
                'code' => 'PMR 10',
                'name' => 'Shree Shiv Chhatrapati Sports Complex, Mahalunge',
                'slug' => 'pmr-10',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => '7 Avenues'],
                    ['gate' => 'Gate 02', 'landmarks' => 'Balewadi Stadium'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Available — Paid area beside Station Control Room'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['PICT Model School', 'Manipal Hospital'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Manipal Hospitals, Baner', 'distance' => '1.2 km', 'walking' => '15 min', 'car' => '5 min'],
                    ['type' => 'Police Station', 'name' => 'Baner Police Station, Pune City Police', 'distance' => '2.1 km', 'walking' => '26 min', 'car' => '7 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Aundh Fire Station, Pune Municipal Corporation', 'distance' => '2.9 km', 'walking' => '35 min', 'car' => '9 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '18 km', 'car' => '34 min'],
                    ['type' => 'Railway Station', 'name' => 'Shivajinagar Railway Station', 'distance' => '14 km', 'car' => '28 min'],
                ],
            ],
            [
                'code' => 'PMR 11',
                'name' => 'Mitcon Balewadi',
                'slug' => 'pmr-11',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'Amartech Park, MIS School'],
                    ['gate' => 'Gate 02', 'landmarks' => 'Nic Mar'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Not Available'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['Aram Tech Park', 'NICMAR University', 'Mahalunge (Ozon) Hospital'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Jupiter Hospital', 'distance' => '1.4 km', 'walking' => '17 min', 'car' => '5 min'],
                    ['type' => 'Police Station', 'name' => 'Baner Police Station, Pune City Police', 'distance' => '1.9 km', 'walking' => '23 min', 'car' => '7 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Aundh Fire Station, Pune Municipal Corporation', 'distance' => '3.1 km', 'walking' => '37 min', 'car' => '9 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '17 km', 'car' => '32 min'],
                    ['type' => 'Railway Station', 'name' => 'Shivajinagar Railway Station', 'distance' => '13 km', 'car' => '26 min'],
                ],
            ],
            [
                'code' => 'PMR 12',
                'name' => 'R K Laxman Museum Balewadi',
                'slug' => 'pmr-12',
                'entrances' => [
                    ['gate' => 'Gate 01', 'landmarks' => 'Ridhi Sidhi Society, Smart Works'],
                    ['gate' => 'Gate 02', 'landmarks' => 'RK Laxman Museum'],
                ],
                'platforms' => [
                    ['number' => 'Platform 1', 'direction' => 'Civil Court (Down Line)'],
                    ['number' => 'Platform 2', 'direction' => 'Maan Depot (Up Line)'],
                ],
                'liftsEscalators' => [
                    ['name' => 'Lift 1', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 2', 'level' => 'Unpaid — Ground to Concourse'],
                    ['name' => 'Lift 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Lift 4', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 1', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 2', 'level' => 'Ground to Unpaid Concourse'],
                    ['name' => 'Escalator 3', 'level' => 'Paid — Concourse to Platform'],
                    ['name' => 'Escalator 4', 'level' => 'Paid — Concourse to Platform'],
                ],
                'facilities' => [
                    ['name' => 'Restrooms / Toilets', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'First Aid', 'location' => 'Paid area beside Station Control Room'],
                    ['name' => 'Wheelchair', 'location' => 'First Aid Room'],
                    ['name' => 'Parking', 'location' => 'Not Available'],
                    ['name' => 'Drinking Water', 'location' => 'Paid area beside Station Control Room'],
                ],
                'nearbyPlaces' => ['Mahalunge (Ozon) Hospital', 'Manipal Hospital'],
                'emergency' => [
                    ['type' => 'Hospital', 'name' => 'Accord Multispeciality Hospital', 'distance' => '950 m', 'walking' => '12 min', 'car' => '4 min'],
                    ['type' => 'Police Station', 'name' => 'Baner Police Station, Pune City Police', 'distance' => '1.7 km', 'walking' => '21 min', 'car' => '6 min'],
                    ['type' => 'Fire Brigade', 'name' => 'Aundh Fire Station, Pune Municipal Corporation', 'distance' => '2.7 km', 'walking' => '33 min', 'car' => '8 min'],
                ],
                'transport' => [
                    ['type' => 'Airport', 'name' => '—', 'distance' => '16 km', 'car' => '30 min'],
                    ['type' => 'Railway Station', 'name' => 'Shivajinagar Railway Station', 'distance' => '12 km', 'car' => '24 min'],
                ],
            ],
            ['code' => 'PMR 13', 'name' => 'Balewadi High Street', 'slug' => 'pmr-13', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
            ['code' => 'PMR 14', 'name' => 'Balewadi Phata', 'slug' => 'pmr-14', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
            ['code' => 'PMR 15', 'name' => 'Baner Gaon', 'slug' => 'pmr-15', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
            ['code' => 'PMR 16', 'name' => 'Baner Pashan Link Road', 'slug' => 'pmr-16', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
            ['code' => 'PMR 17', 'name' => 'Aundh', 'slug' => 'pmr-17', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
            ['code' => 'PMR 18', 'name' => 'Sakalnagar', 'slug' => 'pmr-18', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
            ['code' => 'PMR 19', 'name' => 'Savitribai Phule Pune University', 'slug' => 'pmr-19', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
            ['code' => 'PMR 20', 'name' => 'Bhosalenagar – RBI', 'slug' => 'pmr-20', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
            ['code' => 'PMR 21', 'name' => 'Agriculture College', 'slug' => 'pmr-21', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
            ['code' => 'PMR 22', 'name' => 'Shivaji Nagar', 'slug' => 'pmr-22', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
            ['code' => 'PMR 23', 'name' => 'District Court, Pune', 'slug' => 'pmr-23', 'entrances' => [], 'platforms' => [], 'liftsEscalators' => [], 'facilities' => [], 'nearbyPlaces' => [], 'emergency' => [], 'transport' => []],
        ];

        $station = collect($stations)->firstWhere('slug', $slug);

        if (! $station) {
            abort(404);
        }

        return Inertia::render('frontend/route/station-detail', [
            'station' => $station,
        ]);
    }

    public function eiaReports(): Response
    {
        return Inertia::render('frontend/environment/eia-reports');
    }

    public function carbonCredit(): Response
    {
        return Inertia::render('frontend/environment/carbon-credit');
    }

    public function artFromScrap(): Response
    {
        return Inertia::render('frontend/environment/art-from-scrap');
    }

    public function greenInitiatives(): Response
    {
        return Inertia::render('frontend/environment/green-initiatives');
    }

    public function timeTable(): Response
    {
        return Inertia::render('frontend/passenger-info/time-table');
    }

    public function fareTable(): Response
    {
        return Inertia::render('frontend/passenger-info/fare-table');
    }

    public function dosAndDonts(): Response
    {
        return Inertia::render('frontend/passenger-info/dos-and-donts');
    }

    public function itemsNotToCarry(): Response
    {
        return Inertia::render('frontend/passenger-info/items-not-to-carry');
    }

    public function offencesAndPenalties(): Response
    {
        return Inertia::render('frontend/passenger-info/offences-and-penalties');
    }

    public function lostAndFound(): Response
    {
        return Inertia::render('frontend/passenger-info/lost-and-found');
    }

    public function customerService(): Response
    {
        return Inertia::render('frontend/passenger-info/customer-service');
    }

    public function lastMileConnectivity(): Response
    {
        return Inertia::render('frontend/passenger-info/last-mile-connectivity');
    }

    public function retailFnb(): Response
    {
        return Inertia::render('frontend/passenger-info/retail-fnb');
    }

    public function stationAreaMap(): Response
    {
        return Inertia::render('frontend/passenger-info/station-area-map');
    }

    public function passengerAmenities(): Response
    {
        return Inertia::render('frontend/passenger-info/passenger-amenities');
    }

    public function termsAndConditions(): Response
    {
        return Inertia::render('frontend/legal/terms-and-conditions');
    }

    public function privacyPolicy(): Response
    {
        return Inertia::render('frontend/legal/privacy-policy');
    }

    public function stationRetail(): Response
    {
        return Inertia::render('frontend/business-development/station-retail');
    }
}
