import Header from "../components/Header";
import Hero from "../components/Hero";
import Head from "next/head";
import Footer from "../components/Footer";
import About from "../components/About";
import Works from "../components/Works";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <div className="bg-black min-h-full text-white transition-all delay-200">
        <Header />
        <Head>
          <title>Home &ndash; Frontera</title>
        </Head>
        <Hero />
        <About />
        <Works />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
