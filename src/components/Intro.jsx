import React from "react";

function Intro() {
  return (
    <div
      className="flex items-center justify-center 
                    flex-col text-center pt-20 pb-12"
    >
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold ">
        Benjakul Ta
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium ">
        Fullstack Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm a fullstack developer. All coding project are build from ground up
        and learning from others to solving problems with code{" "}
      </p>
    </div>
  );
}

export default Intro;
