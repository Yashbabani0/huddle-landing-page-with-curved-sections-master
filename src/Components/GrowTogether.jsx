import React from "react";
import GrowTogetherImg from "../../public/illustration-grow-together.svg";
export default function GrowTogether() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
      <div>
        <div className="img">
          <img src={GrowTogetherImg} alt="" className="w-[60%] m-auto" />
        </div>
        <div className="content px-[1.5em] leading-7 mt-[2em]">
          <h2 className="mb-[1em]">Grow Together</h2>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
      </div>
    </div>
  );
}
