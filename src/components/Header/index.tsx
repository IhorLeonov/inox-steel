'use client';

import { Container } from '@/components/Container';
import { LINKS } from '@/components/Header/constants';

import MenuIcon from '../common/BurgerMenuIcon';
import LogoIcon from '../common/LogoIcon';

export const Header = () => {
  return (
    <header
      className={`fixed top-0 z-10 flex w-full items-center py-[5.333vw]`}
    >
      <Container className="flex items-center justify-between">
        <LogoIcon className="w-[10.667vw]" />
        <button>
          <MenuIcon className="w-[9.6vw]" />
        </button>

        <nav className="hidden xl:block">
          <ul className="flex gap-4">
            {LINKS.map(({ label, link }) => (
              <li key={link}>
                <a href={`#${link}`} className="text-[1.389vw]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
