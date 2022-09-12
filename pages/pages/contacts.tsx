import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import SubPage from "../../components/website/SubPage";
function contacts() {
  return (
    <>
      <Head>
        <title>Contact Us | SHQ Bitcoin Investors</title>
      </Head>
      <PageLayout menukey="contacts">
        <SubPage title="Contact SHQBTC Team" menutitle="Contact Us" />
      </PageLayout>
    </>
  );
}

export default contacts;
