import React from 'react'

const FlagCD = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-cd" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0-88h600v600H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(.853 0 0 .853 0 75.093)">
        <path fill="#007fff" d="M0-88h800v600H0z" />
        <path d="M36 32h84l26-84 26 84h84l-68 52 26 84-68-52-68 52 26-84-68-52zM750-88L0 362v150h50L800 62V-88h-50" fill="#f7d618" />
        <path d="M800-88L0 392v120L800 32V-88" fill="#ce1021" />
      </g>
    </svg>
    
  );
}

export default FlagCD
