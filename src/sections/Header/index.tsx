'use client';

import Button from '@components/Button';
import LogoIcon from '@components/Icons/Logo';
import LangTabs from '@components/LangTabs';
// import { sendGAEvent } from '@next/third-parties/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Container } from '@/components/Container';
import IconButton from '@/components/IconButton';
import { LINKS } from '@/sections/Header/constants';
import MobileMenu from '@/sections/MobileMenu.tsx';

import OrderModal from '../OrderModal';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguege, setSelectedLanguage] = useState<'ua' | 'ru'>('ua');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    // sendGAEvent('event', 'button_clicked', {
    //   value: 'user clicked the button',
    // });
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
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

          <IconButton
            className="lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            icon="menu"
          />

          <LangTabs
            className="hidden lg:flex"
            selectedLanguege={selectedLanguege}
            setSelectedLanguage={setSelectedLanguage}
          />
        </Container>
      </header>

      <MobileMenu
        className={twMerge(isMenuOpen && 'translate-x-0 lg:hidden')}
        handleClose={() => setIsMenuOpen(false)}
        selectedLanguege={selectedLanguege}
        setSelectedLanguage={setSelectedLanguage}
        setIsModalOpen={setIsModalOpen}
      />

      <OrderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
