import React from "react";
import hero from "/assets/dadasd.png";
export default function Hero() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 px-4 lg:px-0 md:grid-cols-2 mt-10 gap-12 po">
        {/* discription */}
        <div className="flex flex-col justify-center items-start gap-3">
          <h1 className="font-bold text-3xl text-black">
            A Website Service Company<br></br>
            <span className="bo font-bold text-[#1a9096] text-3xl">Wixel</span>
          </h1>
          <p>
            We craft bespoke portfolio websites tailored to showcase your unique
            talents and achievements. Combining sleek design with seamless
            functionality, our expert team ensures your online presence stands
            out, impresses clients, and drives professional opportunities
            effortlessly.
          </p>
        </div>
        {/* bg */}
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
}
