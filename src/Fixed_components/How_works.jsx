import React from "react";

export default function How_works() {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            A Overview of how you can order your preferable protfolio website
          </p>
        </div>

        <div class="relative mt-12 lg:mt-20">
          <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              class="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Create Your account
              </h3>
              <p class="mt-4 text-base text-gray-600">
                You can login with google or gmail adress it is free . Click on
                the SIGN IN button top right.
              </p>
            </div>

            <div>
              <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Select A Website Plan
              </h3>
              <p class="mt-4 text-base text-gray-600">
                You Can Checkout our website service plan . Choose which one you
                like. Mail Us. Our Team Will Response you soon to know your
                preferable Design
              </p>
            </div>

            <div>
              <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Release & Launch
              </h3>
              <p class="mt-4 text-base text-gray-600">
                After Compliting our work we will notify you by email. You need
                to full fill your payment to receive the Website and Deploy it
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
