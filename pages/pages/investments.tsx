import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import SubPage from "../../components/website/SubPage";
function investments() {
  return (
    <>
      <Head>
        <title>Our Investment Strategies | SHQ Bitcoin Investors</title>
      </Head>
      <PageLayout>
        <SubPage title="Our Investment Strategies" menutitle="Investments" />
      </PageLayout>
    </>
  );
}

export default investments;
