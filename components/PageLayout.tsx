import React, { ReactNode, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
// import layoutCss from "../styles/PageLayout.module.css";
import HeaderArea from "./website/HeaderArea";
import FooterArea from "./website/FooterArea";
import NaveBar from "./website/NaveBar";

interface Props {
  children?: ReactNode;
}

function PageLayout({ children }: Props) {
  // || \\
  useEffect(() => {
    <Script src="/assets/js/jquery-3.5.1.min.js" strategy="lazyOnload" />;
    // <Script
    //   src="../public/assets/js/popper.min.js"
    //   strategy="afterInteractive"
    // />;
    // <Script
    //   src="../public/assets/js/bootstrap.min.js"
    //   strategy="afterInteractive"
    // />;
    // <Script
    //   src="../public/assets/js/assets/js/contact-form-script.js"
    //   strategy="afterInteractive"
    // />;
    // <Script
    //   src="../public/assets/js/jquery.ajaxchimp.min.js"
    //   strategy="afterInteractive"
    // />;
    // <Script
    //   src="../public/assets/js/owl.carousel.min.js"
    //   strategy="afterInteractive"
    // />;
    // <Script src="../public/assets/js/wow.min.js" strategy="afterInteractive" />;
    // <Script
    //   src="../public/assets/js/odometer.min.js"
    //   strategy="afterInteractive"
    // />;
    // <Script
    //   src="../public/assets/js/jquery.appear.min.js"
    //   strategy="afterInteractive"
    // />;
    // <Script
    //   src="../public/assets/js/jquery.nice-select.min.js"
    //   strategy="afterInteractive"
    // />;
    // <Script
    //   src="../public/assets/js/jquery.magnific-popup.min.js"
    //   strategy="afterInteractive"
    // />;
    // <Script src="../public/assets/js/custom.js" strategy="afterInteractive" />;
  }, []);
  // || \\
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderArea />
      <NaveBar />
      {children}
      <FooterArea />
    </>
  );
}

export default PageLayout;
