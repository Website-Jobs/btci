import Link from "next/link";
import { logout } from "../../utils/auth";

interface menuProps {
  menukey: string;
}
function NavigationBar({ menukey }: menuProps) {
  return (
    <>
      <div className="navbar-area sticky-top">
        <div className="mobile-nav">
          <Link href="/accounts/dashboard" className="logo">
            <img
              className="h-[50px]"
              src="/assets/img/logomobile.png"
              alt="Bitcoin Investors"
            />
          </Link>
        </div>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" href="/accounts/dashboard">
                <img
                  src="/assets/img/logo.png"
                  className="h-[50px]"
                  alt="Bitcoin Investors"
                />
              </Link>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="navbar-brand text-7xl" href="#">
                      <a className="text-7xl">Home</a>
                    </Link>
                  </li>
                </ul>
                <div className="side-nav">
                  <button className="consultant-btn" onClick={logout}>
                    Logout
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
