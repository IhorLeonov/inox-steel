import Image from 'next/image';

import Button from '@/components/Button';
import { Container } from '@/components/Container';

export const Hero = () => {
  return (
    <Container
      tag="section"
      className="relative overflow-visible pb-[400px] pt-[70px] md:min-h-[calc(100vh_-_68px)] md:pb-[600px] md:pt-[80px] lg:pb-[480px] xl:pb-[360px] xl:pt-[120px]"
    >
      <h1 className="smm:translate-x-[-2vw] w-full translate-x-[-3vw] text-center text-[39.7vw] leading-[1] text-accent md:translate-x-[-12px] md:text-start md:text-[178px] xl:translate-x-[-24px] xl:text-[320px]">
        INOX
      </h1>

      <h2 className="mt-5 text-center text-[5.333vw] font-normal uppercase md:mt-7 md:max-w-[420px] md:text-start md:text-[32px] xl:mt-[40px] xl:max-w-[570px] xl:text-[44px]">
        Індивідуальні рішення з нержавіючої сталі
      </h2>

      <Button
        className="mx-auto mt-7 md:mx-0 md:mt-10 xl:mt-[60px]"
        icon="arrow"
      >
        Переглянути каталог
      </Button>

      <div className="relative right-0 overflow-visible before:absolute before:inset-0 before:rounded-full before:bg-white/80 before:blur-[13.867vw] before:content-[''] md:absolute md:top-[360px] md:w-[615px] md:before:blur-[7vw] lg:top-[240px] xl:right-[-60px] xl:top-[80px] xl:z-[-1] xl:w-[971px]">
        <Image
          src="/images/hero-mobile.png"
          width={434}
          height={396}
          alt="Стальна 3d фігура"
          className="relative z-10 h-auto w-full md:hidden"
          unoptimized
        />
        <Image
          src="/images/hero-tablet.png"
          width={615}
          height={560}
          alt="Стальна 3d фігура"
          className="relative z-10 hidden h-auto w-full md:block xl:hidden"
          unoptimized
        />
        <Image
          src="/images/hero-desktop.png"
          width={971}
          height={885}
          alt="Стальна 3d фігура"
          className="relative z-10 hidden h-auto w-full xl:block"
          unoptimized
        />
      </div>
    </Container>
  );
};
