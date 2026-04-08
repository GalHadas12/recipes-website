import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-playful-yellow/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2 group text-playful-orange transition-transform hover:scale-105">
            <div className="bg-playful-yellow p-2 rounded-2xl rotate-3 group-hover:rotate-12 transition-transform">
              <UtensilsCrossed className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight">המתכון השמח</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-bold text-gray-600 hover:text-playful-orange transition-colors">בית</Link>
            <Link href="/#categories" className="font-bold text-gray-600 hover:text-playful-orange transition-colors">קטגוריות</Link>
          </div>
          
          <div className="bg-playful-orange/10 px-4 py-2 rounded-full hidden sm:block">
            <span className="text-playful-orange font-bold text-sm">היום מבשלים משהו טוב! 🥣</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
