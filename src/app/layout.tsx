import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ragul S",
  description: "A personal student opinion and vision platform by Ragul S, Artificial Intelligence and Data Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="bg-black text-white antialiased font-sans selection:bg-white selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
