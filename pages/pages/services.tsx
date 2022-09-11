import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import SubPage from "../../components/website/SubPage";
function services() {
  return (
    <>
      <Head>
        <title>Our Services | SHQ Bitcoin Investors</title>
      </Head>
      <PageLayout>
        <SubPage title="Our Services" menutitle="Services" />
      </PageLayout>
    </>
  );
}

export default services;
