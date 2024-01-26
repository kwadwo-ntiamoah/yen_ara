import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="h-[83px] bg-white fixed top-0 w-full">
      <div className="container flex items-center justify-between h-full w-full">
        <img src={logo} alt="" />
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
