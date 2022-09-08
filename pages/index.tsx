import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "../components/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Home Page</title>
        {/* <link rel="icon" type="image/png" href="/assets/img/favicon.png" /> */}
      </Head>
      <div className="container">
        <section className=" alert alert-info">www</section>
      </div>
    </PageLayout>
  );
};

export default Home;
