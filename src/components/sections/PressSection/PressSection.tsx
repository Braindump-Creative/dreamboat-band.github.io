import React, { PropsWithChildren } from 'react';
import Container from '../../common/Container/Container';
import Title from '../../common/Title/Title';
import LinkButton from '../../common/LinkButton/LinkButton';
import PressCard from './PressCard';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

const PressSection: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
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
                <Title>Latest Press</Title>
            </div>
            <div className="grid grid-cols-2 items-stretch sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10 sm:gap-x-5 sm:gap-y-8">
                <PressCard
                    title="Rolling Stone"
                    link="#"
                    image="/images/promo_stairs.jpeg"
                    description="Dreamboat has outdone themselves with their latest album 'Lights Out // Won't Stay Long'. From start to finish, the album is a masterpiece of indie pop and rock. The band's distinctive sound and introspective lyrics create an immersive and emotional listening experience. This is an album that will stay with you long after the last track ends."
                />

                <PressCard
                    title="Alternative Press"
                    link="#"
                    image="/images/promo_stairs.jpeg"
                    description="Dreamboat's latest release is a true gem. 'Lights Out // Won't Stay Long' is a perfect blend of catchy melodies and thoughtful lyrics. The band's evolution is evident in this album, as they've refined their sound into something truly special. It's hard not to get lost in the dreamy and ethereal atmosphere created by this album. This is indie pop at its finest."
                />

                <PressCard
                    title="Kerrang"
                    link="#"
                    image="/images/promo_stairs.jpeg"
                    description="Dreamboat has done it again with 'Lights Out // Won't Stay Long'. This album showcases the band's growth and maturity, while still maintaining their signature sound. The tracks are beautifully crafted and expertly produced, making for an enjoyable and cohesive listening experience. Fans of Dreamboat will not be disappointed, and newcomers to the band will be quickly won over."
                />

                <PressCard
                    title="Triple J"
                    link="#"
                    image="/images/promo_stairs.jpeg"
                    description="Dreamboat's latest release is a triumph. 'Lights Out // Won't Stay Long' is a mesmerizing and captivating album that showcases the band's talents and creativity. The songs are infectious and uplifting, and the lyrics are insightful and introspective. This album is proof that Dreamboat is a band to watch, and one that is sure to make a lasting impact on the indie pop and rock scene."
                />
            </div>
        </Container>
    </section>
  )
}

export default PressSection
