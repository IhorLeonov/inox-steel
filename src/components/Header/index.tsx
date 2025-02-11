import { Container } from '@/components/Container';
import { LINKS } from '@/components/Header/constants';
import { Logo } from '@/components/Logo';

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex h-[88px] w-full items-center px-[60px]">
      <Container className="flex items-center justify-between">
        <Logo />

        <nav>
          <ul className="flex gap-4">
            {LINKS.map(({ label, link }) => (
              <li key={link}>
                <a href={`#${link}`} className="text-[1.125rem]">
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
