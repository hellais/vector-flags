import React from 'react'

const FlagJM = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-jm" viewBox="0 0 512 512" {...props}>
      <g fillRule="evenodd">
        <path d="M0 0l255.999 255.999L0 511.998zm511.998 0L255.999 255.999l255.999 255.999z" />
        <path d="M0 0l255.999 255.999L511.998 0zm0 511.998l255.999-255.999 255.999 255.999z" fill="#090" />
        <path d="M511.998 0h-47.701L0 464.297v47.701h47.701L511.998 47.701z" fill="#fc0" />
        <path d="M0 0v47.703L464.297 512h47.701v-47.701L47.701.002z" fill="#fc0" />
      </g>
    </svg>
    
  );
}

export default FlagJM
