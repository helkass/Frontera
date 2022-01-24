import { Categories } from "../components/post/Categories";
import { Content } from "../components/post/Content";
import Card from "../components/post/Card";
import { Layout } from "../components/post/Layout";
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
