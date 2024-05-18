import "@/styles/globals.css";

import { Lexend } from "next/font/google";

import { Footer } from "@/components/common/footer";
import { Nav } from "@/components/common/nav";
import { TRPCReactProvider } from "@/trpc/react";

const inter = Lexend({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "GrowEasy - Client Acquisition Made EASY",
  description:
    "Drive traffic, capture leads, and convert them into high-paying clients with our 120-Day DWY Program. No prior online presence, marketing experience, or tech skills needed. All in just 1 hour a day.",
  icons: [{ rel: "icon", url: "/groweasy-logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <TRPCReactProvider>
          <Nav />
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
