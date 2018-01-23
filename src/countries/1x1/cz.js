import React from 'react'

const FlagCZ = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-cz" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M102.42 0h708.66v708.66H102.42z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="translate(-74) scale(.722)" strokeWidth="1pt">
        <path fill="#e80000" d="M0 0h1063v708.66H0z" />
        <path fill="#fff" d="M0 0h1063v354.33H0z" />
        <path d="M0 0l529.732 353.88L0 707.3V0z" fill="#00006f" />
      </g>
    </svg>
    
  );
}

export default FlagCZ
