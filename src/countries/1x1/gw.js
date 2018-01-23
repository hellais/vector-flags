import React from 'react'

const FlagGW = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-gw" viewBox="0 0 512 512" {...props}>
      <path fill="#ce1126" d="M0 0h160v512H0z" />
      <path fill="#fcd116" d="M160 0h352v256H160z" />
      <path fill="#009e49" d="M160 256h352v256H160z" />
      <g transform="translate(-46.175 72.761) scale(.7886)">
        <g transform="matrix(80 0 0 80 160 240)" id="b">
          <path transform="rotate(18 0 -1)" d="M0-1v1h.5" id="a" />
          <use transform="scale(-1 1)" xlinkHref="#a" width="100%" height="100%" />
        </g>
        <use transform="rotate(72 160 240)" xlinkHref="#b" width="100%" height="100%" />
        <use transform="rotate(144 160 240)" xlinkHref="#b" width="100%" height="100%" />
        <use transform="rotate(-144 160 240)" xlinkHref="#b" width="100%" height="100%" />
        <use transform="rotate(-72 160 240)" xlinkHref="#b" width="100%" height="100%" />
      </g>
    </svg>
    
  );
}

export default FlagGW
