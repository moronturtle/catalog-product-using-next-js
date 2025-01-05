"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./style.scss";
import { useGlobalContext } from "@/context/GlobalContext";

const Navbar = () => {
  const { quantityCumulative, setQuantityCumulative } = useGlobalContext();
  const router = useRouter();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Image
            src="/assets/logo/header-logo.svg"
            className="pointer"
            alt="Logo"
            width={64}
            height={64}
            onClick={() => router.push("/home")}
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
          {quantityCumulative !== 0 && (
            <div className="badge">{quantityCumulative}</div>
          )}
        </div>
        {quantityCumulative !== 0 && (
          <Image
            className="pointer"
            src="/assets/icon/delete.svg"
            alt="Logo"
            width={30}
            height={30}
            onClick={() => setQuantityCumulative(0)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
