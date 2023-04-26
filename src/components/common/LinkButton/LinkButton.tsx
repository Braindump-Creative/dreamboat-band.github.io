import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  variant: "primary"|"primary-outlined"|"secondary"|"secondary-outlined"
}

const variantToClasses = {
  primary: { spanClass: 'bg-primary border-2 border-transparent', textClass: 'text-white' },
  'primary-outlined': { spanClass: 'border-2 border-primary', textClass: 'text-primary' },
  secondary: { spanClass: 'bg-primary/5', textClass: 'text-primary' },
  'secondary-outlined': { spanClass: '', textClass: '' }
}

const LinkButton: React.FC<PropsWithChildren<Props>> = ({ children, to, variant, ...rest }) => {
  const { spanClass, textClass } = variantToClasses[variant]
  return (
    <a href={to} className="px-6 md:px-7 py-3 rounded-full relative group" {...rest}>
      <span className={classNames(spanClass, "absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all ease-in-out")}></span>
      <span className={classNames(textClass, "relative flex items-center justify-center")}>
        {children}
      </span>
    </a>
  );
}

export default LinkButton;
