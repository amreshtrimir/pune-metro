<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Seed the FAQs from database/seeders/data/faqs.php. Safe to re-run: existing questions are left untouched.
     */
    public function run(): void
    {
        /** @var array<int, array{question: string, answer: string}> $faqs */
        $faqs = require database_path('seeders/data/faqs.php');

        foreach ($faqs as $index => $faq) {
            Faq::firstOrCreate(
                ['question' => $faq['question']],
                ['answer' => $faq['answer'], 'sort_order' => $index, 'is_active' => true],
            );
        }
    }
}
