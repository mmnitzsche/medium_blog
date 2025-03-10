'use client'
import HeroDescription from "./Hero/UserContainer";
import CarrerContainer from "./Carrer/CarrerContainer";
import EducationContainer from "./Education/EducationContainer";
import LanguageDropdownContainer from "./LanguageSettings/LanguageDropdown/LanguageDropdownContainer";
export default function Hero() {
  return (
    <>

      <div className="rounded p-4 max-w-[430px] min-w-[200px] flex">
        <div className="bg-[#f6f5f1] p-3 rounded-xl" >
          
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