export const IconPickleball = ({ className, fill = '#000000' }: PropsWithSVG) => {
  return (
    <span className={className}>
      <svg className="p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="indoor-pickleball-ball">
        <g>
          <circle
            cx="256"
            cy="256"
            r="234"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="44"
          ></circle>
          <circle
            cx="354.052"
            cy="157.948"
            r="37.333"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="36"
            transform="rotate(-45 354.052 157.949)"
          ></circle>
          <circle
            cx="157.948"
            cy="157.948"
            r="37.333"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="36"
            transform="rotate(-76.717 157.949 157.948)"
          ></circle>
          <circle
            cx="157.948"
            cy="354.052"
            r="37.333"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="36"
            transform="rotate(-45 157.947 354.052)"
          ></circle>
          <circle
            cx="354.052"
            cy="354.052"
            r="37.333"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="36"
            transform="rotate(-45 354.052 354.052)"
          ></circle>
          <circle
            cx="256"
            cy="256"
            r="37.333"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="36"
          ></circle>
        </g>
      </svg>
    </span>
  );
};
