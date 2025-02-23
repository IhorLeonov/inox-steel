import { Container } from '@/components/Container';
import EmblaCarousel from '@/components/EmblaCarousel.tsx';
import Htag from '@/components/Htag';
import P from '@/components/P';

export const Services = () => {
  return (
    <Container id="services" tag="section" className="pb-10">
      <Htag>наші послуги</Htag>
      <P className="mt-2 text-justify">
        Ми пропонуємо широкий спектр послуг по виготовленню виробів з
        нержавіючої сталі для дому, зокрема, таких як: перила та поручні,
        козирки та навіси, сходи та балкони, сушарки для ванної кімнати та інші
        вироби під замовлення
      </P>

      <EmblaCarousel className="mt-6" slides={[1, 2, 3, 4, 5]} />
    </Container>
  );
};
