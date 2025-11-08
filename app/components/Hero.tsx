'use client'

import HeroDescription from "./Hero/UserContainer";
import CarrerContainer from "./Carrer/CarrerContainer";
import EducationContainer from "./Education/EducationContainer";

export default function Hero() {
  return (
    <div className="rounded-xl p-4 max-w-[430px] min-w-[200px] flex">
      <div
        className="p-3 rounded-2xl 
                   bg-gradient-to-b from-white/30 via-white/10 to-white/5 
                   backdrop-blur-xl backdrop-saturate-200 
                   border border-white/40 
                   shadow-[0_4px_40px_rgba(0,0,0,0.1)]
                   transition-all duration-300 hover:shadow-[0_6px_50px_rgba(0,0,0,0.15)]"
      >
        <section className="relative flex items-center pt-10 pb-10">
          <a href="#about"></a>
          <HeroDescription />
        </section>
        <CarrerContainer />
        <EducationContainer />
      </div>
    </div>
  );
}
