import React from 'react'

const FlagLA = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-la" viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M0 0h640v480H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)">
        <path fill="#e90012" d="M-40 0h720v480H-40z" />
        <path fill="#003dd2" d="M-40 119.26h720v241.48H-40z" />
        <path d="M423.42 239.998a103.419 103.419 0 1 1-206.838 0 103.419 103.419 0 1 1 206.837 0z" fill="#fff" />
      </g>
    </svg>
    
  );
}

export default FlagLA