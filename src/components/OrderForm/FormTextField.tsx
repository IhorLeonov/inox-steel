import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type FormTextFieldProps = ComponentPropsWithoutRef<'textarea'> & {
  conrainerClass?: string;
};

export default function FormTextField({
  className,
  conrainerClass,
  ...props
}: FormTextFieldProps) {
  return (
    <div
      className={twMerge(
        'h-auto w-full overflow-hidden border-b border-b-dark-grey py-2 md:py-3',
        conrainerClass,
      )}
    >
      <textarea
        className={twMerge(
          'min-h-12 w-full resize-none overflow-hidden bg-transparent text-black outline-none transition-transform ease-linear placeholder:text-dark-grey focus:translate-x-[8px] md:min-h-20 md:text-[18px]',
          className,
        )}
        {...props}
      />
    </div>
  );
}
