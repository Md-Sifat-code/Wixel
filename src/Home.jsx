import React from "react";
import Hero from "./Fixed_components/Hero";
import Reason from "./Fixed_components/Reason";
import How_works from "./Fixed_components/How_works";
import Pricing from "./Fixed_components/Pricing";
import Stats from "./Fixed_components/Stats";

export default function Home() {
  return (
    <section>
      <div>
        <Hero />
        <Reason />
        <How_works />
        <Pricing />
        <Stats />
      </div>
    </section>
  );
}
