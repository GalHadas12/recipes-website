export default function Footer() {
  return (
    <footer className="bg-white border-t border-playful-yellow/30 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-4xl mb-4">🎨👩‍🍳👨‍🍳</p>
        <h3 className="text-xl font-black text-playful-orange mb-2">המתכון השמח</h3>
        <p className="text-gray-500 font-medium">כיף לבשל, כיף לאכול!</p>
        <div className="mt-8 pt-8 border-t border-gray-100 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} כל הזכויות שמורות לאתר המתכונים הכי שמח ברשת
        </div>
      </div>
    </footer>
  );
}
