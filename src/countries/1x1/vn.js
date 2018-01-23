import React from 'react'

const FlagVN = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-vn" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M177.17 0h708.66v708.66H177.17z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="translate(-128) scale(.72249)">
        <path fill="#ec0015" d="M0 0h1063v708.66H0z" />
        <path d="M661.055 527.478l-123.98-92.588-123.372 93.498 45.885-151.938-123.147-93.821 152.355-1.309 47.255-151.476 48.267 151.128 152.355.199-122.515 94.706 46.897 151.601z" fill="#ff0" />
      </g>
    </svg>
    
  );
}

export default FlagVN
