import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import HeroSection from './components/sections/HeroSection/HeroSection';
import MusicSection from './components/sections/MusicSection/MusicSection';


const App: React.FC<{}> = () => {
  return (
    <div>
      <AppHeader />
      <div className='flex flex-col gap-10'>
        <HeroSection />
        <MusicSection />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
