import React from 'react';
import Container from '../common/Container/Container';
import { ReactComponent as InstagramLogo } from '../assets/instagram.svg'

const AppHeader: React.FC<{}> = () => {
  return (
    <header className="absolute inset-x-0 top-0 py-3 z-50">
      <Container className='relative'>
        <nav className="flex items-center justify-between w-full relative">
          <div className="inline-flex relative bg-inherit">
            {/* <span className="flex">
                <span className="w-3 h-6 rounded-l-full flex bg-primary"></span>
                <span className="w-3 h-6 rounded-r-full flex bg-[#f88fc2] mt-2"></span>
            </span> */}
            <span className="text-lg text-gray-700 dark:text-white font-semibold tracking-wider">DREAMBOAT</span>
          </div>
          <div className="flex items-center gap-x-3">
            <a target="_blank" href="https://instagram.com/dreamboattunes" className="transition hover:!text-primary">
                <InstagramLogo />
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default AppHeader;
