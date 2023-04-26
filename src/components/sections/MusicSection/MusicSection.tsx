import React, { PropsWithChildren } from 'react';
import Container from '../../common/Container/Container';
import Title from '../../common/Title/Title';
import LinkButton from '../../common/LinkButton/LinkButton';
import Spotify from '../../common/Spotify/Spotify';
import EmphasiseText from '../../common/EmphasiseText/EmphasiseText';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

const MusicSection: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <section className="pt-20 md:pt-24">
      <Container>
          <div className="grid md:grid-cols-2 gap-10 xl:gap-14 relative">
              <div className="flex md:h-full ">
                  <div
                      className="w-full md:h-full rounded-3xl bg-white dark:bg-body shadow-lg shadow-box-shadow border border-box-border">
                      <img src="/images/cover_small.jpg" alt="EP Cover" width="300"
                          className="w-full h-full object-fit rounded-2xl" />
                  </div>
              </div>
              <div className="md:py-2 lg:py-4 relative">
                  <div className="absolute right-0 top-0 h-full w-full flex justify-end">
                      <span className="flex opacity-20">
                          <span className="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                          <span className="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
                      </span>
                  </div>
                  <div className="relative flex flex-col justify-between h-full">
                      <Title>Listen</Title>
                      <p className="text-gray-600 dark:text-gray-300 pt-4">
                        <EmphasiseText>"Lights Out // Won't Stay Long"</EmphasiseText> is the electrifying two-track release from Dreamboat, showcasing their dynamic sound and energetic performance style.
                        The first track "Lights Out" kicks off with a punchy drumbeat and builds into a soaring chorus, featuring catchy vocal hooks and explosive guitar riffs.
                        The second track, "Won't Stay Long", delivers an emotive ballad with delicate melodies and poignant lyrics, showcasing the band's versatility and range.
                         With their impeccable musicianship and contagious energy, Dreamboat delivers a powerful and memorable listening experience.

                      </p>
                      <div className='flex flex-col gap-4 py-4'>
                        <Spotify wide link="https://open.spotify.com/track/2gP5jqaetsPlKQUm1PquA9?si=938b6f8149054b84"/>
                        <Spotify wide link="https://open.spotify.com/track/6Kvycbzgsgxx1iyBL8BKM9?si=a663ef01e3a04ad7"/>
                      </div>
                      {/*
                      <div className="grid grid-cols-3 gap-4 max-w-lg pt-8">
                          <div
                              className="text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3">
                              <h3 className="text-gray-800 dark:text-white font-bold text-xl sm:text-2xl lg:text-3xl">+ 45
                              </h3>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Episodes</p>
                          </div>
                          <div
                              className="text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3">
                              <h3 className="text-gray-800 dark:text-white font-bold text-xl sm:text-2xl lg:text-3xl">+
                                  500</h3>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Lovely Listerners</p>
                          </div>
                          <div
                              className="text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3">
                              <h3 className="text-gray-800 dark:text-white font-bold text-xl sm:text-2xl lg:text-3xl">+ 5
                              </h3>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Years Experience</p>
                          </div>
                      </div> */}
                      <div className="pt-4 flex">
                          <LinkButton to="https://open.spotify.com/artist/1MNEjROoaqBQdPfqFXoskt?si=Zht002qSQCSWpMgzmdHOqg" variant='primary' target="_blank">
                              Hear more
                          </LinkButton>
                      </div>
                  </div>
              </div>
          </div>
      </Container>
    </section>
    )
    }

export default MusicSection
