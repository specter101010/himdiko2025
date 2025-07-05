// src/components/Footer.jsx
import { FaInstagram, FaLinkedin, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1e293b',
        color: '#f1f5f9',
        marginTop: '40px',
        position: 'relative',
      }}
    >
      {/* Isi Footer */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px 10px 20px',
        }}
      >
        {/* Kiri: Logo & Nama */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src="assets/logo/unsri.png"
            alt="Logo Unsri"
            style={{ width: '64px', height: 'auto' }}
          />
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1.25', color: '#facc15' }}>
              UNIVERSITAS <br /> SRIWIJAYA
            </h2>
          </div>
        </div>

        {/* Tengah: Alamat dan kontak */}
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#f1f5f9',
            }}
          >
            <FaMapMarkerAlt style={{ color: '#facc15' }} />
            Jl. Masjid Al Gazali, Bukit Lama, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30128
          </p>
          <p style={{ fontSize: '14px', marginTop: '6px', color: '#f1f5f9' }}>
            E: himdiko@unsri.ac.id | WA: +62 811 2869 988
          </p>
        </div>

        {/* Kanan: Media Sosial */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
            Follow us on social media
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              fontSize: '25px',
              color: '#38bdf8',
              cursor: 'pointer',
            }}
          >
            <FaTiktok />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* Copyright kiri bawah */}
      <div
        style={{
          fontSize: '12px',
          color: '#94a3b8',
          width: '100%',
          padding: '10px',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        © {new Date().getFullYear()} Himpunan Diploma Komputer Universitas Sriwijaya
      </div>
    </footer>
  );
}
