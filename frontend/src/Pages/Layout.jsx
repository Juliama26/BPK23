import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <section className="flex flex-col flex-1 min-h-screen">
        <section className="flex-1 bg-white">
          <header>
            <Header />
          </header>
          <main>{children}</main>
        </section>
        <footer>
          <Footer />
        </footer>
      </section>
    </div>
  );
}
