<?php

namespace Database\Seeders;

use App\Models\BoardMember;
use Illuminate\Database\Seeder;

class BoardMemberSeeder extends Seeder
{
    public function run(): void
    {
        $members = [
            [
                'name' => 'Dr. Praveer Sinha',
                'role' => 'Chairman',
            ],
            [
                'name' => 'Dr. Mangu Singh',
                'role' => 'Independent Director',
            ],
            [
                'name' => 'Mr. Sudip Mullick',
                'role' => 'Independent Director',
            ],
            [
                'name' => 'Mr. Basil Watters',
                'role' => 'Director',
            ],
            [
                'name' => 'Ms. Sukriti Sood',
                'role' => 'Director',
            ],
            [
                'name' => 'Mr. Rajan Kapoor',
                'role' => 'Alternate Director to Mr. Basil Watters',
            ],
            [
                'name' => 'Mr. Anil Kumar Saini',
                'role' => 'Chief Executive Officer',
                'bio' => "Mr. Anil Kumar Saini brings over 30 years of leadership experience in rail transport, spanning project management, operations, and business development. He has led major assignments across India's rail and metro sectors, demonstrating strong expertise in execution and strategy. An IIT Roorkee graduate, he has also completed executive programs at Harvard Business School and INSEAD.",
            ],
            [
                'name' => 'Mr. Mitul Jhaveri',
                'role' => 'Chief Financial Officer',
            ],
            [
                'name' => 'Ms. Anjali Gupta',
                'role' => 'Company Secretary',
            ],
            [
                'name' => 'Ms. K Manjulekshmi',
                'role' => 'Director nominated by Pune Metropolitan Region Development Authority',
            ],
        ];

        foreach ($members as $index => $data) {
            BoardMember::firstOrCreate(
                ['name' => $data['name']],
                array_merge($data, ['sort_order' => $index, 'is_active' => true]),
            );
        }
    }
}
