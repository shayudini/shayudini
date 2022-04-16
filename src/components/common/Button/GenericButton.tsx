import React from 'react';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const GenericButton: React.FC<IProps> = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <button
      className={`border-2 border-stone-900 bg-stone-900 tracking-wider text-stone-100 transition-all duration-200 hover:bg-stone-100 hover:text-stone-900 focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900 dark:hover:border-stone-100 dark:hover:bg-stone-900 dark:hover:text-stone-100 dark:focus:border-stone-900 dark:focus:ring-stone-900 ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
export default GenericButton;
