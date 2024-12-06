import React from "react";

export default function Stats() {
  return (
    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Numbers tell our success
          </h2>
          <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            We Provide Protfolio website service with our best. This is not just
            a number of people took service from us this guys are family
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 class="font-bold text-7xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {" "}
                6+{" "}
              </span>
            </h3>
            <p class="mt-4 text-xl font-medium text-gray-900">
              Years in business
            </p>
            <p class="text-base mt-0.5 text-gray-500">
              Creating the successful path
            </p>
          </div>

          <div>
            <h3 class="font-bold text-7xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {" "}
                4821{" "}
              </span>
            </h3>
            <p class="mt-4 text-xl font-medium text-gray-900">
              Projects delivered
            </p>
            <p class="text-base mt-0.5 text-gray-500">In last 6 years</p>
          </div>

          <div>
            <h3 class="font-bold text-7xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {" "}
                37+{" "}
              </span>
            </h3>
            <p class="mt-4 text-xl font-medium text-gray-900">Team members</p>
            <p class="text-base mt-0.5 text-gray-500">
              Working for your success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
