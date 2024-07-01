import React from "react";

export default function Nav() {
  return (
    <div className="flex items-start justify-between px-[2em] py-[2em]">
      <img src="../public/logo.svg" alt="" className="w-[12em]" />
      <button className="bg-transparent border-2 py-2 px-6 rounded-3xl cursor-pointer border-pink text-pink hover:border-lightPink hover:text-lightPink">Try it Free</button>
    </div>
  );
}
