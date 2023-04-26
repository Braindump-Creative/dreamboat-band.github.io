import React, { PropsWithChildren } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

const EmphasiseText: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <span className="font-semibold italic">
        {children}
    </span>
  );
}

export default EmphasiseText;
