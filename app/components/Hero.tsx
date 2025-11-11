'use client'

import HeroDescription from "./Hero/UserContainer";
import CarrerContainer from "./Carrer/CarrerContainer";
import EducationContainer from "./Education/EducationContainer";
export default function Hero() {
  return (
    <>

      <div className="rounded-xl p-4 max-w-[430px] min-w-[200px] flex">
        <div
          className="p-3 rounded-2xl bg-white/20 backdrop-blur-md backdrop-saturate-150 border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        >
          <section className="relative flex items-center pt-10 pb-10">
            <a href="#about"></a>
            <HeroDescription />
          </section>
          <CarrerContainer />
          <EducationContainer />
        </div>
      </div>
    </>
  );
};