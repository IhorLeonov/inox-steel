import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { Container } from '@/components/Container';
import Heading from '@/components/Heading';
import InIcon from '@/components/Icons/works/In';
import InoxIcon from '@/components/Icons/works/Inox';
import OxIcon from '@/components/Icons/works/Ox';

import { IMAGES } from './constants';

export const GalleryImage = ({ id, image }: { id: number; image: string }) => {
  return (
    <Image
      className={twMerge('corner-radius h-auto w-full')}
      key={id}
      src={image}
      width={250}
      height={250}
      alt="Приклад роботи"
    />
  );
};

export const Works = () => {
  return (
    <Container id="works" tag="section">
      <Heading tag="h2">наші роботи</Heading>

      <div className="mt-6 grid grid-cols-2 gap-3 md:mt-10 md:hidden xl:mt-[60px]">
        {IMAGES.map(({ id, image }) => (
          <GalleryImage key={id} id={id} image={image} />
        ))}

        <InoxIcon className="h-auto w-full fill-dark-grey" />
      </div>

      <div className="mt-6 hidden grid-cols-3 gap-4 md:mt-10 md:grid xl:mt-[60px]">
        {IMAGES.slice(0, -2).map(({ id, image }) => (
          <GalleryImage key={id} id={id} image={image} />
        ))}

        <InIcon className="h-auto w-full fill-dark-grey" />
        <OxIcon className="h-auto w-full fill-dark-grey" />

        {IMAGES.slice(-2).map(({ id, image }) => (
          <GalleryImage key={id} id={id} image={image} />
        ))}
      </div>
    </Container>
  );
};
