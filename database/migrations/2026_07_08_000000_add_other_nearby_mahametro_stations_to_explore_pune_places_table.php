<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('explore_pune_places', function (Blueprint $table) {
            $table->text('other_nearby_mahametro_stations')->nullable()->after('nearest_station');
        });
    }

    public function down(): void
    {
        Schema::table('explore_pune_places', function (Blueprint $table) {
            $table->dropColumn('other_nearby_mahametro_stations');
        });
    }
};
