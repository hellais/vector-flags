import React from 'react'

const FlagCL = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-cl" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M0 0h708.66v708.66H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="scale(.722)" fillOpacity=".996">
        <path fill="#fff" d="M354.31 0h708.68v354.34H354.31z" />
        <path fill="#0039a6" d="M0 0h354.34v354.34H0z" />
        <path d="M232.273 265.338l-54.883-41.16-54.615 41.564 20.312-67.543-54.514-41.708 67.444-.582 20.92-67.338 21.366 67.183 67.444.09-54.234 42.1 20.76 67.393z" fill="#fff" />
        <path fill="#d52b1e" d="M0 354.34h1063v354.32H0z" />
      </g>
    </svg>
    
  );
}

export default FlagCL
