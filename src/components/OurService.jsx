import "../App.css";
import mbak from "../assets/img-service.png";

function OurService() {
  return (
    <>
      <section id="our-services">
        <div className="container py-5 my-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <img
                src={mbak}
                className="img-fluid"
                alt="TMMIN Car Rental Services"
              />
            </div>
            <div className="col-12 col-md-6">
              <h2>Best Car Rental for any kind of trip in KIIC!</h2>
              <p>
                Sewa mobil di KIIC bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul>
                <li>Sewa Mobil Dengan Supir di Teluk Jambe 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Galuh Mas 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Terminal Klari</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurService;
