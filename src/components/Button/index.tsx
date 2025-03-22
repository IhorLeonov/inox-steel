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
        'group flex h-10 items-center justify-center rounded-full bg-white px-6 transition-all',
        'hover:bg-dark-grey hover:text-white focus:bg-dark-grey focus:text-white',
        // 'group flex h-10 items-center justify-center rounded-full bg-white px-6 transition-all',
        // 'hover:bg-accent hover:text-black focus:bg-accent focus:text-black',
        icon && 'gap-1 pr-[22px]',
        className,
      )}
    >
      {children}

      {icon === 'arrow' && (
        <Arrow
          className={cn(
            'size-5',
            // 'transition-all group-hover:rotate-45',
            iconClass,
          )}
        />
      )}
    </button>
  );
}
