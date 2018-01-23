import React from 'react'

const FlagCW = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-cw" viewBox="0 0 512 512" {...props}>
      <defs>
        <path id="b" d="M0-1l.225.69H.95L.364.12l.225.69L0 .383-.588.81l.225-.692L-.95-.31h.725z" />
        <clipPath id="a">
          <path fillOpacity=".67" d="M0 0h9000v9000H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="scale(.057)">
        <path fill="#002b7f" d="M0 0h13500v9000H0z" />
        <path fill="#f9e814" d="M0 5625h13500v1125H0z" />
        <use xlinkHref="#b" transform="scale(750)" height={9000} width={13500} y={2} x={2} fill="#fff" />
        <use xlinkHref="#b" transform="scale(1000)" height={9000} width={13500} y={3} x={3} fill="#fff" />
      </g>
    </svg>
    
  );
}

export default FlagCW