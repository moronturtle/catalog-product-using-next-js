import Image from "next/image";
import './style.scss';

const Navbar = () => {
  return (
    <header className="header">
    <div className="header-container">
      <div className="header-logo">
        <Image
          src="/assets/logo/header-logo.svg"
          alt="Logo"
          width={64}
          height={64}
        />
      </div>
    </div>
    <div className="find-category">
      <label className="label hidden-in-sm">Kategori</label>
      <div className="find-category-searh-input">
        <input className="input-size-lg" type="text" placeholder="Cari Kategori" />
        <Image
          src="/assets/icon/search.svg"
          className="find-category-searh-logo"
          alt="Logo"
          width={30}
          height={30}
        />
      </div>
    </div>
  </header>
  );
};

export default Navbar;
