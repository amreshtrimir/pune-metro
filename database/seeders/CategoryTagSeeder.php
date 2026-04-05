<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategoryTagSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'News & Updates',
                'description' => 'Latest news, announcements, and updates from Pune Metro Rail.',
            ],
            [
                'name' => 'Stations & Routes',
                'description' => 'Information about metro stations, corridors, and route maps.',
            ],
            [
                'name' => 'Project Progress',
                'description' => 'Construction milestones, civil work updates, and project timelines.',
            ],
            [
                'name' => 'Fares & Ticketing',
                'description' => 'Ticket prices, smart card details, and payment methods.',
            ],
            [
                'name' => 'Commuter Guide',
                'description' => 'Travel tips, schedules, entry/exit rules, and passenger information.',
            ],
            [
                'name' => 'Safety & Accessibility',
                'description' => 'Passenger safety protocols, accessibility features, and emergency guidelines.',
            ],
            [
                'name' => 'Environment & Sustainability',
                'description' => 'Green initiatives, energy efficiency, and environmental impact of Pune Metro.',
            ],
            [
                'name' => 'Technology & Innovation',
                'description' => 'CBTC signalling, automatic train operation, and smart metro systems.',
            ],
            [
                'name' => 'Tenders & Contracts',
                'description' => 'Official tenders, contract awards, and procurement notices.',
            ],
            [
                'name' => 'Events & Campaigns',
                'description' => 'Public outreach events, awareness campaigns, and metro milestones.',
            ],
        ];

        foreach ($categories as $category) {
            Category::firstOrCreate(
                ['slug' => Str::slug($category['name'])],
                [
                    'name' => $category['name'],
                    'description' => $category['description'],
                ],
            );
        }

        $tags = [
            // Lines & Corridors
            'Line 1', 'Line 2', 'Line 3', 'Aqua Line', 'Purple Line', 'Pink Line',
            'PCMC', 'Swargate', 'Vanaz', 'Ramwadi', 'Nashik Phata',
            // Key Stations
            'Shivajinagar', 'Civil Court', 'RTO Colony', 'Garware College',
            'Deccan Gymkhana', 'Nal Stop', 'Sinhagad Road', 'Khadki',
            'Bhosari', 'Phulenagar', 'Dapodi', 'Bopodi', 'Kasarwadi',
            'Pimpri', 'Chinchwad', 'Sant Tukaram Nagar', 'Bhakti Shakti',
            'Range Hill', 'Aundh', 'Wakad', 'Hinjawadi',
            // Organisations & Authorities
            'PMRDA', 'MAHA-METRO', 'MSRTC', 'PMPML', 'DPR',
            'NMC', 'PMC', 'Central Government',
            // Project Phases
            'Phase 1', 'Phase 2', 'Phase 3', 'Underground', 'Elevated',
            'Depot', 'Viaduct', 'Station Box',
            // Technical & Operations
            'Smart Card', 'QR Ticket', 'AFC', 'CBTC', 'DEMU',
            'Rolling Stock', 'Frequency', 'Schedule', 'Feeder Bus',
            'Last Mile Connectivity', 'Park and Ride', 'Multimodal Hub',
            // Sustainability
            'Solar Energy', 'Green Metro', 'IGBC', 'Carbon Neutral',
            // General
            'Inauguration', 'Trial Run', 'Commercial Operation',
            'Land Acquisition', 'Tender', 'Safety', 'Accessibility',
        ];

        foreach ($tags as $tagName) {
            Tag::firstOrCreate(
                ['slug' => Str::slug($tagName)],
                ['name' => $tagName],
            );
        }
    }
}
