<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('explore_pune_places', function (Blueprint $table) {
            $table->string('nearest_station')->nullable()->change();
            $table->string('distance_from_station')->nullable()->change();
            $table->text('about')->nullable()->change();
            $table->string('highlights')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('explore_pune_places', function (Blueprint $table) {
            $table->string('nearest_station')->nullable(false)->change();
            $table->string('distance_from_station')->nullable(false)->change();
            $table->text('about')->nullable(false)->change();
            $table->string('highlights')->nullable(false)->change();
        });
    }
};
