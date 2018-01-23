import React from 'react'

const FlagSL = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-sl" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <rect width={384} height={512} rx="4.627" ry="7.628" />
        </clipPath>
      </defs>
      <g transform="scale(1.33333 1)" clipPath="url(#a)" fillRule="evenodd">
        <path fill="#0000cd" d="M0 341.7h512V512H0z" />
        <path fill="#fff" d="M0 171.4h512v170.3H0z" />
        <path fill="#00cd00" d="M0 0h512v171.4H0z" />
      </g>
    </svg>
    
  );
}

export default FlagSL
