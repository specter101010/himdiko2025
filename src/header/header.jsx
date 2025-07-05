import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

import FuzzyImage from '../components/FuzzyImage';

function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  

  const dropdownBaseClass =
  'absolute left-0 top-full shadow-md rounded-md z-50 w-[180px] transition-all duration-300 ease-out origin-top scale-95 opacity-0 bg-white';
const dropdownActiveClass = 'scale-100 opacity-100 pointer-events-auto';


  return (
    <div
      className="flex w-full justify-between items-center navbar-animate"
      style={{ paddingLeft: '70px', paddingRight: '70px', paddingTop: '20px' }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-20" src="assets/logo/himdiko.png" alt="Logo HIMDIKO" />
        <div style={{ marginLeft: '10px' }}>
          <div className="text-xs ">UNIVERSITAS SRIWIJAYA</div>
          <div className="text-3xl font-[900] font-[Jaro] text-[#123524]">HIMDIKO</div>
        </div>
      </div>

      {/* Navigasi */}
      <ul className="flex items-center gap-20 text-lg">
        {/* Tentang Kita */}
        <li className="relative">
          <button
            className="font-semibold flex items-center gap-1"
            onClick={() => toggleDropdown('tentang')}
          >
            Tentang Kita
          </button>
          <div
            className={`${dropdownBaseClass} ${openMenu === 'tentang' ? dropdownActiveClass : 'pointer-events-none'}`}
            style={{
              marginTop:"10px"
            }}
          >
            <Link
            to="/sejarah"
            className="block text-sm font-normal text-gray-800 hover:bg-gray-100"
            style={{ padding: '8px 16px', display: 'block' }}
          >
            Sejarah
          </Link>

            <a
              href="#"
              className="block px-4 py-2 text-sm font-normal text-gray-800 hover:bg-gray-100"
              style={{ padding: '8px 16px' }}
            >
              Visi & Misi
            </a>
          </div>
        </li>

        {/* Profile */}
        <li className="relative">
          <button
            className="font-semibold"
            onClick={() => toggleDropdown('profile')}
          >
            Profile
          </button>
          <div
            className={`${dropdownBaseClass} ${
              openMenu === 'profile' ? dropdownActiveClass : ''
            }`}
            style={{
              marginTop:"10px"
            }}
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm font-normal text-gray-800 hover:bg-gray-100"
              style={{ padding: '8px 16px' }}
            >
              Struktur
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm font-normal text-gray-800 hover:bg-gray-100"
              style={{ padding: '8px 16px' }}
            >
              Pengurus
            </a>
          </div>
        </li>

        {/* Proker */}
        <li className="relative">
          <button
            className="font-semibold"
            onClick={() => toggleDropdown('proker')}
          >
            Proker
          </button>
          <div
            className={`${dropdownBaseClass} ${
              openMenu === 'proker' ? dropdownActiveClass : ''
            }`}
            style={{
              marginTop:"10px"
            }}
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm font-normal text-gray-800 hover:bg-gray-100"
              style={{ padding: '8px 16px'}}
            >
              Program 2024
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm font-normal text-gray-800 hover:bg-gray-100"
              style={{ padding: '8px 16px' }}
            >
              Arsip Proker
            </a>
          </div>
        </li>
      </ul>

      {/* Sosial Media */}
  
      <div>
      <ul className="flex gap-6 items-center">
        <li>
          <FuzzyImage src="assets/icon/instagram.svg" width={30} height={30} />
        </li>
        <li>
          <FuzzyImage src="assets/icon/linkin.svg" width={30} height={30} />
        </li>
        <li>
          <FuzzyImage src="assets/icon/tiktok.svg" width={30} height={30} />
        </li>
      </ul>
      </div>

    </div>
  );
}

export default Header;
