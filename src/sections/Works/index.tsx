import Image from 'next/image';

import { Container } from '@/components/Container';
import Htag from '@/components/Htag';

import { IMAGES } from './constants';

import InIcon from '@public/images/works/in.svg';
import InoxIcon from '@public/images/works/inox.svg';
import OxIcon from '@public/images/works/ox.svg';

export const GalleryImage = ({ id, image }: { id: number; image: string }) => {
  return (
    <Image
      className="h-auto w-full rounded-2xl"
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
    <Container tag="section">
      <Htag>наші роботи</Htag>

      <div className="mt-6 grid grid-cols-2 gap-3 md:mt-10 md:hidden xl:mt-[60px]">
        {IMAGES.map(({ id, image }) => (
          <GalleryImage key={id} id={id} image={image} />
        ))}

        <InoxIcon className="fill-dark-grey" />
      </div>

      <div className="mt-6 hidden grid-cols-3 gap-4 md:mt-10 md:grid xl:mt-[60px]">
        {IMAGES.slice(0, -2).map(({ id, image }) => (
          <GalleryImage key={id} id={id} image={image} />
        ))}

        <InIcon className="fill-dark-grey" />
        <OxIcon className="fill-dark-grey" />

        {IMAGES.slice(-2).map(({ id, image }) => (
          <GalleryImage key={id} id={id} image={image} />
        ))}
      </div>
    </Container>
  );
};
