const IconSet = {
  html5: {
    fill: ["#E65100", "#FF6D00", "#FFF", "#EEE"],
    path: [
      "M41,5H7l3,34l14,4l14-4L41,5L41,5z",
      "M24 8L24 39.9 35.2 36.7 37.7 8z",
      "M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z",
      "M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z",
    ],
    viewBox: "0 0 48 48",
  },
  menu: {
    fill: "#E65100",
    path: "M17 15a1 1 0 110 2H3a1 1 0 110-2h14zm0-4a1 1 0 110 2H3a1 1 0 110-2h14zm0-4a1 1 0 110 2H3a1 1 0 010-2h14zm0-4a1 1 0 110 2H3a1 1 0 010-2h14z",
    viewBox: "0 0 20 20",
  },
};

function Icon({ icon }) {
  const iconFill = IconSet[icon].fill;
  const iconPath = IconSet[icon].path;
  const svgStyle = {
    display: "block",
    // width: "100%"
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
      {iconFill.map((value, idx) => (
        <path fill={`${value}`} d={`${iconPath[idx]}`}></path>
      ))}
    </svg>
  );
}

export default Icon;
