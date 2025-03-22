import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type LinkProps = NextLinkProps & {
  children: ReactNode;
  href: string;
  className?: string;
  type: 'footer' | 'menu';
  target?: HTMLAttributeAnchorTarget | undefined;
};

export default function Link({
  children,
  href,
  className,
  type,
  target,
  ...props
}: LinkProps) {
  return (
    <NextLink
      className={twMerge(
        'mt-1 py-2 font-light transition-colors first:mt-3 hover:text-accent md:mt-3',
        type === 'footer' && 'text-[20px] xl:text-[20px]',
        type === 'menu' && 'text-[14px] md:text-[16px]',
        className,
      )}
      href={href}
      target={target ? target : '_blank'}
      {...props}
    >
      {children}
    </NextLink>
  );
}
