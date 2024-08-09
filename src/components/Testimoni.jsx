import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import image from "../assets/";

export default function Testimoni() {
  const [slideItem] = useState([
    {
      img: image.customer1,
      description: `Terbaik, pemilik ramah!`,
      name: "Bobby, Bromo",
    },
    {
      img: image.customer2,
      description: `Kondisi mobil sangant bagus , bersih, dan wangi`,
      name: "Thoriq, Prambanan",
    },
    {
      img: image.customer3,
      description: `Haraganya paling murah seantero Karawang Raya`,
      name: "Rentokill, Bali",
    },
    {
      img: image.customer1,
      description: `Ga menyesal pinjem mobil disini`,
      name: "Youana, Bromo",
    },
    {
      img: image.customer2,
      description: `Mantap, recomended!!!`,
      name: "Bodit, Purwokerto",
    },
    {
      img: image.customer3,
      description: `Juara untuk pelayanannya`,
      name: "Erdi, Bali",
    },
  ]);

  return (
    <section id="testimonial">
      <div className="py-5 my-5">
        {/* <!-- untuk testimonial tidak perlu container karena desain item testimoni menempel ke kiri dan kanan  --> */}
        <div className="text-center">
          <h2 className="mb-3">Testimoni</h2>
          <p className="mb-4">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        {/* <!-- untuk membuat testimoni berbentuk slider / carousel menggunakan library / plugin lain disini kita akan menggunakan SwiperJs -->
            <!-- referensi : https://swiperjs.com/demos#centered --> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2.1,
            },
            1400: {
              slidesPerView: 2.5,
            },
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next", // menentukan button next jika tidak dituliskan maka button yang sudah dibuat diatas tidak bisa diklik
            prevEl: ".swiper-button-prev", // menentukan button prev jika tidak dituliskan maka button yang sudah dibuat diatas tidak bisa diklik
          }}
          className="mySwiper"
        >
          {slideItem.map((e, index) => (
            <SwiperSlide key={index}>
              <div className="card bg-red text-light">
                <div className="card-body py-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3 text-center">
                      <img src={e.img} alt="TMMIN Car Rental - Customer" />
                    </div>
                    <div className="col-12 col-md-9">
                      <img src={image.star} alt="TMMIN Car Rental - Rate" />
                      <p>{e.description}</p>
                      <label>{e.name}</label>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-navigation">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
