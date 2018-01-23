import React from 'react'

const FlagAX = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-ax" viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M106.25 0h1133.3v850H106.25z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(.56472 0 0 .56482 -60.002 -.1)">
        <path d="M0 0h1300v850H0z" fill="#0053a5" />
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
