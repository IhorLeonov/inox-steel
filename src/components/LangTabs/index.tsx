'use client';

import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

type LangTabsProps = ComponentPropsWithoutRef<'div'> & {
  selectedLanguege: 'ua' | 'ru';
  setSelectedLanguage: Dispatch<SetStateAction<'ua' | 'ru'>>;
};

export default function LangTabs({
  className,
  selectedLanguege,
  setSelectedLanguage,
}: LangTabsProps) {
  return (
    <div
      className={twMerge(
        'flex gap-1 text-[20px] font-light text-dark-grey lg:gap-2',
        className,
      )}
    >
      <button
        onClick={() => setSelectedLanguage('ua')}
        className={twMerge(
          'py-0.5 transition-colors hover:border-accent hover:text-accent focus:text-accent',
          selectedLanguege === 'ua' &&
            'border-b border-white font-normal text-white',
        )}
      >
        UA
      </button>

      <button
        onClick={() => setSelectedLanguage('ru')}
        className={twMerge(
          'py-0.5 transition-colors hover:border-accent hover:text-accent focus:text-accent',
          selectedLanguege === 'ru' &&
            'border-b border-white font-normal text-white',
        )}
      >
        RU
      </button>
    </div>
  );
}
