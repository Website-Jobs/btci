import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/PageLayout";
import Slider from "../components/Slider";
const Home: NextPage = () => {
  return (
    <>
      <PageLayout>
        <Head>
          <title>Home Page</title>
        </Head>
        <Slider />
      </PageLayout>
    </>
  );
};

export default Home;
