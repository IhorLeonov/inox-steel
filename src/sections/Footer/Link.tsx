import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type LinkProps = NextLinkProps & {
  children: ReactNode;
  href: string;
  className?: string;
};

export default function Link({ children, href, className }: LinkProps) {
  return (
    <NextLink
      className={twMerge(
        'mt-1 py-2 text-[20px] font-light transition-colors first:mt-3 hover:text-accent md:mt-3 xl:text-[20px]',
        className,
      )}
      href={href}
      target="_blank"
    >
      {children}
    </NextLink>
  );
}
