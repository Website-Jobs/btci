import Link from "next/link";
function NeedConsultant() {
  return (
    <>
      <div className="consultation">
        <img src="/assets/img/services/service-details4.jpg" alt="Details" />
        <div className="inner">
          <h3>Need Investment Consultation</h3>
          <Link href="/pages/contacts">
            <a className="common-btn">Send Message</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NeedConsultant;
