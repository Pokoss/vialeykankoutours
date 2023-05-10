<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->text('activities');
            $table->text('addons');
            $table->integer('duration');
            $table->integer('price');
            $table->date('start_date');
            $table->date('end_date');
            $table->string('image');
            $table->string('country');
            $table->string('city');
            $table->string('address');
            $table->decimal('latitude', 10, 6);
            $table->decimal('longitude', 10, 6);
            $table->boolean('active')->default(true);
            $table->string('slug');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
