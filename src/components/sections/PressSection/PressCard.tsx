import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image: string
  title: string
  description: string
  link: string
}

const PressCard: React.FC<Props> = ({ image, title, description, link }) => {
  return (
    <div className="lg:p-1 relative h-auto flex flex-col lg:rounded-2xl lg:bg-box-bg lg:shadow-lg lg:shadow-box-shadow lg:border lg:border-box-border">
      <div className="relative h-max min-h-max">
        <img src={image} alt="Cover" width="280" className="w-full h-32 sm:h-36 md:h-40 lg:h-48 rounded-xl object-cover" />
      </div>
    <div className="lg:px-2 pt-2 lg:pb-4 xl:px-4 md:pt-4  h-full flex flex-col justify-between">
      <div className="h-full">
          <h2 className="font-semibold text-base md:text-lg lg:text-xl line-clamp-2 md:line-clamp-3 text-gray-700 dark:text-white">
              {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 pt-4">
            {description}
          </p>
          <p className="text-gray-600 dark:text-gray-300 pt-4">
            <div>by CHATGPT</div>
          </p>
      </div>
      <div className="pt-3 sm:pt-5 min-h-max h-max">
            <a href={link}
                className="flex relative group items-center text-white px-5 py-2 bg-primary gap-1 text-sm w-max rounded-full">
                <span className="absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all ease-in-out bg-primary">

                </span>
                <span className="relative flex items-center gap-3">
                  Read More
                </span>
            </a>
        </div>
  </div>
</div>
  )
}

export default PressCard
