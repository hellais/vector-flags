import React from 'react'

const FlagKW = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-kw" viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M0 0h682.67v512H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="scale(.9375)" strokeWidth="1pt">
        <path fill="#fff" d="M0 170.64h1024v170.68H0z" />
        <path fill="#f31830" d="M0 341.32h1024V512H0z" />
        <path fill="#00d941" d="M0 0h1024v170.68H0z" />
        <path d="M0 0v512l255.45-170.7.55-170.77L0 0z" />
      </g>
    </svg>
    
  );
}

export default FlagKW
