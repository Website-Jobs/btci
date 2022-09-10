import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import HeaderArea from "./website/HeaderArea";
import FooterArea from "./website/FooterArea";
import CopyRight from "./website/CopyRight";
import NavigationBar from "./website/NavigationBar";

import { Props } from "../interfaces";

function PageLayout({ children }: Props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script src="/assets/js/jquery-3.5.1.min.js" type="text/javascript" />
        <script src="/assets/js/popper.min.js" type="text/javascript" />
        <script src="/assets/js/bootstrap.min.js" type="text/javascript" />

        <script src="assets/js/form-validator.min.js" type="text/javascript" />

        <script
          src="/assets/js/assets/js/contact-form-script.js"
          type="text/javascript"
        />
        <script
          src="/assets/js/jquery.ajaxchimp.min.js"
          type="text/javascript"
        />
        <script src="/assets/js/jquery.meanmenu.js" type="text/javascript" />
        <script src="/assets/js/owl.carousel.min.js" type="text/javascript" />
        <script src="/assets/js/wow.min.js" type="text/javascript" />
        <script src="/assets/js/odometer.min.js" type="text/javascript" />
        <script src="/assets/js/jquery.appear.min.js" type="text/javascript" />
        <script
          src="/assets/js/jquery.nice-select.min.js"
          type="text/javascript"
        />
        <script
          src="/assets/js/jquery.magnific-popup.min.js"
          type="text/javascript"
        />
        <script src="/assets/js/custom.js" type="text/javascript" />
      </Head>
      <HeaderArea />
      <NavigationBar />
      {children}
      <FooterArea />
      <CopyRight />
    </>
  );
}

export default PageLayout;
