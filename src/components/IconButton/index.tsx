'use client';

import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

import BurgerMenu from '../Icons/BurgerMenu';
import Cross from '../Icons/Cross';

type IconButtonProps = ComponentPropsWithoutRef<'button'> & {
  iconClass?: string;
  icon?: 'menu' | 'close';
};

export default function IconButton({
  className,
  children,
  icon,
  iconClass,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        children &&
          'flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-40 backdrop-blur-[10px] transition-opacity hover:opacity-100',
        className,
      )}
    >
      {children}

      {icon === 'menu' && (
        <BurgerMenu
          className={twMerge(
            'h-9 transition-colors hover:stroke-white',
            iconClass,
          )}
        />
      )}

      {icon === 'close' && (
        <Cross
          className={twMerge(
            'h-9 transition-colors hover:stroke-white',
            iconClass,
          )}
        />
      )}
    </button>
  );
}
