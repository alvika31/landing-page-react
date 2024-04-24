import { useState } from "react";
import { MenuDekstop, MenuMobile } from "./Menu";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import Logo from "../assets/logo.png";
const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <>
      <div className="bg-white sticky top-0 z-10 py-4 px-3 md:px-0 drop-shadow-md">
        <div className="md:container">
          <div className="flex justify-between items-center">
            <img src={Logo} width={70} alt="logo" />
            <button
              onClick={() => setMenuMobile(!menuMobile)}
              className="md:hidden text-black"
            >
              {menuMobile === true ? <IconX /> : <IconMenu2 />}
            </button>
            <MenuDekstop />
          </div>
        </div>
      </div>
      <MenuMobile menuMobile={menuMobile} setMenuMobile={setMenuMobile} />
    </>
  );
};

export default Header;
