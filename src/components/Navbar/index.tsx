import Image from "next/image";
import "./style.scss";

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
        <div className="find-category-searh-input">
          <input
            className="input-size-lg"
            type="text"
            placeholder="Cari Kategori"
          />
          <Image
            src="/assets/icon/search.svg"
            className="find-category-searh-logo"
            alt="Logo"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="cart-pos">
        <div className="container-cart">
          <Image
            src="/assets/icon/cart.svg"
            alt="Logo"
            width={30}
            height={30}
          />
          <div className="badge">5</div>
        </div>
        <Image
          className="pointer"
          src="/assets/icon/delete.svg"
          alt="Logo"
          width={30}
          height={30}
        />
      </div>
    </header>
  );
};

export default Navbar;
