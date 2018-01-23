import React from 'react'

const FlagJO = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-jo" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M113.56 0h493.5v493.5h-493.5z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="translate(-117.82) scale(1.0375)">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path d="M0 0h987v164.5H0z" />
          <path fill="#fff" d="M0 164.5h987V329H0z" />
          <path fill="#090" d="M0 329h987v164.5H0z" />
          <path d="M0 493.5l493.5-246.75L0 0v493.5z" fill="red" />
          <path fill="#fff" d="M164.766 243.954l22.101 10.645h-24.531l5.459 23.923-15.294-19.2-15.296 19.2 5.459-23.923h-24.53l22.1-10.645-15.294-19.181 22.102 10.65L152.5 211.5l5.457 23.923 22.101-10.65z" />
        </g>
      </g>
    </svg>
    
  );
}

export default FlagJO
