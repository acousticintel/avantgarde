import Head from "next/head";
import Image from "next/image";
//custom components
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Categories from "../components/categories";
import Book from "../components/book";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Partners from "../components/partners";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>AVANT GARDE</title>
        <meta name="description" content="We are an innovation and creative agency providing solutions for our
          clients’ problems" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <main className="grow">
        <Hero />
        <Categories />
        <Book />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
