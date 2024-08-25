// next
import type { Metadata } from "next";
// fonts
import { Inter } from "next/font/google";
// providers
import { StoreProvider } from "@/appRoot/providers/store/StoreProvider";
// widgets
import { Header } from "@/widgets/header";
// styles
import "@/appRoot/styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
