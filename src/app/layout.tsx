import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteSpace • Enterprise Architecture",
  description:
    "Production-grade enterprise boilerplate with Next.js 16, Redux Toolkit, shadcn/ui, feature-sliced architecture, and centralized error handling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <StoreProvider>
          <Navbar />
          <main className="flex-1 container mx-auto max-w-7xl px-4 sm:px-8 py-8">
            {children}
          </main>
          <Footer />
          <Toaster richColors position="bottom-right" />
        </StoreProvider>
      </body>
    </html>
  );
}
