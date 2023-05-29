<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|unique:categories',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images','public');
        }
        $category = Category::create([
            'title' => $request->title,
            'image' => $imagePath,
        ]);
        return response()->json($category, 201);
    }

    public function index()
    {
        $categories = Category::all();
        $responseData = $categories->toArray();

        return response()->json([
            'data' => $responseData
        ], 200);
    }
    public function show($id)
    {
        $category = Category::findOrFail($id);
        $responseData = $category->toArray();
        return response()->json(['data' => $responseData], 200);
    }
}
