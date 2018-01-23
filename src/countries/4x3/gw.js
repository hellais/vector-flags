import React from 'react'

const FlagGW = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={480} width={640} id="flag-icon-css-gw" viewBox="0 0 640 480" {...props}>
      <path fill="#ce1126" d="M0 0h220v480H0z" />
      <path fill="#fcd116" d="M220 0h420v240H220z" />
      <path fill="#009e49" d="M220 240h420v240H220z" />
      <g id="b" transform="matrix(80 0 0 80 110 240)">
        <path id="a" d="M0-1v1h.5" transform="rotate(18 0 -1)" />
        <use height="100%" width="100%" xlinkHref="#a" transform="scale(-1 1)" />
      </g>
      <use height="100%" width="100%" xlinkHref="#b" transform="rotate(72 110 240)" />
      <use height="100%" width="100%" xlinkHref="#b" transform="rotate(144 110 240)" />
      <use height="100%" width="100%" xlinkHref="#b" transform="rotate(-144 110 240)" />
      <use height="100%" width="100%" xlinkHref="#b" transform="rotate(-72 110 240)" />
    </svg>
    
  );
}

export default FlagGW
