import Head from "next/head";
import React, { useState } from "react";
import AccountLayout from "../../components/AccountLayout";
import AccountSubPage from "../../components/website/AccountSubPage";

function index() {
  return (
    <>
      <Head>
        <title>Agu Chux | SHQBTCI</title>
      </Head>
      <AccountLayout menukey="dashboard">
        <AccountSubPage title="Sign Up" menutitle="Sign Up" />
      </AccountLayout>
    </>
  );
}

export default index;
