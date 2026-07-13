<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'email', 'mobile', 'subject', 'message', 'status'])]
class CustomerServiceSubmission extends Model {}
