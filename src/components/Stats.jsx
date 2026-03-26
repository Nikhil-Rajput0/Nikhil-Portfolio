import React from "react";

function Stats() {
  return (
    <section className="hidden md:flex justify-center px-[96px] py-[48px] pb-0 ">
      <div className="relative flex gap-5 justify-center items-center after:content-[''] after:absolute after:top-0 after:right-0 after:w-[3px] after:h-[100%] after:bg-[#1e6161]">
        <h2 className="text-3xl text-[#23af9d]">2+</h2>
        <p className="text-[#f5f5f5] mr-8 xl:mr-5">Years Of Experience</p>
      </div>
      <div className="relative flex gap-5 justify-center items-center after:content-[''] after:absolute after:top-0 after:right-0 after:w-[3px] after:h-[100%] after:bg-[#1e6161]">
        <h2 className="text-3xl text-[#23af9d] ml-5">6+</h2>
        <p className="text-[#f5f5f5] mr-8 xl:mr-5">Projects Completed</p>
      </div>
      <div className="relative flex gap-5 justify-center items-center after:content-[''] after:absolute after:top-0 after:right-0 after:w-[3px] after:h-[100%] after:bg-[#1e6161]">
        <h2 className="text-3xl text-[#23af9d] ml-5">5+</h2>
        <p className="text-[#f5f5f5] mr-8 xl:mr-5">Technologies Learned</p>
      </div>
      <div className="relative flex gap-5 justify-center items-center ">
        <h2 className="text-3xl text-[#23af9d] ml-5">2+</h2>
        <p className="text-[#f5f5f5] mr-8 xl:mr-5">Years Of Development</p>
      </div>
    </section>
  );
}

export default Stats;
