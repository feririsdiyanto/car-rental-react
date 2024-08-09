import Assets from "../assets";

export default function SewaMobil() {
  return (
    <section id="sewa-mobil">
      <div className="container p-5 my-5 d-flex justify-content-center bg-red text-light rounded-4">
        <div className="text-center p-4">
          <h2 className="mb-4 col-12">Sewa Mobil di KIIC Sekarang</h2>
          <p className="mb-5 col-12">
            Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
            Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
          </p>
          <a href="./Sewa" className="btn btn-success">
            Mulai Sewa Mobil
          </a>
        </div>
      </div>
    </section>
  );
}
