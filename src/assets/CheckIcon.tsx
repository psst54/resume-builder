const CheckIcon = ({
  size = "1rem",
  color = "#000000",
}: {
  size?: string;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -4 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="ui-gambling-website-lined-icnos-casinoshunter"
          transform="translate(-2035.000000, -159.000000)"
          fill={color}
          fillRule="nonzero"
        >
          <g id="1" transform="translate(1350.000000, 120.000000)">
            <path
              d="M714.442949,39.6265241 C715.185684,40.4224314 715.185684,41.6860985 714.442949,42.4820059 L697.746773,60.3734759 C697.314529,60.8366655 696.704235,61.0580167 696.097259,60.9870953 C695.539848,61.0082805 694.995328,60.7852625 694.600813,60.3625035 L685.557051,50.6712906 C684.814316,49.8753832 684.814316,48.6117161 685.557051,47.8158087 C686.336607,46.9804433 687.631056,46.9804433 688.410591,47.8157854 L696.178719,56.1395081 L711.589388,39.6265241 C712.368944,38.7911586 713.663393,38.7911586 714.442949,39.6265241 Z"
              id="check"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CheckIcon;
