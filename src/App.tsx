import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import HeroSection from './components/HeroSection/HeroSection';


const App: React.FC<{}> = () => {
  return (
    <div>
      <AppHeader />
      <HeroSection />
      <AppFooter />
    </div>
  );
}

export default App;
