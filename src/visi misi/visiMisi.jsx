import ScrollRevealBlock from "../components/ScrollReveral";
import LogoAnimated from "../components/LogoAnimated";

function VisiMisi() {
  return (
    <div
    style={{paddingLeft: '70px', paddingRight: '70px',marginTop:"220px",}}
      className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 px-6 lg:px-[70px] mt-[100px] lg:mt-[220px]"
    >
        
      {/* Logo */}
      <LogoAnimated
        src="assets/logo/himdiko.png"
        alt="Logo HIMDIKO"
        className="w-60 sm:w-72 lg:w-80"
      />

      {/* Isi Visi Misi */}
      <ScrollRevealBlock>
        <div className="max-w-2xl text-center lg:text-left">
          <div>
            <div className="text-3xl font-[900] font-[Jaro] text-[#1e293b]">
              VISI dan MISI
            </div>
            <div className="font-[600] mt-2" style={{ marginTop: "10px" }}>
              kabinet SPECTRA priode 2024-2025
            </div>
          </div>

          <div>
            <div className="text-3xl font-[900] font-[Jaro] text-[#1e293b] mt-5">
              VISI
            </div>
            <div className="font-[600] mt-2" style={{ marginTop: "10px" }}>
              Mewujudkan mahasiswa Diploma Komputer yang memiliki kemampuan di
              bidang keorganisasian, akademik dan non akademik yang berbasis
              teknologi komputer.
            </div>
          </div>

          <div>
            <div className="text-3xl font-[900] font-[Jaro] text-[#1e293b] mt-5">
              MISI
            </div>
            <ol className="list-decimal list-outside pl-6 mt-2 text-left">
              <li className="font-[600] mt-2" style={{ marginTop: "10px" }}>
                Mengembangkan kemampuan di bidang teknologi informasi dan
                teknologi komputer mahasiswa Diploma Komputer Fakultas Ilmu
                Komputer Universitas Sriwijaya
              </li>
              <li className="font-[600] mt-2" style={{ marginTop: "10px" }}> 
                Melakukan kegiatan organisasi yang bertemakan Information and
                Communication Technology (ICT).
              </li>
              <li className="font-[600] mt-2" style={{ marginTop: "10px" }}>
                Mewujudkan mahasiswa Diploma Komputer yang kreatif, inovatif,
                dan berjiwa technopreneurship
              </li>
            </ol>
          </div>
        </div>
      </ScrollRevealBlock>
    </div>
  );
}

export default VisiMisi;
