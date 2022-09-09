import Link from "next/link";

function NaveBar() {
  return (
    <>
      <div className="navbar-area sticky-top">
        <div className="mobile-nav">
          <Link href="/" className="logo">
            <img src="/assets/img/logo-two.png" alt="Logo" />
          </Link>
        </div>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" href="/">
                <img src="assets/img/logo.png" alt="Logo" />
              </Link>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pages/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pages/services" className="nav-link">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pages/advisory" className="nav-link">
                      Advisory
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Investments
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Crypto News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="side-nav">
                  <Link href="#">
                    <a className="consultant-btn">Free Consultant</a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NaveBar;
