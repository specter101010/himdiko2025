export default function Sejarah() {
    const steps = [
        {
          title: 'Pembentukan Panitia',
          detail:
            'Pada bulan Oktober 2002, dibentuk panitia persiapan pembukaan Program Diploma Komputer di Unsri.',
          pos: 'top',
        },
        {
          title: 'Susunan Panitia',
          detail:
            'Diketuai Dr. Zulkardi M.Ikom.; sekretaris Ir. Bambang Tutuko M.T.; anggota Dr. Rujito Agus Suwignyo & Drs. Saparudin M.T.',
          pos: 'bottom',
        },
        {
          title: 'Peresmian Program',
          detail: 'Program Diploma Komputer resmi dibuka pada Maret 2003.',
          pos: 'top',
        },
        {
          title: 'Pembentukan HIMDIKO',
          detail:
            'Dibentuk bersamaan dengan berdirinya program diploma sebagai wadah organisasi mahasiswa.',
          pos: 'bottom',
        },
      ];
    
    return (
      <div
        className="text-gray-800 w-full"
        style={{ padding: '48px 24px' }} // px-6 py-12 diganti inline
      >
 
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#123524]">
          Sejarah HIMDIKO
        </h1>



        <div
        className="w-full bg-sky-100"
        style={{ padding: '48px 24px' }} // hanya padding inline, lainnya pakai tailwind
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
            {/* Gambar */}
            <div>
            <img
                src="/assets/img/all.png"
                alt="HIMDIKO"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
            </div>

            {/* Teks */}
            <div>
            <p className="mb-6 leading-relaxed text-justify text-gray-800">
                Himpunan Mahasiswa Diploma Komputer (HIMDIKO) adalah organisasi mahasiswa di lingkungan Program Diploma Komputer, Fakultas Ilmu Komputer, Universitas Sriwijaya (Unsri). HIMDIKO didirikan untuk mewadahi dan mengembangkan potensi mahasiswa di bidang komputer, khususnya yang berada di lingkungan program diploma.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-[#123524]">Sejarah Singkat HIMDIKO</h2>

            <div
      className="relative w-full  bg-sky-100"
      style={{ padding: '64px 0px' }}
    >
      <div
        className="flex justify-between items-center relative z-10 max-w-6xl mx-auto"
        style={{transform: 'translateY(0px) translateX(-60px)' }}
      >
        {steps.map((s, i) => (
          <div key={i} className="relative group flex flex-col items-center text-center w-1/4">
            {/* Title (top) */}
            {s.pos === 'top' && (
              <div
                className="font-semibold text-[#123524] group-hover:text-[#065f46] transition-colors w-50 "
                style={{ marginBottom: '0px',transform: 'translateY(-25px) translateX(60px)'}}
              >
                {s.title}
              </div>
            )}

            {/* Garis kiri */}
            {i !== 0 && (
              <div
                className="absolute top-1/2 left-0 h-0.5 bg-[#123524]"
                style={{
                  width: '120px',
                  transform: 'translateY(15px)translateX(60px)',
                }}
              />
            )}

            {/* Dot */}
            <div
              className="w-4 h-4 bg-[#123524] rounded-full border-3 border-white shadow-lg z-10"
              style={{ position: 'absolute', zIndex: 2,transform: 'translateY(20px) translateX(10px)'
                , }}
            />

            {/* Garis kanan */}
            {i !== steps.length - 1 && (
              <div
                className="absolute top-1/2 right-0 h-0.5 bg-[#123524]"
                style={{
                  width: '120px',
                  transform: 'translateY(15px)translateX(60px)',
                }}
              />
            )}

            {/* Title (bottom) */}
            {s.pos === 'bottom' && (
              <div
                className="font-semibold text-[#123524] group-hover:text-[#065f46] transition-colors w-50 " 
                style={{ marginTop: '0px',transform: 'translateY(50px) translateX(10px)' }}
              >
                {s.title}
              </div>
            )}

            {/* Detail card */}
            <div
              className="absolute w-64 bg-white text-sm text-gray-700  rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none"
              style={{
                top: s.pos === 'top' ? 'auto' : '56px',
                bottom: s.pos === 'top' ? '56px' : 'auto',
                left: '50%',
                transform: 'translateX(-50%)',
                padding:'10px'
              }}
            >
              {s.detail}
             
            </div>
          </div>
        ))}
      </div>
    </div>

            </div>
        </div>
        </div>

    
   
  
    
    


       
  
       
  
      
  
        <h2 className="text-xl font-semibold mt-8 mb-4 text-[#123524]">Tujuan HIMDIKO</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Meningkatkan kualitas mahasiswa:</strong> melalui kegiatan akademik dan non-akademik.</li>
          <li><strong>Mengembangkan potensi:</strong> menyediakan ruang untuk bakat, minat, dan potensi diri.</li>
          <li><strong>Lingkungan belajar kondusif:</strong> menciptakan ekosistem belajar yang mendukung prestasi.</li>
          <li><strong>Menjalin kerjasama:</strong> dengan pihak internal dan eksternal.</li>
          <li><strong>Wadah aspirasi:</strong> tempat mahasiswa menyampaikan ide dan saran.</li>
        </ol>
  
        <h2 className="text-xl font-semibold mt-8 mb-4 text-[#123524]">Identitas Umum Organisasi</h2>
        <div className="space-y-3">
          <p><strong>Nama Himpunan:</strong> HIMDIKO</p>
          <p><strong>Singkatan:</strong> Himpunan Mahasiswa Diploma Komputer</p>
          <p><strong>Logo:</strong></p>
          <img src="assets/logo/himdiko.png" alt="Logo HIMDIKO" className="w-40 mb-4" />
  
          <p><strong>Makna Logo:</strong> Berbentuk lingkaran bertuliskan HIMDIKO, dikelilingi 12 titik mewakili perangkat inti awal organisasi, serta tulisan HIMPUNAN MAHASISWA DIPLOMA KOMPUTER UNIVERSITAS SRIWIJAYA. Diresmikan pada 19 Mei 2013, tidak dapat diubah maknanya.</p>
  
          <p><strong>Tagline / Moto:</strong> <em>"We Are One We Are New Generation"</em></p>
          <p><strong>Tanggal Berdiri:</strong> 23 Maret 2013</p>
          <p><strong>Dasar Pembentukan:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Meningkatkan rasa persaudaraan antar mahasiswa Diploma Komputer.</li>
            <li>Mengembangkan kemampuan akademik dan non-akademik mahasiswa Diploma Komputer Fasilkom Unsri.</li>
          </ul>
        </div>
      </div>
    );
  }
  