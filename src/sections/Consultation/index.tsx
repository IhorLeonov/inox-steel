'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { Container } from '@/components/Container';
import Heading from '@/components/Heading';
import InoxIcon from '@/components/Icons/works/Inox';
import OrderForm from '@/components/OrderForm';

export const Consultation = () => {
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

        <OrderForm
          className="mt-4 md:mt-5 xl:mt-[60px]"
          buttonSubmitClass="mt-4 md:ml-auto md:mt-5 md:w-[180px] xl:mt-[60px]"
        />
      </div>

      <div
        className={twMerge(
          'corner-radius relative mt-10 w-full overflow-hidden md:mt-0 md:w-1/2',
        )}
      >
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
