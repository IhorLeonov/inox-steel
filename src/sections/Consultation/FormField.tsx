import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type FormFieldProps = ComponentPropsWithoutRef<'input'> & {
  conrainerClass?: string;
};

export default function FormField({
  className,
  conrainerClass,
  ...props
}: FormFieldProps) {
  return (
    <div
      className={twMerge(
        'w-full overflow-hidden border-b border-b-dark-grey',
        conrainerClass,
      )}
    >
      <input
        className={twMerge(
          'h-[64px] w-full bg-transparent text-[20px] text-black outline-none transition-transform ease-linear placeholder:text-dark-grey focus:translate-x-[8px]',
          className,
        )}
        {...props}
      />
    </div>
  );
}
