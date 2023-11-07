import "./globals.css";
import type { Metadata } from "next/types";
import Head from "next/head";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "E-Shop",
  description: "E-commerce app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
