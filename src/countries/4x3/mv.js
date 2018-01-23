import React from 'react'

const FlagMV = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-mv" viewBox="0 0 640 480" {...props}>
      <path fill="#d21034" d="M0 0h640v480H0z" />
      <path fill="#007e3a" d="M120 120h400v240H120z" />
      <circle r={80} cy={240} cx={350} fill="#fff" />
      <circle r={80} cy={240} cx={380} fill="#007e3a" />
    </svg>
    
  );
}

export default FlagMV
