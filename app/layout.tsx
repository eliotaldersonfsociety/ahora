import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/header/page";
import EpaycoScript from "@/components/EpaycoScript";
import Footer from "@/components/footer/page";
import { UpdateHeaderHeight } from "@/components/UpdateHeaderHeight";
import ClientCartProvider from "@/components/cart";
import PageViewTracker from "@/components/PageViewTracker";
import { DashboardLayout } from "@/components/dashboard-layout";
import { ClerkProvider } from "@clerk/nextjs";
import HotProductsBannerWrapper from "@/components/header/HotProductsBannerWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tienda Texas",
  description: "Ecommerce de productos al mayor y detal en EEUU. Electrónica, moda, hogar, tecnología, mascotas y más.",
  icons: {
    icon: "/favicon.ico", // ícono del navegador
    shortcut: "/favicon.ico", // para Safari y navegadores que lo usan
    apple: "/apple-touch-icon.png", // si quieres soporte Apple
  },
  keywords: [
    "Tienda Texas",
    "ecommerce EEUU",
    "compras online",
    "productos al mayor",
    "tecnología",
    "hogar",
    "ropa",
    "mascotas",
    "tienda virtual"
  ],
  openGraph: {
    title: "Tienda Texas",
    description: "Compra productos al mejor precio. Envíos a todo EEUU.",
    url: "https://tiendatexas.com", // reemplaza con tu dominio real
    siteName: "Tienda Texas",
    images: [
      {
        url: "/og-image.jpg", // usa una imagen atractiva en /public
        width: 1200,
        height: 630,
        alt: "Tienda Texas - Ecommerce EEUU",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda Texas",
    description: "Ecommerce EEUU de calidad.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <head>
          <EpaycoScript />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <PageViewTracker />
          <ClientCartProvider>
            <UpdateHeaderHeight />
            <HotProductsBannerWrapper />
            <Header />
            {children}
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
          </ClientCartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
