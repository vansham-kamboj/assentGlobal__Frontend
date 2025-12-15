import React from 'react';
import HeroSection from '../components/HeroSection';
import LiveWebinars from '../components/LiveWebinars';
import Benefits from '../components/Benefits';
import UpcomingSeminars from '../components/UpcomingSeminars';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <LiveWebinars />
      <Benefits />
      <UpcomingSeminars />
    </main>
  );
};

export default Home;