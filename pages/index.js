import Header from "../components/Header";
import Hero from "../components/Hero";
import Head from "next/head";
import Footer from "../components/Footer";
import About from "../components/About";
import Works from "../components/Works";

export default function Home() {
  return (
    <>
      <div className="bg-black min-h-full text-white">
        <Header />
        <Head>
          <title>Home &ndash; Frontera</title>
        </Head>
        <Hero />
        <About />
        <Works />
        <Footer />
      </div>
    </>
  );
}
