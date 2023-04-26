import React, { PropsWithChildren } from 'react';
import classNames from 'classnames'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

const Container: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <div className={classNames("w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto", className)}>
      {children}
    </div>
  );
}

export default Container;
