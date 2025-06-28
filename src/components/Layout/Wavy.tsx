const WaveDivider = ({
  color = "#ffffff",
  flip = false,
}: {
  color?: string;
  flip?: boolean;
}) => (
  <div className="overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-[100px] ${flip ? "rotate-180" : ""}`}
      preserveAspectRatio="none"
    >
      <path
        fill={color}
        d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,74.7C672,96,768,96,864,74.7C960,53,1056,11,1152,10.7C1248,11,1344,53,1392,74.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </svg>
  </div>
);

export default WaveDivider;
