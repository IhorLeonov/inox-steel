'use client';

import cn from 'classnames';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  tag?: 'div' | 'section';
  children: ReactNode;
};

const styles =
  'mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-10 py-10 md:py-[80px] xl:py-[120px]';

export const Container = ({
  children,
  className,
  tag = 'div',
}: ContainerProps) => {
  return (
    <>
      {tag === 'div' ? (
        <div className={cn(styles, className)}>{children}</div>
      ) : (
        <section className={cn(styles, className)}>{children}</section>
      )}
    </>
  );
};
