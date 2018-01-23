import React from 'react'

const FlagCG = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-cg" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M115.74 0H611.8v496.06H115.74z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="translate(-119.46) scale(1.032)" strokeWidth="1pt">
        <path fill="#ff0" d="M0 0h744.09v496.06H0z" />
        <path d="M0 0v496.06L496.06 0H0z" fill="#00ca00" />
        <path d="M248.03 496.06h496.06V0L248.03 496.06z" fill="red" />
      </g>
    </svg>
    
  );
}

export default FlagCG
