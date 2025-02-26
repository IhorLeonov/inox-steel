import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

type HtagProps = ComponentPropsWithoutRef<'h2'> & {};

export default function Htag({ children, className }: HtagProps) {
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
}
