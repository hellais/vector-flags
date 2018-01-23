import React from 'react'

const FlagCM = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-cm" viewBox="0 0 512 512" {...props}>
      <path fill="#007a5e" d="M0 0h170.667v512H0z" />
      <path fill="#ce1126" d="M170.667 0h170.667v512H170.667z" />
      <path fill="#fcd116" d="M341.333 0H512v512H341.333z" />
      <g transform="translate(256 256) scale(5.6889)" fill="#fcd116">
        <g id="b">
          <path id="a" d="M0-8L-2.472-.392 1.332.845z" />
          <use height="100%" width="100%" xlinkHref="#a" transform="scale(-1 1)" />
        </g>
        <use height="100%" width="100%" xlinkHref="#b" transform="rotate(72)" />
        <use height="100%" width="100%" xlinkHref="#b" transform="rotate(144)" />
        <use height="100%" width="100%" xlinkHref="#b" transform="rotate(-144)" />
        <use height="100%" width="100%" xlinkHref="#b" transform="rotate(-72)" />
      </g>
    </svg>
    
  );
}

export default FlagCM
