import React from 'react'

const FlagMV = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-mv" viewBox="0 0 512 512" {...props}>
      <path fill="#d21034" d="M0 0h512v512H0z" />
      <path fill="#007e3a" d="M128 128h256v256H128z" />
      <circle r="85.333" cy={256} cx={288} fill="#fff" />
      <ellipse cy={256} cx="308.565" rx="73.898" ry="85.333" fill="#007e3a" />
    </svg>
    
  );
}

export default FlagMV
