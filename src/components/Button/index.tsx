'use client';

import cn from 'classnames';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

import Arrow from '../Icons/Arrow';

type IndexProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
  icon?: 'arrow';
  iconClass?: string;
};

export default function Button({
  children,
  className,
  icon,
  iconClass,
  ...props
}: IndexProps) {
  return (
    <button
      {...props}
      className={cn(
        'flex h-10 items-center justify-center rounded-full bg-white px-6',
        'hover:text-button-text-hover focus:text-button-text-hover hover:bg-accent focus:bg-accent',
        icon && 'gap-1',
        className,
      )}
    >
      {children}

      {icon === 'arrow' && <Arrow className={cn('size-5', iconClass)} />}
    </button>
  );
}
