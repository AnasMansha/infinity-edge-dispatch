import React from "react";
import { useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Hero Component
const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="font-inter relative flex items-center justify-center h-[450px] md:h-[680px] max-w-full bg-cover bg-center p-4 sm:py-14 rounded-[20px] mx-4 sm:mx-8 lg:mx-20"
      style={{ backgroundImage: `url('/images/bg-main.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-[20px] px-2"></div>
      <div className="relative flex flex-col items-center text-center text-white max-w-4xl gap-6">
        <h1 className="text-[28px] sm:text-[40px] md:text-[56px] font-semibold w-full max-w-[960px]">
          Drive Success with Professional Truck Dispatching Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-normal w-full max-w-[960px]">
          Get the routes, loads, and support you need to keep your trucks moving and your business
          growing. Leave the logistics to us!
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-customBlue font-semibold w-full max-w-[256px] h-[56px] rounded-[32px] px-6 py-3 text-lg md:text-xl shadow-md hover:bg-blue-100"
        >
          Get Started Today
        </button>
      </div>
    </section>
  );
};

const Statistics = () => (
  <section className="font-inter flex flex-col items-center justify-center w-full max-w-screen-2xl mx-auto rounded-[32px] bg-white text-gray-800 px-4 sm:px-8 lg:px-[140px] pt-[70px] pb-[40px] md:py-[140px] gap-10">
    <h2 className="text-center font-inter text-3xl sm:text-4xl md:text-[40px] font-semibold pb-[10px]">
      Why <span className="text-customBlue">Infinity Edge</span> Dispatchers?
    </h2>
    <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-10">
      {[
        { number: "15,000+", label: "Loads Booked" },
        { number: "$8,000+", label: "Weekly Gross Revenue" },
        { number: "$2.5+", label: "Per Mile" },
      ].map((stat, index) => (
        <React.Fragment key={index}>
          <div className="text-center flex flex-col items-center w-[180px] sm:w-[200px] md:w-[250px]">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-customRed">
              {stat.number}
            </p>
            <p className="mt-2 text-sm sm:text-lg font-medium">{stat.label}</p>
          </div>
          {index < 2 && <div className="hidden sm:block w-[2px] bg-gray-200 h-[96px] mx-4" />}
        </React.Fragment>
      ))}
    </div>
  </section>
);

// Service Overview Component
const ServiceOverview = () => (
  <div className="max-w-full px-[20px] sm:px-[40px] lg:px-[80px] pt-8 pb-[72px] mx-auto">
    <section className="font-inter flex flex-col lg:flex-row items-center justify-between w-full max-w-[1160px] h-auto border-2 border-gray-300 rounded-[16px] p-6 md:p-8 gap-6 mx-auto">
      <img
        src="/images/Truck-image.jpeg"
        alt="A professional truck on a route"
        className="w-full max-w-[520px] h-auto rounded-[12px] shadow-lg mb-6 md:mb-0 sm:h-[200px] md:h-auto lg:h-auto"
      />
      <div className="flex-1 gap-4 text-center md:text-left">
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold sm:text-center md:text-left">
          Professional Truck Dispatch Solutions for Owner Operators
        </h3>
        <p className="text-base sm:text-lg md:text-xl font-normal pt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
          At Infinity Edge LLC, we’re committed to making dispatching simple and profitable for
          owner-operators. Our services cover everything from load management and rate negotiations
          to optimizing your routes for maximum efficiency. With us as your dispatch partner, you’ll
          experience seamless logistics, allowing you to stay focused on the road while we handle
          the details that drive your success.
        </p>
      </div>
    </section>
  </div>
);

const services = [
  { name: "Dry Van", image: "/images/DryVan.jpeg" },
  { name: "Flatbed/Stepdeck", image: "/images/FlatBed.jpeg" },
  { name: "Reefer", image: "/images/Reefer.jpeg" },
  { name: "Hotshot", image: "/images/hotshot.jpg" },
  { name: "Box Truck", image: "/images/boxtruck.jpg" },
];

// Service Types Component
const ServiceTypes = () => {
  return (
    <section className="font-inter w-full py-8 md:py-[40px] sm:py-[72px] px-[16px] sm:px-[40px] lg:px-[80px] bg-zinc-100 text-start flex flex-col items-center">
      <h2 className="w-full max-w-[1160px] text-[28px] sm:text-[32px] md:text-[40px] pb-8 md:pb-4 font-semibold text-center md:text-start">
        Who can work with Us?
      </h2>

      <div className="w-full max-w-[1500px] flex flex-wrap justify-center gap-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="w-full max-w-[280px] md:max-w-[210px] rounded-[16px] overflow-hidden"
          >
            <div className="overflow-hidden rounded-[8px] cursor-pointer">
              <Zoom>
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[160px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </Zoom>
            </div>
            <p className="font-semibold text-[20px] sm:text-[24px] pt-4 text-center">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Additional Info Component
const AdditionalInfo = () => (
  <div className="max-w-full px-4 sm:px-8 md:px-10 lg:px-[40px] pt-8 pb-12 mx-auto">
    <section className="font-inter flex flex-col md:flex-row items-center justify-between w-full max-w-[1160px] h-auto border-2 border-gray-300 rounded-[16px] p-6 md:p-8 gap-6 mx-auto">
      <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
        <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold">
          Best Reliable Dispatch Services for Trucking Companies
        </h3>
        <p className="text-base md:text-lg lg:text-xl font-normal pt-4">
          Whether you’re a small business or a large enterprise, our dispatching services are
          designed to help you focus on what you do best while we handle the logistics. From load
          scheduling and tracking to communication with brokers, we’re committed to ensuring smooth
          operations every step of the way. We offer the most competitive rates because we aim to
          benefit the carriers as much as we benefit ourselves.
        </p>
      </div>
      <img
        src="/images/additional-truck.jpeg"
        alt="Truck"
        className="w-full max-w-[400px] md:max-w-[520px] h-auto rounded-[12px] shadow-lg mb-6 md:mb-0"
      />
    </section>
  </div>
);

// SafeRouteFamily Component
const SafeRouteFamily = () => {
  const items = ["MC Certificate", "W9 Form", "Insurance Certificate", "Notice of Assignment"];

  return (
    <section className="font-inter bg-indigo-50 py-[80px] px-[20px] sm:px-[40px] lg:px-[80px] gap-[40px] text-center w-full">
      <h2 className="w-full max-w-[1160px] text-[28px] sm:text-[32px] md:text-[40px] font-semibold mb-8 text-center mx-auto">
        Become a Part of the Safe Route Family by Sharing
      </h2>
      <div className="w-full max-w-[250px] sm:max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item}
            className="w-full max-w-[250px] h-auto bg-zinc-50 p-6 rounded-[12px] flex flex-col items-center"
          >
            <div className="mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12l5 5L20 7"
                  />
                </svg>
              </div>
            </div>
            <p className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Component
const Components = () => (
  <div>
    <Hero />
    <Statistics />
    <ServiceOverview />
    <ServiceTypes />
    <AdditionalInfo />
    <SafeRouteFamily />
  </div>
);

export default Components;
