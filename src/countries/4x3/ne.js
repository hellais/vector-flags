import React from 'react'

const FlagNE = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-ne" viewBox="0 0 640 480" {...props}>
      <path fill="#0db02b" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 0h640v320H0z" />
      <path fill="#e05206" d="M0 0h640v160H0z" />
      <circle cx={320} cy={240} r={68} fill="#e05206" />
    </svg>
    
  );
}

export default FlagNE
