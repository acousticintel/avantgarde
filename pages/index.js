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
        <meta
          name="description"
          content="We are an innovation and creative agency providing solutions for our
          clients’ problems"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icons/favicon-16x16.png"
        />
        <link rel="manifest" href="icons/site.webmanifest" />
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
