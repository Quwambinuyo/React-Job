import React from "react";

const Hero = () => {
  return (
    <section className="py-20 mb-4 bg-indigo-700">
      <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Become a React Dev
          </h1>
          <p className="my-4 text-xl text-white">
            Find the React job that fits your skills and needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
