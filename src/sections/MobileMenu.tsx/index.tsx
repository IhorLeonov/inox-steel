import { useRouter } from 'next/navigation';
import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/components/Button';
import { Container } from '@/components/Container';
import Heading from '@/components/Heading';
import IconButton from '@/components/IconButton';
import LangTabs from '@/components/LangTabs';

import Link from '../Footer/Link';
import ListItem from '../Footer/ListItem';

type MobileMenuProps = ComponentPropsWithoutRef<'aside'> & {
  handleClose: () => void;
  selectedLanguege: 'ua' | 'ru';
  setSelectedLanguage: Dispatch<SetStateAction<'ua' | 'ru'>>;
};

export default function MobileMenu({
  className,
  handleClose,
  selectedLanguege,
  setSelectedLanguage,
}: MobileMenuProps) {
  const router = useRouter();

  return (
    <aside
      className={twMerge(
        'fixed left-0 top-0 z-[100] h-[100dvh] w-full overflow-scroll bg-gray pb-10',
        'translate-x-full opacity-0 transition-all duration-500',
        className,
      )}
    >
      <Container className="flex h-full flex-col justify-between !py-0 md:h-auto md:justify-start md:gap-10">
        <div className="flex h-[52px] items-center justify-between md:min-h-[68px]">
          <span className="text-[30px] font-medium text-white md:text-[40px]">
            INOX
          </span>

          <IconButton onClick={handleClose} icon="close" />
        </div>

        <ul className="z-10 flex flex-col justify-between gap-6 md:gap-10">
          <ListItem>
            <Heading className="py-2" tag="h3">
              навігація
            </Heading>

            <button
              onClick={() => {
                handleClose();
                router.push('#services');
              }}
              className="mt-1 py-2 text-left text-[14px] font-light transition-colors first:mt-3 hover:text-accent md:mt-3 md:text-[16px]"
            >
              Наші послуги
            </button>
            <button
              onClick={() => {
                handleClose();
                router.push('#advantages');
              }}
              className="mt-1 py-2 text-left text-[14px] font-light transition-colors first:mt-3 hover:text-accent md:mt-3 md:text-[16px]"
            >
              Переваги
            </button>
          </ListItem>

          <ListItem>
            <Heading className="py-2" tag="h3">
              Наші контакти
            </Heading>

            <Link href="tel:+380980880308" type="menu">
              +380980880308
            </Link>
            <Link href="mailto:inoxteam@gmail.com" type="menu">
              inoxteam@gmail.com
            </Link>
          </ListItem>

          <ListItem>
            <Heading className="py-2" tag="h3">
              месенджери
            </Heading>

            <Link href="" type="menu">
              Viber
            </Link>
            <Link href="" type="menu">
              Telegram
            </Link>
          </ListItem>

          <ListItem>
            <Heading className="py-2" tag="h3">
              соцмережі
            </Heading>

            <Link href="" type="menu">
              Instagram
            </Link>
            <Link href="" type="menu">
              Facebook
            </Link>
          </ListItem>
        </ul>

        <Button className="w-full md:max-w-[286px]" icon="arrow">
          Зробити замовлення
        </Button>

        <LangTabs
          selectedLanguege={selectedLanguege}
          setSelectedLanguage={setSelectedLanguage}
        />
      </Container>
    </aside>
  );
}
