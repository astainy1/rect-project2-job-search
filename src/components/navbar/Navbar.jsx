import Navitem from "./Navitem";
const Navbar = () => {
  return (
    <>
      <nav className="bg-teal-900 custom-navbar-border">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Navitem />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
