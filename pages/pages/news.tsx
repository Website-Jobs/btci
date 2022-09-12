import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import SubPage from "../../components/website/SubPage";
function news() {
  return (
    <>
      <Head>
        <title>News & Updates | SHQ Bitcoin Investors</title>
      </Head>
      <PageLayout menukey="news">
        <SubPage title="News & Updates" menutitle="Crypto News" />
      </PageLayout>
    </>
  );
}

export default news;
