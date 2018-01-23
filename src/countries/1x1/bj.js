import React from 'react'

const FlagBJ = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-bj" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fill="gray" d="M67.64-154h666v666h-666z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="translate(-52 118.39) scale(.7688)">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#319400" d="M0-154h333v666H0z" />
          <path fill="#ffd600" d="M333-154h666v333H333z" />
          <path fill="#de2110" d="M333 179h666v333H333z" />
        </g>
      </g>
    </svg>
    
  );
}

export default FlagBJ
