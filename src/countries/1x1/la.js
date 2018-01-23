import React from 'react'

const FlagLA = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-la" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M177.17 0h708.66v708.66H177.17z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" fillRule="evenodd" transform="translate(-128) scale(.72249)">
        <path fill="#e90012" d="M0 0h1063v708.66H0z" />
        <path fill="#003dd2" d="M0 176.072h1063v356.51H0z" />
        <path d="M684.172 354.321c0 84.325-68.359 152.683-152.683 152.683s-152.683-68.358-152.683-152.683 68.358-152.683 152.683-152.683 152.683 68.359 152.683 152.683z" fill="#fff" />
      </g>
    </svg>
    
  );
}

export default FlagLA
