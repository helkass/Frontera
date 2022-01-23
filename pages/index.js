import { Categories } from "../components/post/Categories";
import { Content } from "../components/post/Content";
import Card from "../components/post/Card";
import { Layout } from "../components/post/Layout";
import Head from "next/head";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home &ndash; Frontera</title>
      </Head>
      <Categories />
      <Content />
      <Card />
    </Layout>
  );
}
