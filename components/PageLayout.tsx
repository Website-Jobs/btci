import React, { ReactNode, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import Loader from "../components/Loader";
interface Props {
  children?: ReactNode;
}

function PageLayout({ children }: Props) {
  // || \\
  useEffect(() => {
    <Script
      src="../public/assets/js/jquery-3.5.1.min.js"
      strategy="afterInteractive"
    />;
    <Script
      src="../public/assets/js/popper.min.js"
      strategy="afterInteractive"
    />;
    <Script
      src="../public/assets/js/bootstrap.min.js"
      strategy="afterInteractive"
    />;
    <Script
      src="../public/assets/js/assets/js/contact-form-script.js"
      strategy="afterInteractive"
    />;
    <Script
      src="../public/assets/js/jquery.ajaxchimp.min.js"
      strategy="afterInteractive"
    />;
    <Script
      src="../public/assets/js/owl.carousel.min.js"
      strategy="afterInteractive"
    />;
    <Script src="../public/assets/js/wow.min.js" strategy="afterInteractive" />;
    <Script
      src="../public/assets/js/odometer.min.js"
      strategy="afterInteractive"
    />;
    <Script
      src="../public/assets/js/jquery.appear.min.js"
      strategy="afterInteractive"
    />;
    <Script
      src="../public/assets/js/jquery.nice-select.min.js"
      strategy="afterInteractive"
    />;
    <Script
      src="../public/assets/js/jquery.magnific-popup.min.js"
      strategy="afterInteractive"
    />;
    <Script src="../public/assets/js/custom.js" strategy="afterInteractive" />;
  }, []);
  // || \\
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex-auto w-full mt-0 mb-2 bg-black">
        <div className="container text-white py-1">
          <span className="text-sm">
            Shawn Wasserman, Byrd Lane Albuquerque
          </span>
          <strong className="text-red-600">|</strong>
          <span>info@golojan.com</span>
        </div>
      </div>
      {children}
    </>
  );
}

export default PageLayout;
