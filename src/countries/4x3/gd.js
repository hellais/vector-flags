import React from 'react'

const FlagGD = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={480} width={640} id="flag-icon-css-gd" viewBox="0 0 640 480" {...props}>
      <defs>
        <g id="c">
          <g id="b">
            <path fill="#fcd116" transform="rotate(18 0 -1)" d="M0-1v1h.5" id="a" />
            <use transform="scale(-1 1)" xlinkHref="#a" />
          </g>
          <use transform="rotate(72)" xlinkHref="#b" />
          <use transform="rotate(144)" xlinkHref="#b" />
          <use transform="rotate(216)" xlinkHref="#b" />
          <use transform="rotate(288)" xlinkHref="#b" />
        </g>
      </defs>
      <path fill="#ce1126" d="M0 .05h640v480H0z" />
      <path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z" />
      <path d="M67.2 67.25h505.6L67.2 412.85h505.6z" fill="#fcd116" />
      <circle cx="319.917" cy="240.05" r="57.6" fill="#ce1126" />
      <use height="100%" width="100%" xlinkHref="#c" transform="matrix(52.8 0 0 52.8 319.917 240.05)" />
      <use height="100%" width="100%" xlinkHref="#d" x={-100} transform="translate(-30.327)" />
      <use height="100%" width="100%" id="d" xlinkHref="#c" transform="matrix(31.2 0 0 31.2 320 33.65)" />
      <use height="100%" width="100%" xlinkHref="#d" x={100} transform="translate(30.327)" />
      <path d="M102.315 240.706c7.206 13.424 21.224 28.032 33.466 33.168.196-13.632-4.64-31.104-11.255-45.024l-22.21 11.856z" fill="#ce1126" />
      <path d="M90.096 194.658c10.446 21.776-27.093 73.728 35.45 85.904-7.716-10.528-12.69-27.904-10.809-41.856 13.122 4.992 26.928 19.6 32.508 30.768 16.368-59.44-41.984-55.824-57.15-74.816z" fill="#fcd116" />
      <use transform="translate(-30.327 414.55)" x={-100} xlinkHref="#d" width="100%" height="100%" />
      <use transform="matrix(31.2 0 0 31.2 320 448.2)" xlinkHref="#c" width="100%" height="100%" />
      <use transform="translate(30.327 414.55)" x={100} xlinkHref="#d" width="100%" height="100%" />
    </svg>
    
  );
}

export default FlagGD
