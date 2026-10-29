<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('faqs', function (Blueprint $table): void {
            $table->id();
            $table->string('question');
            $table->text('answer');
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('sort_order');
        });

        Schema::create('faq_pages', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('faq_id')->constrained()->cascadeOnDelete();
            $table->string('page');

            $table->unique(['faq_id', 'page']);
            $table->index('page');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('faq_pages');
        Schema::dropIfExists('faqs');
    }
};
