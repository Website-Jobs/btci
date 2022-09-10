import type { NextPage } from "next";
import Head from "next/head";
import Slider from "../components/Slider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Slider />
    </>
  );
};

export default Home;
