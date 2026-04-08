import { recipes } from "@/data/recipes";
import { CATEGORIES } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryFilterList from "@/components/CategoryFilterList";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.id,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.id === slug);
  return {
    title: category?.title || "קטגוריה",
    description: category?.description || "צפו במתכונים בקטגוריה זו",
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.id === slug);
  const categoryRecipes = recipes.filter((r) => r.category === slug);

  if (!category) return <div>Category not found</div>;

  return (
    <>
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-8">
            <Link href="/" className="hover:text-playful-orange transition-colors">בית</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-playful-orange">{category.title}</span>
          </nav>
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">{category.title}</h1>
            <p className="text-lg text-gray-500 font-medium max-w-2xl">{category.description}</p>
          </div>
          
          <Suspense fallback={<div className="h-64 flex items-center justify-center font-bold text-gray-400">טוען מתכונים...</div>}>
            <CategoryFilterList recipes={categoryRecipes} slug={slug} />
          </Suspense>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
