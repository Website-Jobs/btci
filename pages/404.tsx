import type { NextPage } from "next";

const _404: NextPage = () => {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <i className="bx bx-sad bx-flashing" />
                <h1>Opps!</h1>
                <h2>We ran into a problem</h2>
                <p>The page you are looking for it maybe deleted</p>
                <a href="/">Go To Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default _404;
