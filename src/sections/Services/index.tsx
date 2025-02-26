import { EmblaOptionsType } from 'embla-carousel';

import { Container } from '@/components/Container';
import EmblaCarousel from '@/components/EmblaCarousel.tsx';
import Htag from '@/components/Htag';
import P from '@/components/P';

import { SLIDES } from './constants';

const CAROUSEL_OPTIONS: EmblaOptionsType = {
  dragFree: true,
  loop: true,
};

export const Services = () => {
  return (
    <Container id="services" tag="section" className="pb-10">
      <div className="justify-between md:flex">
        <Htag>наші послуги</Htag>
        <P className="mt-2 md:max-w-[50%]">
          Ми пропонуємо широкий спектр послуг по виготовленню виробів з{' '}
          <span className="text-white">нержавіючої </span>сталі для дому,
          зокрема, таких як: перила та поручні, козирки та навіси, сходи та
          балкони, сушарки для ванної кімнати та інші вироби під замовлення
        </P>
      </div>

      <EmblaCarousel
        className="mt-6"
        slides={SLIDES}
        options={CAROUSEL_OPTIONS}
      />
    </Container>
  );
};
