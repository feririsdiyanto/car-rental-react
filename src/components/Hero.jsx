import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imgZenix from "../assets/zenix.png";

function Hero() {
  return (
    <div>
      <section id="hero" className="bg-red">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-center text-light">
              <div>
                <h1 className="mb-4">
                  Sewa & Rental Mobil Terbaik di kawasan KIIC
                </h1>
                <p className="mb-4">
                  Selamat datang di TMMIN Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <a href="./Sewa" className="btn btn-success">
                  Mulai Sewa Mobil
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={imgZenix} alt="Toyota Zenix" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
