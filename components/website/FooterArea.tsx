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
                    <img src="/assets/img/logo-two.png" alt="Logo" />
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices{" "}
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
                      <a href="/cdn-cgi/l/email-protection#7d15181111123d1b14131213531e1210">
                        <span
                          className="__cf_email__"
                          data-cfemail="2f474a4343406f4946414041014c4042"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
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
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="projects.html">Projects</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <h3>Newsletter</h3>
                <div className="footer-newsletter">
                  <p>Accusamus et iusto odio quas molestias except.</p>
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
                      <a href="about.html">Financial Advice</a>
                    </li>
                    <li>
                      <a href="services.html">Planning Strategies</a>
                    </li>
                    <li>
                      <a href="projects.html">Investment Trending</a>
                    </li>
                    <li>
                      <a href="faq.html">Wealth Commitment</a>
                    </li>
                    <li>
                      <a href="blog.html">Our Services</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">States Element</a>
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
