'use client';

import { ComponentPropsWithoutRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '../Button';
import FormField from './FormField';
import FormTextField from './FormTextField';

type OrderFormProps = ComponentPropsWithoutRef<'form'> & {
  buttonSubmitClass?: string;
};

export default function OrderForm({
  buttonSubmitClass,
  className,
  ...props
}: OrderFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({ name, phone, message });

    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <form className={twMerge('', className)} {...props}>
      <FormField
        placeholder="Ім’я"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormField
        placeholder="Номер телефону"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <FormTextField
        placeholder="Коментар"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button
        type="submit"
        icon="arrow"
        className={twMerge('w-full', buttonSubmitClass)}
        onClick={handleSubmit}
      >
        Надіслати
      </Button>
    </form>
  );
}
