import { Link, NavLink } from "react-router-dom";
import { useStoreInfo } from "../context/SourceInfoContext";

const Footer = () => {
  const { info } = useStoreInfo();
  return (
    <footer className="font-inter bg-white text-black py-8 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <NavLink to="/">
          <img
            src="images/logo.svg"
            alt="Truck Dispatch Logo"
            className="h-10 w-auto sm:h-12 lg:h-16 mx-auto sm:mx-0"
          />
        </NavLink>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-16 mt-4 sm:mt-8">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-2">
              <img src="images/sms.png" alt="Email Us" className="pr-2 h-5 sm:h-6" />
              <p className="text-xs sm:text-sm md:text-base text-center sm:text-left">
                {info?.email || "loading..."}
              </p>
            </div>
            <div className="flex items-center mb-2">
              <img src="images/call.png" alt="Call Us" className="pr-2 h-5 sm:h-6" />
              <p className="text-xs sm:text-sm md:text-base text-center sm:text-left">
                {info?.phone || "loading..."}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0">
            <p className="text-xs sm:text-sm md:text-lg text-center sm:text-right max-w-[250px]">
              {info?.address || "loading..."}
            </p>
            {/* <p className="text-xs sm:text-sm md:text-lg text-center sm:text-right">Plano, TX 75024</p> */}
          </div>
        </div>

        {/* Terms and Privacy Links */}
        <div className="text-center mt-4 sm:mt-8">
          <Link
            to="/terms-privacy"
            className="text-customBlue hover:underline text-xs sm:text-sm mx-2"
          >
            Terms of Service
          </Link>
          <span className="text-xs sm:text-sm mx-1">|</span>
          <Link
            to="/terms-privacy"
            className="text-customBlue hover:underline text-xs sm:text-sm mx-2"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
