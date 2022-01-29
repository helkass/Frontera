import { Categories } from "../components/post/postCategories";
import { Content } from "../components/post/postContent";
import Card from "../components/post/postCard";
import { Layout } from "../components/post/postLayout";
import Head from "next/head";
export default function Post() {
  return (
    <Layout>
      <Head>
        <title>Post &ndash; Frontera</title>
      </Head>
      <Categories />
      <Content />
      <Card />
    </Layout>
  );
}
