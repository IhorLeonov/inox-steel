import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

type PProps = ComponentPropsWithoutRef<'p'> & {};

export default function P({ children, className }: PProps) {
  return (
    <p className={cn('text-[14px] text-dark-grey', className)}>{children}</p>
  );
}
