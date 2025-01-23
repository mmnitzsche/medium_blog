'use client'
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function page() {

  console.log("Check my github github:https://github.com/mmnitzsche/")
  return (
    <>
      <div
        className='flex'>
        <Projects />
        <Hero />
      </div>
    </>
  );
}