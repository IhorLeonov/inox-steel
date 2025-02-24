'use client';

import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

type IconButtonProps = ComponentPropsWithoutRef<'button'> & {
  iconClass?: string;
};

export default function IconButton({
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-40 backdrop-blur-[10px] transition-opacity hover:opacity-100',
        className,
      )}
    >
      {children}
    </button>
  );
}
