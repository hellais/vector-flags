import React from 'react'

const FlagDJ = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-dj" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M55.364 0h708.66v708.66H55.364z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" fillRule="evenodd" transform="translate(-40) scale(.722)">
        <path fill="#0c0" d="M0 0h1063v708.66H0z" />
        <path fill="#69f" d="M0 0h1063v354.33H0z" />
        <path d="M0 0l529.732 353.88L0 707.3V0z" fill="#fffefe" />
        <path d="M221.193 404.247l-42.66-30.71-42.45 31.012 15.79-50.395-42.374-31.118 52.422-.434 16.26-50.24 16.607 50.125 52.422.066-42.156 31.41 16.137 50.283z" fill="red" />
      </g>
    </svg>
    
  );
}

export default FlagDJ
