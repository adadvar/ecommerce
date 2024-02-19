<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    protected $fillable = ['parent_id', 'user_id', 'title', 'slug', 'icon'];

    public function setSlugAttribute($value)
    {
        $slug = str_replace(" ", "-", $value);
        $this->attributes['slug'] = $slug;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function child()
    {
        return $this->hasMany(Category::class, 'parent_id')->with('child');
    }


    public static function boot()
    {
        parent::boot();

        static::deleting(function ($category) {
            $category->children()->delete();
        });
    }

    static function extractChildrenIds($category)
    {
        $categoryIds = [$category->id];

        if ($category->child) {
            foreach ($category->child as $child) {
                $categoryIds = array_merge($categoryIds, self::extractChildrenIds($child));
            }
        }
        return $categoryIds;
    }
}
