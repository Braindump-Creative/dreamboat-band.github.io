import React, { PropsWithChildren } from 'react';
import Container from '../Container/Container';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

const HeroSection: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div
          className="h-24 w-2/3 bg-gradient-to-br from-primary opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40"
        ></div>
        <div
          className="h-20 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40"
        ></div>
      </div>
      <Container className="relative">
        <div aria-hidden="true" className="absolute inset-y-0 w-44 left-0 hidden dark:flex">
          <div
            className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20"
          ></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
          <div className="lg:py-6">
            <div className="text-center lg:text-left">
              {/* <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-body text-primary ">New season available</span> */}
              <h1 className="text-gray-800 pt-4 dark:text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#8cd66a]">Dreamboat</span><br />
                Energetic Post-Hardcore
              </h1>
            </div>

            <p className="text-gray-600 dark:text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
            Dreamboat is a new band from Newcastle/Sydney and the Central Coast. Their sound combines the energy of Post-Hardcore bands like Title Fight, Basement, and Citizen with an Australian twist that's similar to Dear Seattle and Luca Brasi. Although the members have roots in hardcore, Dreamboat's music is fresh, innovative, and perfect for fans of that Aussie sound. With a two-track EP on the way, Dreamboat is a band to watch in 2023.
            </p>

            {/* <div className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
              <AtomsLinkBtn href="#" variant="primary" className="w-full sm:w-max flex justify-center">
                Join us
              </AtomsLinkBtn>
            </div> */}
          </div>
          <div className="lg:h-full flex">
            <div className="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
              <div className="absolute z-0 top-1/2  -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-primary to-pink-300 dark:from-[#570cac] dark:to-primary blur-2xl"></div>
              <div className="absolute w-3/5 h-full z-10 p-1 -translate-y-1/2 top-1/2 right-3 rounded-3xl bg-white dark:bg-body shadow-lg shadow-box-shadow border border-box-border">
                <img src="/images/promo_stairs.jpeg" alt="In studio" width="500" height="auto" loading="lazy" className="w-full h-full rounded-2xl object-cover" />
              </div>
              <div className="absolute -translate-y-1/2 top-1/2 h-[calc(60%-2rem)] w-[calc(40%-20px)] p-1 rounded-3xl bg-white dark:bg-body shadow-lg shadow-box-shadow border border-box-border ">
                <img src="/images/cover_small.jpg" alt="Happy in studio" width="200" height="auto" loading="lazy" className="w-full h-full rounded-2xl object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div id="seated-55fdf2c0" data-artist-id="204e120f-e3fc-47f8-8bbf-2f6907a0c540" data-css-version="3"></div>
    </section>
  );
}

export default HeroSection;
