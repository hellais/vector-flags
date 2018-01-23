import React from 'react'

const FlagAX = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-ax" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M166.02 0h850v850h-850z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="translate(-100) scale(.6024)">
        <path fill="#0053a5" d="M0 0h1300v850H0z" />
        <g fill="#ffce00">
          <path d="M400 0h250v850H400z" />
          <path d="M0 300h1300v250H0z" />
        </g>
        <g fill="#d21034">
          <path d="M475 0h100v850H475z" />
          <path d="M0 375h1300v100H0z" />
        </g>
      </g>
    </svg>
    
  );
}

export default FlagAX