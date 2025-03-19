import Button from '@components/Button';
import MenuIcon from '@components/Icons/BurgerMenu';
import LogoIcon from '@components/Icons/Logo';
import LangTabs from '@components/LangTabs';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { LINKS } from '@/sections/Header/constants';

export const Header = () => {
  return (
    <header
      className={`fixed top-0 z-50 flex h-[52px] w-full items-center backdrop-blur-sm md:h-[68px]`}
    >
      <Container className="flex items-center justify-between !py-0">
        <LogoIcon className="h-7 fill-dark-grey transition-colors md:h-9" />

        <nav className="mx-auto hidden lg:block">
          <ul className="flex gap-10 xl:gap-20">
            {LINKS.map(({ label, link, type }) => (
              <li key={link}>
                <Link
                  href={`${type}${link}`}
                  className="hover:text-white focus:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          icon="arrow"
          className="ml-auto mr-5 hidden md:flex lg:ml-0 xl:mr-10"
        >
          Зробити замовлення
        </Button>

        <button className="lg:hidden">
          <MenuIcon className="h-9" />
        </button>

        <LangTabs select="ua" className="hidden lg:flex" />
      </Container>
    </header>
  );
};
