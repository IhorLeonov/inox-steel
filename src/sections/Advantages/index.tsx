import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { Container } from '@/components/Container';
import Heading from '@/components/Heading';
import TextItem from '@/components/TextItem';

import { ADVANTAGES } from './constants';

import steelImage from '@public/images/steel-1.jpg';

export const Advantages = () => {
  return (
    <Container
      id="advantages"
      tag="section"
      className="md:flex md:flex-row md:gap-7 xl:gap-10"
    >
      <div className="md:w-1/2 md:py-3 xl:pt-10">
        <Heading tag="h2">чому inox?</Heading>

        <ul className="mt-5 xl:mt-10">
          {ADVANTAGES.map(({ id, ...props }) => (
            <TextItem key={id} {...props} />
          ))}
        </ul>
      </div>

      <Image
        src={steelImage}
        width={540}
        height={540}
        alt="Сталеві листи"
        className={twMerge(
          'corner-radius mt-10 h-auto w-full md:mt-0 md:w-1/2',
        )}
        quality={100}
      />
    </Container>
  );
};
