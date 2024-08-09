import Assets from "../assets";

export default function WhyUs() {
  return (
    <section id="why-us">
      <div className="container py-5 my-5">
        {/* <!-- container digunakan di setiap section agar tampilan rapi dan konsisten --> */}
        <h2 className="mb-3">Why Us?</h2>
        <p className="mb-4">Mengapa harus pilih Binar Car Rental?</p>
        {/* <!-- cara cepat membuat row col -> ketik : div.row>div.col*4 , kemudian ctrl + space  --> */}
        <div className="row">
          {/* <!-- perilaku col di bawah sama dengan yang di terapkan di hero -->
                <!-- tetapi yang berbeda disini kita menggunakan 3 ukuran berbeda  -->
                 
                <!-- col-lg-3 (dibagi menjadi 4 kolom (12/4)) akan di terapkan di ukuran layar mulai 992px keatas --> */}
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <div className="card">
              <div className="card-body">
                <img
                  src={Assets.iconComplete}
                  className="mb-4"
                  alt="TMMIN Car Rental - Mobil Lengkap"
                />
                <h3 className="mb-4">Mobil Lengkap</h3>
                <p>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <div className="card">
              <div className="card-body">
                <img
                  src={Assets.iconPrice}
                  className="mb-4"
                  alt="TMMIN Car Rental - Harga Murah"
                />
                <h3 className="mb-4">Harga Murah</h3>
                <p>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <div className="card">
              <div className="card-body">
                <img
                  src={Assets.icon24}
                  className="mb-4"
                  alt="TMMIN Car Rental - Layanan 24 Jam"
                />
                <h3 className="mb-4">Layanan 24 Jam</h3>
                <p>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-2">
            <div className="card">
              <div className="card-body">
                <img
                  src={Assets.iconProfessional}
                  className="mb-4"
                  alt="TMMIN Car Rental - Sopir Profesional"
                />
                <h3 className="mb-4">Sopir Profesional</h3>
                <p>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
