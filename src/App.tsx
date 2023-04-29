import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import HeroSection from './components/sections/HeroSection/HeroSection';
import MusicSection from './components/sections/MusicSection/MusicSection';
import PressSection from './components/sections/PressSection/PressSection';
import UpcomingShows from './components/sections/UpcomingShows/UpcomingShows';


const App: React.FC<{}> = () => {
  return (
    <div>
      <AppHeader />
      <div className='flex flex-col gap-10 pb-10'>
        <HeroSection />
        <MusicSection />
        <PressSection />
        <UpcomingShows />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
