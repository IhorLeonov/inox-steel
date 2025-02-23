import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

type LangTabsProps = ComponentPropsWithoutRef<'div'> & {
  select: 'ua' | 'ru';
};

export default function LangTabs({ select, className }: LangTabsProps) {
  return (
    <div
      className={cn(
        'flex gap-1 text-[20px] font-light text-dark-grey lg:gap-2',
        className,
      )}
    >
      <button
        className={cn(
          'py-0.5 hover:border-accent hover:text-accent focus:text-accent',
          select === 'ua' && 'border-b border-black font-normal text-black',
        )}
      >
        UA
      </button>
      <button
        className={cn(
          'py-0.5 hover:border-accent hover:text-accent focus:text-accent',
          select === 'ru' && 'border-b border-black font-normal text-black',
        )}
      >
        RU
      </button>
    </div>
  );
}
