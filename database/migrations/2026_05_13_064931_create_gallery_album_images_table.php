<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('gallery_album_images', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('gallery_album_id')->constrained()->cascadeOnDelete();
            $table->foreignId('media_id')->constrained('media')->cascadeOnDelete();
            $table->foreignId('thumb_media_id')->nullable()->constrained('media')->nullOnDelete();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();

            $table->index(['gallery_album_id', 'sort_order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gallery_album_images');
    }
};
