import classNames from 'classnames';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={classNames('w-full mx-auto max-w-[1216px] px-4', className)}
    >
      {children}
    </div>
  );
};
