import React from 'react'

const FlagGD = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-gd" viewBox="0 0 512 512" {...props}>
      <defs>
        <g id="c">
          <g id="b">
            <path transform="rotate(18 0 -1)" d="M0-1v1h.5" id="a" fill="#fcd116" />
            <use transform="scale(-1 1)" xlinkHref="#a" width="100%" height="100%" />
          </g>
          <use transform="rotate(72)" xlinkHref="#b" width="100%" height="100%" />
          <use transform="rotate(144)" xlinkHref="#b" width="100%" height="100%" />
          <use transform="rotate(-144)" xlinkHref="#b" width="100%" height="100%" />
          <use transform="rotate(-72)" xlinkHref="#b" width="100%" height="100%" />
        </g>
      </defs>
      <path fill="#ce1126" d="M0 .05h512v512H0z" />
      <path fill="#007a5e" d="M71.68 71.677h368.64v368.64H71.68z" />
      <path d="M71.68 71.73h368.64L71.68 440.37h368.64z" fill="#fcd116" />
      <circle cx="255.911" cy="256.05" r="61.44" fill="#ce1126" />
      <use height="100%" width="100%" xlinkHref="#c" transform="translate(255.911 256.05) scale(56.32)" />
      <use height="100%" width="100%" xlinkHref="#d" x={-100} transform="translate(-16.349 -.1)" />
      <use height="100%" width="100%" id="d" xlinkHref="#c" transform="translate(256 35.89) scale(33.28)" />
      <use height="100%" width="100%" xlinkHref="#d" x={100} transform="translate(16.35)" />
      <path d="M99.803 256.75c7.687 14.319 22.639 29.9 35.696 35.379.21-14.54-4.949-33.178-12.004-48.026L99.803 256.75z" fill="#ce1126" />
      <path d="M86.769 207.632c11.143 23.228-28.9 78.643 37.813 91.63-8.23-11.23-13.536-29.763-11.529-44.646 13.997 5.325 28.723 20.907 34.675 32.82 17.459-63.403-44.783-59.546-60.96-79.804z" fill="#fcd116" />
      <use transform="translate(-16.349 442.086)" x={-100} xlinkHref="#d" width="100%" height="100%" />
      <use transform="translate(256 478.076) scale(33.28)" xlinkHref="#c" width="100%" height="100%" />
      <use transform="translate(16.35 442.186)" x={100} xlinkHref="#d" width="100%" height="100%" />
    </svg>
    
  );
}

export default FlagGD
