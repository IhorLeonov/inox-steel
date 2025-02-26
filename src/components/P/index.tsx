import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

type PProps = ComponentPropsWithoutRef<'p'> & {};

export default function P({ children, className }: PProps) {
  return (
    <p
      className={cn(
        'text-[16px] text-dark-grey md:text-[18px] xl:text-[20px]',
        className,
      )}
    >
      {children}
    </p>
  );
}
