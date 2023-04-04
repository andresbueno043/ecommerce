import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="p-[10px]">
      <Head>
        <title>Next JS Ecommerce</title>
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-7xl mx-auto w-full">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
