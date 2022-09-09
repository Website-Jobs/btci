import Link from "next/link";

function HeaderArea() {
  return (
    <>
      <div className="header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left">
                <ul>
                  <li>
                    <i className="bx bx-location-plus" />
                    <Link href="#">504 White St . Dawsonville, New York</Link>
                  </li>
                  <li>
                    <i className="bx bx-mail-send" />
                    <Link href="#">info@golojan.com</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <ul>
                  <li>
                    <a href="#">
                      <i className="bx bxl-facebook text-white" />
                    </a>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="bx bxl-twitter text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="bx bxl-pinterest-alt text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="bx bxl-linkedin text-white" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderArea;
