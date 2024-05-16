import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { Footer } from "@/components/common/footer";
import { Nav } from "@/components/common/nav";
import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "GrowEasy",
  description: "Grow your business with ease",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <Nav />
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
