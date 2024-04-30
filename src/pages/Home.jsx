import React from "react";
import { TypeAnimation } from "react-type-animation";
import pink from "../assets/images/pink.png";
import { hero, v1, v2, v3 } from "../assets";

function Home() {
  return (
    // <section className="bg-slate-700">
    //   <div className="grid grid-cols-1 sm:grid-cols-12">
    //     <div className="col-span-7 place-self-center text-center sm:text-left">
    //       <h1 className="text-white mb-4 sm:text-sxl lg:text-6xl text-4xl font-extrabold">
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-500">
    //           Hello, I`m{" "}
    //         </span>
    //         <br />
    //         <TypeAnimation
    //           sequence={[
    //             "McMillan",
    //             1000,
    //             "Web Developer",
    //             1000,
    //             "Data Analyst",
    //             1000,
    //             "UI Designer",
    //             1000,
    //           ]}
    //           wrapper="span"
    //           speed={50}
    //           repeat={Infinity}
    //         />
    //       </h1>

    //       <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
    //         I am passionate about building excellent software that improves the
    //         lives of those around me. I specialize in creating software for
    //         clients ranging from individuals and small-businesses all the way to
    //         large enterprise corporations. What would you do if you had a
    //         software expert available at your fingertips?
    //       </p>

    //       <div>
    //         <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500 hover:bg-slate-200 text-white">
    //           Hire Me
    //         </button>
    //         <button className="text-white px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-500 hover:bg-slate-800 mt-3">
    //           <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
    //             Download CV
    //           </span>
    //         </button>
    //       </div>
    //     </div>
    //     <div className="col-span-5 place-self-center sm:ml-14 mt-4 lg:mt-0">
    //       <div className="rounded-full bg-[#cacaca] w-[300px] h-[300px]  lg:w-[400px] lg:h-[400px] relative">
    //         <img src={pink} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className="container mx-auto my-10 ">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-xl sm:text-4xl md:text-5xl lg:text-4xl font-medium">
              At MG Solutions, we're more than just a tech company we're your
              strategic partner in navigating the ever-evolving landscape of
              technology. From cutting-edge software development to innovative
              digital solutions, we're here to empower your business and drive
              your success forward
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Learn at your own pace, with lifetime{" "}
              <br className="lg:flex hidden" /> access on mobile and desktop
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">
              Get Started
            </button>
          </div>
          <img src={hero} alt="" />
        </div>
      </div>

      {/* email and get in touch */}

      <div className="mx-auto flex flex-col gap-5 items-center justify-center py-20">
        <p className=" text-xl md:text-2xl lg:text-4xl font-medium text-center">
          Get in touch with us today
        </p>
        <p className="text-base sm:text-lg lg:text-2xl font-medium text-center">
          Start fulfilling your dreams with us
        </p>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 items-center mt-5">
          <input
            type="email"
            className="text-white px-5 py-5 rounded-full w-72 lg:w-96 outline-none bg-[#5c5e61]"
            placeholder="Enter your Email"
          />
          <button className="btn btn-sm px-10 py-5 lg:btn-lg bg-[#524fd5] btn-lg rounded-full border-none">
            Send
          </button>
        </div>
      </div>

      {/* my values */}

      <div className="mx-auto py-20">
        <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
          WHY CHOOSE US
        </p>
        <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
          Our Values
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
          <div className="flex flex-col gap-5 items-center">
            <img src={v1} alt="v1" />
            <p className="text-2xl font-semibold">Speaking clubs</p>
            <p className="text-gray-500 text-center">
              In our school you will practice <br /> your speaking skills and
              just get <br /> a lot of positive emotions!
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src={v2} alt="v2" />
            <p className="text-2xl font-semibold">Quality control</p>
            <p className="text-gray-500 text-center">
              In our school you will practice <br /> your speaking skills and
              just get <br /> a lot of positive emotions!
            </p>
          </div>{" "}
          <div className="flex flex-col gap-5 items-center">
            <img src={v3} alt="v3" />
            <p className="text-2xl font-semibold">Progress analysis</p>
            <p className="text-gray-500 text-center">
              In our school you will practice <br /> your speaking skills and
              just get <br /> a lot of positive emotions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
