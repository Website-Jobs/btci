import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import SubPage from "../../components/website/SubPage";
function services() {
  return (
    <>
      <Head>
        <title>Our Services | SHQ Bitcoin Investors</title>
      </Head>
      <PageLayout menukey="services">
        <SubPage title="Our Services" menutitle="Services" />
        <section className="services-area-two ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="services-item-two">
                  <div className="top">
                    <img
                      src="/assets/img/services/services1.jpg"
                      alt="Services"
                    />
                  </div>
                  <div className="bottom">
                    <h3>
                      <a href="/services/">Bitcoin Investment Planning</a>
                    </h3>
                    <p>
                      Our expert team will assist you to organise a profitable
                      long-term and short-term investment plan.
                    </p>
                    <div className="services-btn">
                      <i className="bx bx-right-arrow-alt" />
                      <a href="/services/">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="services-item-two">
                  <div className="top">
                    <img
                      src="/assets/img/services/services2.jpg"
                      alt="Services"
                    />
                  </div>
                  <div className="bottom">
                    <h3>
                      <a href="service-details.html">
                        Crypto Financial Consultancy
                      </a>
                    </h3>
                    <p>
                      cryptocurrency marketspace, we can ensure you achieve
                      maximum profit and returns on your investment (ROI).
                    </p>
                    <div className="services-btn">
                      <i className="bx bx-right-arrow-alt" />
                      <a href="service-details.html">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="services-item-two">
                  <div className="top">
                    <img
                      src="/assets/img/services/services3.jpg"
                      alt="Services"
                    />
                  </div>
                  <div className="bottom">
                    <h3>
                      <a href="/services/">Online BTC-Banking &amp; Loans</a>
                    </h3>
                    <p>
                      store of your BTC and other cryptocurrency assets, SHQ
                      BTCI is the right choice you could make.
                    </p>
                    <div className="services-btn">
                      <i className="bx bx-right-arrow-alt" />
                      <a href="service-details.html">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

export default services;
