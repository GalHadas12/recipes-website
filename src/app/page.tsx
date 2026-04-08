import Link from "next/link";
import { recipes } from "@/data/recipes";
import { CATEGORIES } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function Home() {
  // Display all 15 recipes instead of just a subset
  const allRecipes = recipes;

  return (
    <>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-playful-yellow/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-playful-pink/10 rounded-full blur-3xl animate-pulse delay-700" />
          
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm mb-8 border border-playful-yellow/50">
              <Sparkles className="w-5 h-5 text-playful-yellow" />
              <span className="font-bold text-gray-700">בואו לבשל משהו טעים היום!</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              המתכונים הכי <span className="text-playful-orange">שמחים</span> <br />
              והכי <span className="text-playful-green underline decoration-wavy decoration-playful-yellow">טעימים</span> ברשת
            </h1>
            
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium">
              מבחר ענק של מתכונים קלים, בריאים וחגיגיים שכיף לראות ופשוט להכין.
            </p>
            
            <Link 
              href="#categories"
              className="inline-flex items-center gap-3 bg-playful-orange hover:bg-playful-orange/90 text-white px-10 py-5 rounded-4xl font-black text-xl shadow-xl shadow-playful-orange/30 transition-all hover:scale-105"
            >
              בואו נתחיל! <ArrowLeft className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black text-gray-800">מה בא לכם להכין? 🎨</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {CATEGORIES.map((category, index) => {
                const colors = [
                  'bg-playful-orange', 'bg-playful-green', 'bg-playful-pink', 'bg-playful-blue', 'bg-playful-yellow'
                ];
                return (
                  <Link 
                    key={category.id}
                    href={`/category/${category.id}`}
                    className={`${colors[index % colors.length]} p-8 rounded-4xl text-white hover:scale-105 transition-transform shadow-lg group`}
                  >
                    <h3 className="text-2xl font-black mb-2">{category.title}</h3>
                    <p className="text-white/80 text-sm font-medium line-clamp-2">{category.description}</p>
                    <div className="mt-4 flex justify-end">
                      <div className="bg-white/20 p-2 rounded-2xl group-hover:rotate-12 transition-transform">
                        <ArrowLeft className="w-6 h-6" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Recipes */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black text-gray-800">כל המתכונים שלנו ✨</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {allRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
