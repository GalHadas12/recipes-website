# 🥗 אתר המתכונים השמח

אתר מתכונים מעוצב, ידידותי למשתמש ובעיקר - שמח! האתר נבנה עם דגש על חוויית משתמש מעולה, תמיכה מלאה בעברית (RTL) ועיצוב מודרני שמתאים לכל המכשירים.

## 🚀 פריסה ל-Cloudflare Pages

האתר מוכן לפריסה כאתר סטטי ב-Cloudflare Pages.

### שלבי הפריסה:
1.  **חיבור ל-GitHub:** התחברו ללוח הבקרה של Cloudflare Pages וחברו את חשבון ה-GitHub שלכם.
2.  **בחירת המאגר:** בחרו את המאגר `recipes-website`.
3.  **הגדרות בנייה (Build Settings):**
    *   **Framework preset:** `Next.js`
    *   **Build command:** `npm run build`
    *   **Build output directory:** `out`
4.  **הגדרת דומיין:**
    *   עברו ללשונית "Custom domains" בלוח הבקרה של הפרויקט ב-Cloudflare.
    *   לחצו על "Set up a custom domain" ועקבו אחר ההוראות לחיבור הדומיין שלכם.

## 🥣 הוספת מתכון חדש

כדי להוסיף מתכון חדש לאתר, עקבו אחר השלבים הבאים:

1.  **עדכון הנתונים:** פתחו את הקובץ `src/data/recipes.ts` והוסיפו אובייקט מתכון חדש למערך ה-`recipes`. ודאו שאתם ממלאים את כל השדות (כותרת, תיאור, מרכיבים ספציפיים, זמן הכנה וכו').
2.  **הוספת הנחיית תמונה (Image Prompt):** הוסיפו שדה `imagePrompt` עם תיאור אומנותי באנגלית של המנה (למשל: "An artistic watercolor painting of...").
3.  **יצירת התמונה:**
    *   אם ברצונכם להוריד את התמונה באופן אוטומטי, הוסיפו את ה-slug של המתכון החדש לקובץ `scripts/generate_images.sh`.
    *   הריצו את הפקודה: `bash scripts/generate_images.sh`.
4.  **בדיקה מקומית:** הריצו `npm run dev` וודאו שהמתכון מופיע ומוצג בצורה תקינה.
5.  **דחיפה ל-GitHub:** בצעו `git commit` ו-`git push`. האתר יתעדכן אוטומטית ב-Cloudflare Pages!

## 🛠️ טכנולוגיות
*   **Next.js 15 (App Router)**
*   **Tailwind CSS (RTL support)**
*   **Lucide React Icons**
*   **Static Site Generation (SSG)**
*   **AI-Generated Artistic Imagery**

---
תהנו מהבישול! 🎨👩‍🍳👨‍🍳
