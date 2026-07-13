<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('stations', function (Blueprint $table): void {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->text('map_key')->nullable();
            $table->text('embed_map_url')->nullable();
            $table->json('entrances')->nullable();
            $table->json('platforms')->nullable();
            $table->json('lifts_escalators')->nullable();
            $table->json('facilities')->nullable();
            $table->json('nearby_places')->nullable();
            $table->json('emergency')->nullable();
            $table->json('transport')->nullable();
            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();

            $table->index('sort_order');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('stations');
    }
};
