import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const [startCount, setStartCount] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Countup will trigger only once when it comes into view
    onChange: (inView) => {
      if (inView) setStartCount(true);
    },
  });

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Numbers tell our success
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            We Provide Portfolio website service with our best. This is not just
            a number of people who took service from us; these guys are family.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <div ref={ref}>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                {startCount && <CountUp start={0} end={6} duration={3} />}+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Month in business
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Creating the successful path
            </p>
          </div>

          <div ref={ref}>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                {startCount && <CountUp start={0} end={21} duration={3} />}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Projects delivered
            </p>
            <p className="text-base mt-0.5 text-gray-500">In last 6 months</p>
          </div>

          <div ref={ref}>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                {startCount && <CountUp start={0} end={37} duration={3} />}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Users Served
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Took our Portfolio service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
