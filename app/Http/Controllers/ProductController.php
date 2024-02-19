<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $r
     * @return \Illuminate\Http\Response
     */
    public function create(Request $r)
    {
        $r->validate([
            'title' => 'required',
            'slug' => 'required',
            'description' => 'required',
            'price' => 'required',
            'images' => 'nullable|array'
        ]);
        $user = auth()->user();
        $data = $r->all();
        $imageArr = [];
        if (!empty($r->file('images'))) {
            foreach ($r->file('images') as $file) {
                $image = $file;
                $imageName = time() . bin2hex(random_bytes(5)) . '-image';
                Storage::disk('products')->put('/' . $user->id . '/' . $imageName, $image->get());
                $imageArr[] = $imageName;
            }
            $data['images'] = $imageArr;
        }
        return Product::create($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Product::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $r
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $r, $id)
    {
        $r->validate([
            'title' => 'nullable',
            'slug' => 'nullable',
            'description' => 'nullable',
            'price' => 'nullable',
            'images' => 'nullable|array'
        ]);
        $user = auth()->user();
        $data = $r->all();
        $imageArr = [];
        if (!empty($r->file('images'))) {
            // Delete previous images
            $product = Product::find($id);
            foreach ($product->images as $image) {
                Storage::disk('products')->delete('/' . $user->id . '/' . $image);
            }

            foreach ($r->file('images') as $file) {
                $image = $file;
                $imageName = time() . bin2hex(random_bytes(5)) . '-image';
                Storage::disk('products')->put('/' . $user->id . '/' . $imageName, $image->get());
                $imageArr[] = $imageName;
            }
            $data['images'] = $imageArr;
        }
        $product = Product::find($id);
        $product->update($data);
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        return Product::destroy($id);
    }

    /**
     * Search for a name
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Product::where('title', 'like', '%' . $name . '%')->get();
    }
}
