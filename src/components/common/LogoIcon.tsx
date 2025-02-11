'use client';

type Props = {
  width?: number | string;
  className?: string;
  color?: string;
};

const Logo = ({ width, className, color = '#1A1A1A' }: Props) => {
  return (
    <>
      <svg
        viewBox="0 0 106 81"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
      >
        <path d="M47.3191 15.7808H31.5464V80.6001H47.3191V15.7808Z" />
        <path d="M105.258 15.8589V81H89.4072V15.8589H47.2578V0H89.4072L105.258 15.8589Z" />
        <path d="M15.7728 31.803H0V80.5998H15.7728V31.803Z" />
        <path d="M15.7728 0V31.803L0 16.0234V0H15.7728Z" />
      </svg>
    </>
  );
};

export default Logo;
