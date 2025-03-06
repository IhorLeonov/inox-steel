import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h2'> & {
  tag: 'h2' | 'h3';
};

export default function Heading({ children, className, tag }: HeadingProps) {
  switch (tag) {
    case 'h2':
      return (
        <h2
          className={cn(
            'text-[24px] font-medium uppercase leading-[1.2] text-accent md:text-[32px] xl:text-[44px]',
            className,
          )}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={cn(
            'text-[18px] font-medium uppercase text-black md:text-[20px] xl:text-[24px]',
            className,
          )}
        >
          {children}
        </h3>
      );
    default:
      return <></>;
  }
}
