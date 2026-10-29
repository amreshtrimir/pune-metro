<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['faq_id', 'page'])]
class FaqPage extends Model
{
    public $timestamps = false;
}
