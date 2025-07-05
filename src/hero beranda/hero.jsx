import GradientText from "../components/GradientText";
import BlurText from "../components/BlurText";

function HeroBeranda() {
  return (
    <div
      className="w-full flex flex-col lg:flex-row justify-between items-center gap-10"
      style={{
        marginTop: "50px",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      {/* Konten Tulisan */}
      <div className="w-full lg:w-1/2 relative">
        <GradientText
          colors={["#557163", "#123524", "#557163", "#123524", "#557163"]}
          animationSpeed={6}
          showBorder={false}
          className="custom-class"
        >
          <div
            className="text-7xl font-[jaro] font-[400]"
            style={{ marginBottom: "20px" }}
          >
            HIMDIKO
          </div>
        </GradientText>

        <BlurText
          text="Selamat datang di website resmi Himpunan Diploma Komputer Universitas Sriwijaya (HIMDIO) 2025! Kami adalah wadah kreativitas dan kolaborasi mahasiswa Universitas Sriwijaya yang berkomitmen untuk mewujudkan visi HIMDIO 2025. Dengan filosofi kepengurusan yang merepresentasikan kekuatan ide dari berbagai sudut pandang, kami bertekad menjalankan organisasi dengan integritas dan nilai-nilai keberbudayaan yang tinggi. "
          delay={150}
          animateBy="words"
          direction="top"
          className="w-130"
        />

        <a
          href="#"
          className="absolute translate-y-20 border-2 rounded-lg animated-fade-in transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          style={{
            borderColor: "#123524",
            padding: "5px",
            textDecoration: "none",
            color: "#123524",
            fontWeight: "bold",
          }}
        >
          Tentang Diploma Komputer UNSRI
        </a>
      </div>

      {/* Gambar dan Nama */}
      <div className="w-full lg:w-1/2">
        <img
          className="w-full"
          src="assets/img/ketum & waketum.png"
          alt=""
        />
        <div className="text-red w-full rounded-lg">
          <div className="flex bg-[#123524] gap-10 justify-center items-center h-10 text-white font-bold rounded-lg flex-wrap">
            <div className="">DEAN KUSUMA ANGGARA</div>
            <div>EKA PRATIWI</div>
          </div>
          <div className="flex justify-center items-center gap-10 text-[#123524] font-bold flex-wrap">
            <div>
              <BlurText
                text="Wakil Ketua Umum "
                delay={150}
                animateBy="words"
                direction="top"
                className=""
              />
            </div>
            <div className="translate-x-8">
              <BlurText
                text="Ketua Umum"
                delay={150}
                animateBy="words"
                direction="top"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBeranda;
