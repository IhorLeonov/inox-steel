import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ListItemProps = ComponentPropsWithoutRef<'li'> & {};

export default function ListItem({ children, className }: ListItemProps) {
  return <li className={twMerge('flex flex-col', className)}>{children}</li>;
}
