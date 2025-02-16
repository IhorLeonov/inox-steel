'use client';

type Props = {
  width?: number | string;
  className?: string;
  color?: string;
};

const BurgerMenu = ({ width, className, color = '#1A1A1A' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      width={width}
      stroke={color}
      className={className}
    >
      <path
        d="M4.5 9.00146H31.5M4.5 18.0015H31.5M4.5 27.0015H31.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BurgerMenu;
