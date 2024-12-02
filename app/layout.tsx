import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexProvider } from "@/components/providers/convex-provider";

export const metadata: Metadata = {
  title: "Polaris app",
  description: "Polaris a new way of productity",
  icons: {
    icon: "/polaris.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" suppressHydrationWarning>
    <body>
      <ConvexProvider>
         <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange>
           {children}
         </ThemeProvider>
      </ConvexProvider>
    </body>
  </html>
  );
}