import Link from "next/link";
interface pageProps {
  title: string;
  menutitle: string;
}
function SubPage({ title, menutitle }: pageProps) {
  const doGo = () => {};
  return (
    <>
      <section className="provide-area pt-[150px] pb-70">
        <div className="container">
          <div className="section-title three">
            <span className="sub-title">Account Balance</span>
            <h2>
              <span className="text-green-600"> $600,000.00</span>&nbsp;~&nbsp;
              <span className="text-orange-700">5.0BTC</span>
            </h2>
          </div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                aria-selected="true"
              >
                <button className="w-full h-full" onClick={doGo}>
                  <div className="provide-nav">
                    <i className="flaticon-graph" />
                    <h3>Financial Planning</h3>
                  </div>
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                aria-selected="false"
              >
                <button className="w-full h-full" onClick={doGo}>
                  <div className="provide-nav">
                    <i className="flaticon-growth" />
                    <h3>Cast Investment</h3>
                  </div>
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                aria-selected="false"
              >
                <button className="w-full h-full" onClick={doGo}>
                  <div className="provide-nav">
                    <i className="flaticon-consultation" />
                    <h3>Consultancy</h3>
                  </div>
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-loans-tab"
                data-bs-toggle="pill"
                aria-selected="false"
              >
                <button className="w-full h-full" onClick={doGo}>
                  <div className="provide-nav">
                    <i className="flaticon-education-cost" />
                    <h3>Education Loans</h3>
                  </div>
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-house-tab"
                data-bs-toggle="pill"
                aria-selected="false"
              >
                <button className="w-full h-full" onClick={doGo}>
                  <div className="provide-nav">
                    <i className="flaticon-loan-1" />
                    <h3>House Loans</h3>
                  </div>
                </button>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-invest-tab"
                data-bs-toggle="pill"
                aria-selected="false"
              >
                <button className="w-full h-full" onClick={doGo}>
                  <div className="provide-nav">
                    <i className="flaticon-investment" />
                    <h3>Invest Planning</h3>
                  </div>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default SubPage;
