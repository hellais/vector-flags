import React from 'react'

const FlagPS = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-ps" viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M-118 0h682.67v512H-118z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="translate(110.63) scale(.9375)">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path d="M-246 0H778.002v170.667H-246z" />
          <path fill="#fff" d="M-246 170.667H778.002v170.667H-246z" />
          <path fill="#090" d="M-246 341.334H778.002v170.667H-246z" />
          <path d="M-246 512.001l512.001-256L-246 0v512.001z" fill="red" />
        </g>
      </g>
    </svg>
    
  );
}

export default FlagPS
