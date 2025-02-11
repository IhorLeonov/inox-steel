'use client';

import classNames from 'classnames';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={classNames('mx-auto w-full max-w-[1440px] px-4', className)}
    >
      {children}
    </div>
  );
};
