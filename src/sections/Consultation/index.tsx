'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/Button';
import { Container } from '@/components/Container';
import Heading from '@/components/Heading';
import InoxIcon from '@/components/Icons/works/Inox';

import FormField from './FormField';

export const Consultation = () => {
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
    <Container
      tag="section"
      id="consultation"
      className="flex flex-col md:flex-row md:gap-7 xl:gap-10"
    >
      <div className="md:order-2 md:w-1/2 md:py-3 xl:pt-10">
        <Heading tag="h2" className="flex gap-2 md:flex-col md:gap-0">
          <span>отримати</span>
          <span>консультацію</span>
        </Heading>

        <form className="mt-4 md:mt-5 xl:mt-[60px]">
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
          <FormField
            placeholder="Коментар"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            type="submit"
            icon="arrow"
            className="mt-10 w-full md:ml-auto md:mt-5 md:w-[180px] xl:mt-[60px]"
            onClick={handleSubmit}
          >
            Надіслати
          </Button>
        </form>
      </div>

      <div className="relative mt-10 w-full overflow-hidden rounded-2xl md:mt-0 md:w-1/2">
        <Image
          src="/images/steel-cubes.jpg"
          width={540}
          height={540}
          alt="Сталеві листи"
          className="h-auto w-full"
          quality={100}
        />

        <InoxIcon className="absolute inset-0 h-auto w-full fill-white" />
      </div>
    </Container>
  );
};
