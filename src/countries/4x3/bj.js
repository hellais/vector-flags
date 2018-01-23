import React from 'react'

const FlagBJ = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-bj" viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="a">
          <path fill="gray" d="M67.64-154h666v666h-666z" />
        </clipPath>
      </defs>
      <g transform="matrix(.961 0 0 .7207 -65 110.99)" clipPath="url(#a)">
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
