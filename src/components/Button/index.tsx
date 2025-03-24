'use client';

import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

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
      className={twMerge(
        'group flex h-10 items-center justify-center rounded-2xl bg-white px-6 transition-all hover:bg-dark-grey hover:text-white focus:bg-dark-grey focus:text-white',
        icon && 'gap-1 pr-[22px]',
        className,
      )}
    >
      {children}

      {icon === 'arrow' && <Arrow className={twMerge('size-5', iconClass)} />}
    </button>
  );
}
