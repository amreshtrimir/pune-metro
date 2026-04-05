<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('posts', function (Blueprint $table): void {
            $table->foreignId('featured_image_media_id')
                ->nullable()
                ->after('user_id')
                ->constrained('media')
                ->nullOnDelete();

            $table->foreignId('card_image_media_id')
                ->nullable()
                ->after('featured_image_media_id')
                ->constrained('media')
                ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table): void {
            $table->dropForeign(['featured_image_media_id']);
            $table->dropForeign(['card_image_media_id']);
            $table->dropColumn(['featured_image_media_id', 'card_image_media_id']);
        });
    }
};
