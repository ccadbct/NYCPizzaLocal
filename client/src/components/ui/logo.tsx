interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export function AndreasPizzaLogo({ className = "", width = 120, height = 40, onClick }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      {/* Andrea's text in green */}
      <text
        x="10"
        y="45"
        fontFamily="serif"
        fontSize="36"
        fontStyle="italic"
        fontWeight="bold"
        fill="#2d5a3d"
      >
        Andrea's
      </text>
      
      {/* PIZZA text in red */}
      <text
        x="10"
        y="85"
        fontFamily="serif"
        fontSize="32"
        fontWeight="bold"
        fill="#c4362e"
        letterSpacing="2px"
      >
        PIZZA
      </text>
    </svg>
  );
}