import React from "react";

export default function Header() {
  return (
    <div className="w-full h-full text-center">
      <div className="w-full h-[15em] flex flex-col items-center justify-center mt-[2em] mb-[1em] max-[600px]:my-[4em]">
        <h1 className="text-[2em] px-2 pb-[0.5em] font-bold ">Build The Community Your Fans Will Love</h1>
        <p className="px-4 mb-[1em] max-w-[40em] open-sans-semibold">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="bg-pink text-veryPaleBlue mb-[2em] rounded-3xl w-[13em] h-10 hover:bg-lightPink cursor-pointer">Get Started For Free</button>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-[70%]" src="../public\screen-mockups.svg" alt="" />
      </div>
      <div className="w-full py-20 px-60 grid grid-cols-2 place-items-center place-content-center  gap-[2em] max-[800px]:grid-cols-1 max-[800px]:gap-[8em]">
        <div className="flex flex-col items-center justify-center relative w-[13em]">
          <img className="w-[2em] absolute top-[-30%] left-[15%]" src="../public\icon-communities.svg" alt="" />
          <h1 className="text-5xl py-[0.2em] tracking-wider">1.4k+</h1>
          <p className="open-sans-regular tracking-wide">Communities Formed</p>
        </div>
        <div className="flex flex-col items-center justify-center relative w-[13em]">
          <img src="../public\icon-messages.svg" alt="" className="w-[2em] absolute top-[-30%] left-[15%]" />
          <h1 className="text-5xl py-[0.2em] tracking-wider">2.7m+</h1>
          <p className="open-sans-regular tracking-wide">Messages Sent</p>
        </div>
      </div>
    </div>
  );
}
