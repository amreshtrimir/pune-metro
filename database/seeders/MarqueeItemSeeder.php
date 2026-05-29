<?php

namespace Database\Seeders;

use App\Models\MarqueeItem;
use Illuminate\Database\Seeder;

class MarqueeItemSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            'Experience the Future of Urban Mobility with Pune Metro',
            'Your Journey, Simplified',
            'Redefining City Travel with Speed, Safety & Comfort',
            'Pune Metro Line 3 — Hinjewadi to Shivajinagar',
            'Safe · Fast · Sustainable',
            'Connect. Commute. Celebrate Pune.',
        ];

        foreach ($items as $index => $text) {
            MarqueeItem::firstOrCreate(
                ['text' => $text],
                ['sort_order' => $index, 'is_active' => true],
            );
        }
    }
}
