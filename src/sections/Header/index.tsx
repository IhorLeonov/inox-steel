'use client';

import Button from '@components/Button';
import MenuIcon from '@components/Icons/BurgerMenu';
import LogoIcon from '@components/Icons/Logo';
import LangTabs from '@components/LangTabs';
import { sendGAEvent } from '@next/third-parties/google';
import Link from 'next/link';
import { useState } from 'react';

import { Container } from '@/components/Container';
import { LINKS } from '@/sections/Header/constants';

export const Header = () => {
  const [location, setLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | undefined
  >();

  const handleButtonClick = () => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       const { latitude, longitude } = position.coords;
    //       setLocation({ latitude, longitude });
    //     },
    //     (error) => {
    //       console.error('Ошибка при получении геолокации: ', error);
    //     },
    //   );
    // } else {
    //   console.log('Геолокация не поддерживается этим браузером.');
    // }

    // sendGAEvent('event', 'get_location', {
    //   value: location || 'User rejected access to location',
    // });

    sendGAEvent('event', 'button_clicked', {
      value: 'user clicked the button',
    });
  };

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
          onClick={handleButtonClick}
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
