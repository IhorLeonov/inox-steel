'use client';

import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'svg'> & {};

const In = ({ ...props }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426 426" {...props}>
      <path d="M398.907 224.177V383.406H376.827L295.891 266.628H294.414V383.406H270.389V224.177H292.625L373.639 341.111H375.116V224.177H398.907Z" />
      <path d="M231.024 224.177V383.406H207V224.177H231.024Z" />
    </svg>
  );
};

export default In;
