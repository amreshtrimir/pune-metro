<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('explore_pune_places', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category');
            $table->string('nearest_station');
            $table->string('distance_from_station');
            $table->string('distance_note')->nullable();
            $table->text('about');
            $table->string('highlights');
            $table->string('google_maps_link')->nullable();
            $table->foreignId('media_id')->nullable()->constrained('media')->nullOnDelete();
            $table->string('fallback_bg')->nullable();
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('explore_pune_places');
    }
};
