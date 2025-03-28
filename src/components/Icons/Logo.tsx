'use client';

type Props = {
  width?: number | string;
  className?: string;
  color?: string;
};

const Logo = ({ width, className, color = '#FFFFFF' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 297 98"
      width={width}
      fill={color}
      className={className}
    >
      <path d="M47.3191 23.7826H31.5464V88.6019H47.3191V23.7826Z" />
      <path d="M105.258 23.8607V89.0018H89.4072V23.8607H47.2578V8.00183H89.4072L105.258 23.8607Z" />
      <path d="M121 73.1428V24.0017H136.851V73.1428H179V89.0017H136.851L121 73.1428Z" />
      <path d="M194.711 8.00183V73.0018H178.861V23.8607H136.711V8.00183H178.861H194.711Z" />
      <path d="M15.7728 39.8047H0V88.6015H15.7728V39.8047Z" />
      <path d="M262.906 7.99921L279.07 7.99924L225.371 89.5009L209.371 89.501L262.906 7.99921Z" />
      <path d="M15.7728 8.00183V39.8048L0 24.0252V8.00183H15.7728Z" />
      <path
        d="M260.02 60.5H244.02L263.02 89.5H279.02L260.02 60.5Z"
        fill="white"
      />
      <path d="M225.02 8H209.02L228.02 37.5H244.52L225.02 8Z" fill="white" />
    </svg>
  );
};

export default Logo;
