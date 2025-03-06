'use client'
import HeroDescription from "./Hero/UserContainer";
import CarrerContainer from "./Carrer/CarrerContainer";
import EducationContainer from "./Education/EducationContainer";
export default function Hero() {
  return (
    <>

      <div className="rounded p-5 max-w-[500px] min-w-[300px]">
        <div className="bg-[#f6f5f1] p-5 rounded-xl" >
          <section
            className="relative  flex items-center pt-10 pb-10 ">
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