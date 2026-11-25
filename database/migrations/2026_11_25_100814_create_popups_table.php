<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('popups', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('media_id')->nullable()->constrained('media')->nullOnDelete();
            $table->string('page');
            $table->unsignedSmallInteger('delay_seconds')->default(3);
            $table->boolean('is_published')->default(false);
            $table->timestamps();
            $table->index(['page', 'is_published']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('popups');
    }
};
