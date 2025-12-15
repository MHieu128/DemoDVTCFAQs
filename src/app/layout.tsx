import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: " Trường cao đẳng du lịch Đà Nẵng demo AI chatbot",
  description: "Modern Next.js scaffold optimized for AI-powered development with . Built with TypeScript, Tailwind CSS, and shadcn/ui.",
  keywords: ["", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "AI development", "React"],
  authors: [{ name: " Team" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: " Code Scaffold",
    description: "AI-powered development with modern React stack",
    url: "",
    siteName: "",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " Code Scaffold",
    description: "AI-powered development with modern React stack",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className="min-h-dvh antialiased bg-background text-foreground"
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
