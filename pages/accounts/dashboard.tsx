const cookie = require("react-cookies");
import Head from "next/head";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import AccountLayout from "../../components/AccountLayout";
import AccountSubPage from "../../components/website/AccountSubPage";
import nextCookie from "next-cookies";
import Router from "next/router";
import { LoggedInUser } from "../../interfaces";

function index() {
  const userProfile: LoggedInUser = {
    firstname: "SHQBTC",
    lastname: "User",
    account: {
      usd: 0,
      btc: "0",
    },
  };
  const [profile, setProfile] = useState(userProfile);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookies = cookie.loadAll();
        const token = cookies.token;
        const response = await fetch("/api/info", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: token,
          }),
        });
        if (response.status == 200) {
          const data = await response.json();
          setProfile({
            ...profile,
            accid: data.accid,
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            account: data.account,
          });
        } else {
        }
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>{`${profile.firstname} ${profile.lastname}`} | SHQBTCI</title>
      </Head>
      <AccountLayout menukey="dashboard">
        <AccountSubPage userProfile={profile} />
      </AccountLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token } = nextCookie(context);
  if (!token) {
    if (typeof window === "undefined") {
      context.res.writeHead(302, { Location: "/accounts/apply" });
      context.res.end();
    } else {
      Router.push("/accounts/apply");
    }
  }
  http: return {
    props: {
      token: token,
    },
  };
};

export default index;
