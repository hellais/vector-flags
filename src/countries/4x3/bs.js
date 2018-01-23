import React from 'react'

const FlagBS = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-bs" viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M-12 0h640v480H-12z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="translate(12)">
        <path fill="#fff" d="M968.53 480H-10.45V1.77h978.98z" />
        <path fill="#ffe900" d="M968.53 344.48H-10.45V143.3h978.98z" />
        <path fill="#08ced6" d="M968.53 480H-10.45V320.59h978.98zm0-318.69H-10.45V1.9h978.98z" />
        <path d="M-10.913 0c2.173 0 391.71 236.82 391.71 236.82l-392.8 242.38L-10.916 0z" />
      </g>
    </svg>
    
  );
}

export default FlagBS
