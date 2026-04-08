import { recipes } from "@/data/recipes";
import { CATEGORIES } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeImage from "@/components/RecipeImage";
import { Clock, Users, BarChart2, CheckCircle2, Info, Lightbulb, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  return {
    title: recipe?.title || "מתכון",
    description: recipe?.description || "צפו במתכון המלא באתר המתכונים השמח",
  };
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  const category = CATEGORIES.find((c) => c.id === recipe?.category);

  if (!recipe) return <div>Recipe not found</div>;

  // Local image path
  const localImage = `/recipes/${recipe.slug}.png`;
  
  // Fallback AI image generation
  const encodedPrompt = encodeURIComponent(recipe.imagePrompt + ", artistic painting, detailed, 8k");
  const fallbackAiImage = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=675&seed=${recipe.id}&nologo=true`;

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.title,
    "image": localImage, // Primary image is local
    "description": recipe.description,
    "prepTime": `PT${recipe.prepTime}M`,
    "cookTime": `PT${recipe.cookTime}M`,
    "totalTime": `PT${recipe.prepTime + recipe.cookTime}M`,
    "recipeYield": `${recipe.servings} servings`,
    "recipeCategory": category?.title,
    "recipeIngredient": recipe.ingredients,
    "recipeInstructions": recipe.instructions.map((step, index) => ({
      "@type": "HowToStep",
      "text": step,
      "position": index + 1
    })),
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": `${recipe.nutrition.calories} calories`,
      "proteinContent": `${recipe.nutrition.protein}g`,
      "fatContent": `${recipe.nutrition.fat}g`,
      "carbohydrateContent": `${recipe.nutrition.carbs}g`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-8">
            <Link href="/" className="hover:text-playful-orange transition-colors">בית</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/category/${category?.id}`} className="hover:text-playful-orange transition-colors">{category?.title}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-playful-orange">{recipe.title}</span>
          </nav>

          <article>
            <header className="mb-12 text-center">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">{recipe.title}</h1>
              <p className="text-xl text-gray-500 font-medium mb-8 max-w-2xl mx-auto italic">"{recipe.description}"</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                  <Clock className="w-6 h-6 text-playful-blue mx-auto mb-2" />
                  <span className="block text-xs font-bold text-gray-400">זמן הכנה</span>
                  <span className="font-black text-gray-800">{recipe.prepTime + recipe.cookTime} דק׳</span>
                </div>
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                  <Users className="w-6 h-6 text-playful-pink mx-auto mb-2" />
                  <span className="block text-xs font-bold text-gray-400">מנות</span>
                  <span className="font-black text-gray-800">{recipe.servings}</span>
                </div>
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                  <BarChart2 className="w-6 h-6 text-playful-green mx-auto mb-2" />
                  <span className="block text-xs font-bold text-gray-400">קושי</span>
                  <span className="font-black text-gray-800">{recipe.difficulty}</span>
                </div>
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-playful-yellow mx-auto mb-2" />
                  <span className="block text-xs font-bold text-gray-400">קטגוריה</span>
                  <span className="font-black text-gray-800">{category?.title}</span>
                </div>
              </div>
            </header>

            <div className="aspect-[16/9] rounded-4xl overflow-hidden mb-16 shadow-2xl relative bg-gray-100">
              <RecipeImage 
                src={localImage}
                fallbackSrc={fallbackAiImage}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Sidebar: Ingredients & Nutrition */}
              <div className="space-y-12">
                <section className="bg-playful-yellow/10 p-8 rounded-4xl border-2 border-playful-yellow/20">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
                    <span className="bg-playful-yellow text-white p-2 rounded-xl">🍎</span> מה צריך?
                  </h3>
                  <ul className="space-y-4">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-start gap-3 font-bold text-gray-700">
                        <div className="w-5 h-5 rounded-full border-2 border-playful-yellow flex-shrink-0 mt-0.5" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-playful-blue/5 p-8 rounded-4xl border-2 border-playful-blue/10">
                  <h3 className="text-xl font-black text-gray-800 mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-playful-blue" /> ערכים תזונתיים
                  </h3>
                  <div className="space-y-3 font-bold text-sm text-gray-600">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>קלוריות</span>
                      <span className="text-gray-900">{recipe.nutrition.calories}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>חלבון</span>
                      <span className="text-gray-900">{recipe.nutrition.protein}ג׳</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>פחמימות</span>
                      <span className="text-gray-900">{recipe.nutrition.carbs}ג׳</span>
                    </div>
                    <div className="flex justify-between">
                      <span>שומן</span>
                      <span className="text-gray-900">{recipe.nutrition.fat}ג׳</span>
                    </div>
                  </div>
                </section>
              </div>

              {/* Main: Instructions & Steps */}
              <div className="md:col-span-2 space-y-12">
                {recipe.equipment.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
                      ציוד מיוחד 🛠️
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {recipe.equipment.map((item, i) => (
                        <span key={i} className="bg-gray-100 px-4 py-2 rounded-2xl font-bold text-sm text-gray-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
                    <span className="bg-playful-orange text-white p-2 rounded-xl">🔪</span> יאללה לעבודה
                  </h3>
                  <div className="space-y-8 relative before:absolute before:right-[15px] before:top-2 before:bottom-2 before:w-1 before:bg-playful-orange/10">
                    {recipe.instructions.map((step, i) => (
                      <div key={i} className="relative pr-12">
                        <div className="absolute right-0 top-0 w-8 h-8 bg-playful-orange text-white rounded-full flex items-center justify-center font-black z-10">
                          {i + 1}
                        </div>
                        <p className="text-lg font-bold text-gray-700 leading-relaxed pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-playful-green/10 p-8 rounded-4xl border-2 border-playful-green/20">
                  <h3 className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-7 h-7 text-playful-green" /> טיפים ושדרוגים
                  </h3>
                  <ul className="space-y-4">
                    {recipe.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3 font-bold text-gray-700 italic">
                        <span className="text-playful-green">✦</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
