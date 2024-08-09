import Assets from "../assets";

export default function Footer() {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-3">
            <p>
              Kawasan Industri KIIC Lot DD 1, Jl. Permata Raya, Karawang Barat,
              Sirnabaya, Telukjambe Timur, Karawang, Jawa Barat 41361
            </p>
            <p>tmmincarrental@gmail.com</p>
            <p>081-288-422-458</p>
          </div>
          <div className="col-12 col-md-3">
            <ul>
              <li>
                <a href="#service">Our Service</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <p>Connect with us</p>
            <div className="d-flex gap-3 align-items-center">
              <a href="#">
                <img src={Assets.iconFacebook} alt="social-media" />
              </a>
              <a href="#">
                <img src={Assets.iconInstagram} alt="social-media" />
              </a>
              <a href="#">
                <img src={Assets.iconTwitter} alt="social-media" />
              </a>
              <a href="#">
                <img src={Assets.iconMail} alt="social-media" />
              </a>
              <a href="#">
                <img src={Assets.iconTwitch} alt="social-media" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <p>Copyright TMMIN 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
