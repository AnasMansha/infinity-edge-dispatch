import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="font-inter flex items-center justify-between w-full h-28 px-4 sm:px-10 md:px-20 py-4">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm sm:text-base lg:text-lg ${
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }`
          }
          end
        >
          <img src="images/logo.svg" alt="Truck Dispatch Logo" className="h-16 sm:h-20 w-auto" />
        </NavLink>
      </nav>

      <button
        onClick={() => navigate("/contact")}
        className="bg-customBlue hover:opacity-95 text-white text-sm sm:text-base rounded-[32px] h-[47px] w-[135px] px-4 sm:px-6 lg:px-4 font-semibold"
      >
        Contact Us
      </button>
    </header>
  );
};

export default Header;
