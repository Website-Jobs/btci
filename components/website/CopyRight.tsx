import Link from "next/link";

function CopyRight() {
  return (
    <>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright ©2021 Finon. Designed By TechNumbers Inc.
              <Link href="https://envytheme.com/" target="_blank">
                EnvyTheme
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CopyRight;
