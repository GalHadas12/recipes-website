"use client";

import { useSearchParams } from "next/navigation";
import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/types";
import Link from "next/link";

export default function CategoryFilterList({ 
  recipes, 
  slug 
}: { 
  recipes: Recipe[], 
  slug: string 
}) {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty");

  const filteredRecipes = difficulty 
    ? recipes.filter((r) => r.difficulty === difficulty)
    : recipes;

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        <span className="font-black text-gray-700 text-sm">סננו לפי קושי:</span>
        <Link 
          href={`/category/${slug}`}
          className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-sm ${!difficulty ? 'bg-playful-orange text-white shadow-playful-orange/20' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
        >
          הכל
        </Link>
        {["קל", "בינוני", "מאתגר"].map((diff) => (
          <Link 
            key={diff}
            href={`/category/${slug}?difficulty=${diff}`}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-sm ${difficulty === diff ? 'bg-playful-orange text-white shadow-playful-orange/20' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          >
            {diff}
          </Link>
        ))}
      </div>
      
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-4xl p-20 text-center border-2 border-dashed border-gray-200">
          <span className="text-6xl mb-6 block">🔍</span>
          <h3 className="text-2xl font-black text-gray-800 mb-2">לא מצאנו מתכונים כאלו...</h3>
          <p className="text-gray-500 font-medium mb-8">אולי תנסו קטגוריה אחרת או רמת קושי שונה?</p>
          <Link href={`/category/${slug}`} className="text-playful-orange font-black hover:underline">חזרה לכל המתכונים</Link>
        </div>
      )}
    </>
  );
}
