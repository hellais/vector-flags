import React from 'react'

const FlagPS = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-ps" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M237.11 0h493.5v493.5h-493.5z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="translate(-246) scale(1.0375)">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path d="M0 0h987v164.5H0z" />
          <path fill="#fff" d="M0 164.5h987V329H0z" />
          <path fill="#090" d="M0 329h987v164.5H0z" />
          <path d="M0 493.5l493.5-246.75L0 0v493.5z" fill="red" />
        </g>
      </g>
    </svg>
    
  );
}

export default FlagPS
