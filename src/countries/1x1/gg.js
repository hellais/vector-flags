import React from 'react'

const FlagGG = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-gg" viewBox="0 0 512 512" {...props}>
      <path d="M0 0h512v512H0z" fill="#fff" />
      <path d="M192 0h128v512H192z" fill="#e8112d" />
      <path d="M0 187.733h512v136.534H0z" fill="#e8112d" />
      <path id="a" d="M45.991 305.778l23.342-24.89h209.991v-49.777H69.334L45.99 206.222z" fill="#f9dd16" />
      <use xlinkHref="#a" transform="matrix(0 1.06667 -.9375 0 496 -17.068)" height={24} width={36} />
      <use xlinkHref="#a" transform="matrix(0 -1.06667 .9375 0 16 529.068)" height={24} width={36} />
      <use xlinkHref="#a" transform="rotate(180 256 256)" height={24} width={36} />
    </svg>
    
  );
}

export default FlagGG