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
        d="M27 9L9 27M9 9L27 27"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BurgerMenu;
