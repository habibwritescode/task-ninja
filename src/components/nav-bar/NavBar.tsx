import { ReactComponent as MenuIcon } from "../../assets/menu.svg";

const NavBar = () => {
  return (
    <nav className="py-8 px-4 border-b border-b-gray-200">
      <div className="lg:container flex justify-between items-center">
        <p className="font-bold text-2xl">TODO</p>
        <div>
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
