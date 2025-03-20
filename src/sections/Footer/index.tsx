import { Container } from '@/components/Container';
import Heading from '@/components/Heading';
import Inox from '@/components/Icons/Inox';

import Link from './Link';
import ListItem from './ListItem';

export const Footer = () => {
  return (
    <footer className="relative mx-auto max-w-[1440px] overflow-visible">
      <Container className="py-10 md:py-[60px] xl:py-[60px]">
        <ul className="relative z-10 flex flex-col justify-between gap-6 md:flex-row">
          <ListItem>
            <Heading className="py-2" tag="h3">
              Наші контакти
            </Heading>

            <Link href="tel:+380980880308">+380980880308</Link>
            <Link href="mailto:inoxteam@gmail.com">inoxteam@gmail.com</Link>
          </ListItem>

          <ListItem>
            <Heading className="py-2" tag="h3">
              месенджери
            </Heading>

            <Link href="">Viber</Link>
            <Link href="">Telegram</Link>
          </ListItem>

          <ListItem>
            <Heading className="py-2" tag="h3">
              соцмережі
            </Heading>

            <Link href="">Instagram</Link>
            <Link href="">Facebook</Link>
          </ListItem>
        </ul>

        <Inox className="mt-[48px] h-auto w-[167px] fill-accent md:mt-20 md:w-[200px] xl:mt-[120px] xl:w-[230px]" />

        <p className="relative z-10 mt-4 md:mt-10 xl:mt-10">
          2025 © INOX. Всі права захищено
        </p>
      </Container>

      {/* <div className="absolute bottom-[-10px] right-0 overflow-visible before:absolute before:inset-0 before:rounded-full before:bg-white/80 before:blur-[17vw] before:content-[''] md:hidden">
        <Image
          src="/images/footer/footer-mobile.png"
          width={434}
          height={396}
          alt="Стальна 3d фігура"
          className="h-auto w-[250px] opacity-90"
          unoptimized
        />
      </div> */}

      {/* <div className="absolute bottom-0 right-0 hidden overflow-visible before:absolute before:inset-0 before:rounded-full before:bg-white/80 before:blur-[10vw] before:content-[''] md:block xl:hidden">
        <Image
          src="/images/footer/footer-tablet-right.png"
          width={390}
          height={356}
          alt="Стальна 3d фігура"
          className="h-auto w-[250px] opacity-90"
          unoptimized
        />
      </div> */}

      {/* <div className="absolute bottom-[-300px] right-0 hidden rotate-90 overflow-visible before:absolute before:inset-0 before:rounded-full before:bg-white/80 before:blur-[6vw] before:content-[''] xl:block">
        <Image
          src="/images/footer/footer-desktop-right.png"
          width={442}
          height={403}
          alt="Стальна 3d фігура"
          className="h-auto w-[600px] opacity-90"
          unoptimized
        />
      </div> */}
    </footer>
  );
};
