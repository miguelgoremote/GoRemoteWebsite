import React from 'react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { About } from '../components/About';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
    </>
  );
};
