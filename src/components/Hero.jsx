"use client";
import React from "react";
import pink from "../assets/images/pink.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-sxl lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-500">
              Hello, I`m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "McMillan",
                1000,
                "Web Developer",
                1000,
                "Data Analyst",
                1000,
                "UI Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="text-white px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500 hover:bg-slate-800 mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center sm:ml-14 mt-4 lg:mt-0">
          {/* <div className="rounded-full bg-[#cacaca] w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={pink}
              alt="McMillan"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
