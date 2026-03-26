import React from "react";

function Projectdesc({ header }) {
  return (
    <div className=" rounded-2xl border border-cyan-300 shadow-xl/180 bg-gradient-to-r from-[#232323] to-[#07070717]">
      <div className="px-8 py-5">
        <img
          src={header.img}
          alt="project image"
          className="w-full h-[190px] rounded-t-2xl"
        ></img>
        <h3 className="text-center text-[#0ff] text-3xl font-normal py-2">
          {header.name}
          <span className="text-lg text-[#f5f5f5]">{header.about}</span>
        </h3>
        <p className="text-center text-[#a4a4a4] font-light leading-5 pb-3 tracking-tight">
          {header.desc}
        </p>
        <div className=" text-center">
          {header.skills.map((item, i) => (
            <button
              key={i}
              className="border border-cyan-200 bg-gradient-to-r from-[#1aa] via-[#0bf] to-[#0ff] shadow-xl/40 px-4 rounded-full mr-3 mb-2"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex py-5 gap-1">
          <button className="blink shadow-xl/60 z-1 relative font-semibold inline-flex bg-gradient-to-r from-[#157171] via-[#0bf] to-[#0ff] w-full items-center text-bold justify-center border-2 border-[#0ff] text-lg rounded-full py-[4px] cursor-pointer overflow-hidden">
            {header.btn[0]}
          </button>
          <button className=" blink blink-2 shadow-xl/60 z-1 relative font-semibold inline-flex bg-transparent text-[#0ff] w-full items-center justify-center border-2 border-[#0ff] text-lg rounded-full py-[4px] cursor-pointer  overflow-hidden">
            {header.btn[1]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projectdesc;
