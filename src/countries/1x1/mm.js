import React from 'react'

const FlagMM = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-mm" viewBox="0 0 512 512" {...props}>
      <defs>
        <path id="a" transform="scale(8.844)" fill="#fff" d="M.162 0h-.324L0-.5z" />
        <g id="b">
          <use xlinkHref="#a" transform="rotate(-144)" width={18} height={12} />
          <use xlinkHref="#a" transform="rotate(-72)" width={18} height={12} />
          <use xlinkHref="#a" width={18} height={12} />
          <use xlinkHref="#a" transform="rotate(72)" width={18} height={12} />
          <use xlinkHref="#a" transform="rotate(144)" width={18} height={12} />
        </g>
      </defs>
      <path d="M0 0h512v170.667H0z" fill="#fecb00" />
      <path d="M0 341.333h512V512H0z" fill="#ea2839" />
      <path d="M0 170.667h512v170.666H0z" fill="#34b233" />
      <use xlinkHref="#b" x={9} y="6.422" width={18} height={12} transform="translate(-127.659) scale(42.66667)" />
    </svg>
    
  );
}

export default FlagMM
