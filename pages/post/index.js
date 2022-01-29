import { Content } from "../../components/post/postContent";
import Card from "../../components/post/postCard";
// import { Layout } from "../../components/post/postLayout";
import { Header } from "../../components/post/postHeader";
import { Footer } from "../../components/post/postFooter";
import Head from "next/head";
export default function Post() {
  return (
    <>
      <Header />
      <Head>
        <title>Post &ndash; Frontera</title>
      </Head>
      <Content />
      <Card />
      <Footer />
    </>
  );
}
