<?php

namespace Database\Seeders;

use App\Models\MediaDimension;
use Illuminate\Database\Seeder;

class MediaDimensionSeeder extends Seeder
{
    public function run(): void
    {
        $dimensions = [
            ['name' => 'Thumbnail', 'width' => 200, 'height' => 200, 'module' => null],
            ['name' => 'Small', 'width' => 400, 'height' => 300, 'module' => null],
            ['name' => 'Medium', 'width' => 800, 'height' => 600, 'module' => null],
            ['name' => 'Large', 'width' => 1200, 'height' => 800, 'module' => null],
            ['name' => 'Wide Banner', 'width' => 1920, 'height' => 400, 'module' => null],
            ['name' => 'Blog Cover', 'width' => 1200, 'height' => 630, 'module' => 'blog'],
            ['name' => 'Blog Thumbnail', 'width' => 400, 'height' => 250, 'module' => 'blog'],
        ];

        foreach ($dimensions as $dimension) {
            MediaDimension::firstOrCreate(
                ['name' => $dimension['name'], 'module' => $dimension['module']],
                ['width' => $dimension['width'], 'height' => $dimension['height']],
            );
        }
    }
}
