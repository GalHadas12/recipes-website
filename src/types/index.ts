export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "kids" | "quick" | "desserts" | "healthy" | "holiday";
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  difficulty: "קל" | "בינוני" | "מאתגר";
  servings: number;
  ingredients: string[];
  equipment: string[];
  instructions: string[];
  tips: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  imagePrompt: string; // The prompt to generate the artistic image
}

export const CATEGORIES = [
  { id: "kids", title: "מבשלים עם ילדים", description: "מתכונים קלים וכיפיים שאפשר להכין עם הקטנטנים." },
  { id: "quick", title: "ארוחות ערב בצ'יק צ'ק", description: "ארוחות סופר מהירות לערבים עמוסים." },
  { id: "desserts", title: "קינוחים שווים", description: "מתוקים שגונבים את ההצגה." },
  { id: "healthy", title: "בריא וטעים", description: "מנות מזינות שעושות טוב לגוף ולנפש." },
  { id: "holiday", title: "ארוחות שישי וחג", description: "מנות חגיגיות ומרשימות לשולחן השבת." }
] as const;
