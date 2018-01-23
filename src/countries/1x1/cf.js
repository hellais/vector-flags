import React from 'react'

const FlagCF = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-cf" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)">
        <path fill="#00f" d="M-52-.506h768v127H-52z" />
        <path fill="#ff0" d="M-52 383.5h768V512H-52z" />
        <path fill="#009a00" d="M-52 255h768v128.5H-52z" />
        <path fill="#fff" d="M-52 126.49h768v128.5H-52z" />
        <path fill="red" d="M268 0h128v512H268z" />
        <path fill="#ff0" d="M109.493 112.306L75.95 89.11l-33.434 23.424L54.12 73.33 21.604 48.645l40.723-1.034L75.66 8.937l13.562 38.56 40.758.782-32.336 24.866" />
      </g>
    </svg>
    
  );
}

export default FlagCF
