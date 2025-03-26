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
          'w-full bg-transparent py-2 text-black outline-none transition-transform ease-linear placeholder:text-dark-grey focus:translate-x-[8px] md:py-3 md:text-[18px]',
          className,
        )}
        {...props}
      />
    </div>
  );
}
