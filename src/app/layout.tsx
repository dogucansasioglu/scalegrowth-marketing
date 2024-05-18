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
    "We help coaches, consultants, and agency owners drive traffic, capture leads, and convert them at scale—without needing any prior online presence, marketing experience, or complicated tech setups. All injust 1 hour a day.",
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
