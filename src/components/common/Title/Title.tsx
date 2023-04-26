import React, { PropsWithChildren } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

const Title: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <h2 className="text-2xl md:text-3xl text-gray-800 dark:text-white font-bold">
        {children}
    </h2>
  );
}

export default Title;
