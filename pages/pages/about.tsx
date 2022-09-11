import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import SubPage from "../../components/website/SubPage";
function about() {
  return (
    <>
      <Head>
        <title>About Us | SHQ Bitcoin Investors</title>
      </Head>
      <PageLayout>
        <SubPage title="About SHQ Bitcoin Investors" menutitle="About" />
      </PageLayout>
    </>
  );
}

export default about;
