import React, { PropsWithChildren } from 'react';
import Container from '../../common/Container/Container';
import Title from '../../common/Title/Title';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

const UpcomingShows: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <section className="pt-16 relative">
        <div aria-hidden="true" className="absolute inset-y-0 w-44 left-0 hidden dark:flex">
            <div
                className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20">
            </div>
        </div>
        <div className="absolute top-14 inset-x-0 h-64 flex items-start">
            <div
                className="h-24 w-2/3 bg-gradient-to-br from-primary opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40">
            </div>
            <div
                className="h-20 w-3/5 bg-gradient-to-r from-primary opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40">
            </div>
        </div>
        <Container class-name="relative">
            <div className="flex justify-between pb-6 relative">
                <Title>Upcoming Shows</Title>
            </div>
            <div className="">
                <div id="seated-55fdf2c0" data-artist-id="204e120f-e3fc-47f8-8bbf-2f6907a0c540" data-css-version="3"></div>
            </div>
        </Container>
    </section>
  )
}

export default UpcomingShows
