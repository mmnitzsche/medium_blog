'use client'
import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/ProjectsOLD';
import Projects2 from './components/Projects2';

export default function page() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  function WidescreenView() {
    return (
      <div
        className='flex'>
        {/* <Projects /> */}
        <Projects2></Projects2>
        <Hero />
      </div>
    )
  }

  function MobilecreenView() {
    return (
      <div
      >
        {/* <Projects /> */}
        <Projects2></Projects2>
        <div
          className='flex items-center justify-center w-full'>
          <Hero />
        </div>
      </div>
    )
  }

  function ScreenState() {
    return (
      <>
        {isMobile ? <MobilecreenView></MobilecreenView> : <WidescreenView></WidescreenView>}
      </>
    )
  }


  return (
    <>
      <ScreenState></ScreenState>
    </>
  );
}