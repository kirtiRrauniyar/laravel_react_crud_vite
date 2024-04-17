<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function addproduct(Request $request)
    {
        $product = new Product ;
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->description = $request->input('description');
        $product->file_path = $request->file('file_path')->store('upload_products');
        $product->save();
        return $product;
    }
}
