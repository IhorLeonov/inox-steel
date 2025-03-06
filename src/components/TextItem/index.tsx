'use client';

import { ComponentPropsWithoutRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import ArrowUpRight from '@/components/Icons/ArrowUpRight';
import Paragraph from '@/components/Paragraph';

import Heading from '../Heading';

type TextItemProps = ComponentPropsWithoutRef<'li'> & {
  title: string;
  desc: string;
};

export default function TextItem({ className, title, desc }: TextItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      tabIndex={1}
      onClick={() => setIsOpen(!isOpen)}
      className={twMerge(
        'group h-[53px] cursor-pointer overflow-y-hidden border-b border-b-black py-4 transition-all duration-300 md:h-[64px] md:py-5',
        className,
        isOpen && 'h-[124px] md:h-[140px]',
      )}
    >
      <Heading
        tag="h3"
        className={twMerge(
          'flex items-center justify-between transition-colors group-hover:text-accent',
          isOpen && '!text-accent',
        )}
      >
        {title}
        <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:rotate-180 md:size-6" />
      </Heading>

      <Paragraph className={twMerge('mt-4 md:mt-5')}>{desc}</Paragraph>
    </li>
  );
}
