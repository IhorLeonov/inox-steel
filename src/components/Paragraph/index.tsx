import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

type ParagraphProps = ComponentPropsWithoutRef<'p'> & {};

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={cn(
        'text-[16px] text-dark-grey md:text-[18px] xl:text-[20px]',
        className,
      )}
    >
      {children}
    </p>
  );
}
