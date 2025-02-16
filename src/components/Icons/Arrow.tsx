'use client';

import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'svg'> & {
  width?: number | string;
  className?: string;
};

const Arrow = ({ width, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={width}
      {...props}
    >
      <path
        d="M4 12H20M20 12L14 6M20 12L14 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
