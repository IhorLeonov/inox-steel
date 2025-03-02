'use client';

import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import Arrow from '../Icons/Arrow';

type IndexProps = ComponentPropsWithoutRef<'button'> & {
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
        'hover:bg-dark-grey hover:text-white focus:bg-dark-grey focus:text-white',
        icon && 'gap-1 pr-[22px]',
        className,
      )}
    >
      {children}

      {icon === 'arrow' && <Arrow className={cn('size-5', iconClass)} />}
    </button>
  );
}
