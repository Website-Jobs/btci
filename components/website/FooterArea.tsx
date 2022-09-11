import Link from "next/link";

function FooterArea() {
  return (
    <>
      <footer className="footer-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-logo">
                  <Link className="logo" href="/">
                    <img
                      src="/assets/img/logo-footer.png"
                      className="h-[80px]"
                      alt="Bitcoin Invvestor"
                    />
                  </Link>
                  <p className="my-3">
                    Since 2013, SHQBTC Investors has invested in digital assets
                    and blockchain companies, providing investors with the full
                    spectrum of exposure to the space.{" "}
                  </p>
                  <ul>
                    <li>
                      <i className="bx bx-phone-call" />
                      <span>Phone:</span>
                      <a href="tel:882569756">882-569-756</a>
                    </li>
                    <li>
                      <i className="bx bx-mail-send" />
                      <span>Email:</span>
                      <a>info@shqbtcinvestor.com</a>
                    </li>
                    <li>
                      <i className="bx bx-current-location" />
                      <span>Address:</span>
                      <a href="#">4578 Marmora Road, UK</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="/pages/about">About SHQBTCI</a>
                    </li>
                    <li>
                      <a href="/pages/services">Our Services</a>
                    </li>
                    <li>
                      <a href="/pages/contact">Contact Our Team</a>
                    </li>
                    <li>
                      <a href="/pages/advisory">Our Advisory</a>
                    </li>
                    <li>
                      <a href="/pages/news">News & Updates</a>
                    </li>
                    <li>
                      <a href="/pages/privacy">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <h3>Investors' Newsletter</h3>
                <div className="footer-newsletter">
                  <p>
                    Join our newsletter and grab early investment opportunities.
                    We will never spam our clients.
                  </p>
                  <form className="newsletter-form" data-toggle="validator">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email address"
                      name="EMAIL"
                      required
                      autoComplete="off"
                    />
                    <button
                      className="btn common-btn bg-orange-400"
                      type="submit"
                    >
                      Subscribe
                      <span />
                    </button>
                    <div id="validator-newsletter" className="form-result" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-links">
                  <h3>What We Do</h3>
                  <ul>
                    <li>
                      <a href="/">Financial Advice</a>
                    </li>
                    <li>
                      <a href="/">Planning Strategies</a>
                    </li>
                    <li>
                      <a href="/">Investment Trading</a>
                    </li>
                    <li>
                      <a href="/">Wealth Commitment</a>
                    </li>
                    <li>
                      <a href="/">Bitcoin Advisory</a>
                    </li>
                    <li>
                      <a href="/">Investment/Trading </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterArea;
