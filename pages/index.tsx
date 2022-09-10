import type { NextPage } from "next";
import Head from "next/head";
import Slider from "../components/website/Slider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        {/* <link rel="icon" type="image/png" href="/assets/img/favicon.png" /> */}
      </Head>
      <Slider />
    </>
  );
};

export default Home;
