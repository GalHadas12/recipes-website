import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | אתר המתכונים",
    default: "אתר המתכונים השמח", // a default is required when creating a template
  },
  description: "מתכונים טעימים, קלים וכיפיים לכל המשפחה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} font-sans`}>
      <body className="min-h-screen bg-orange-50 text-gray-900 antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
