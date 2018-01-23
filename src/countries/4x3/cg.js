import React from 'react'

const FlagCG = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-cg" viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M-79.458 32h640v480h-640z" />
        </clipPath>
      </defs>
      <g strokeWidth="1pt" fillRule="evenodd" clipPath="url(#a)" transform="translate(79.458 -32)">
        <path fill="#ff0" d="M-119.46 32h720v480h-720z" />
        <path d="M-119.46 32v480l480-480h-480z" fill="#00ca00" />
        <path d="M120.54 512h480V32l-480 480z" fill="red" />
      </g>
    </svg>
    
  );
}

export default FlagCG
