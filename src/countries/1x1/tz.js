import React from 'react'

const FlagTZ = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-tz" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M102.87 0h496.06v496.06H102.87z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="translate(-106.17) scale(1.0321)">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#09f" d="M0 0h744.102v496.068H0z" />
          <path d="M0 0h744.102L0 496.068V0z" fill="#090" />
          <path d="M0 496.068h165.356l578.746-392.72V0H578.746L0 392.72v103.348z" />
          <path d="M0 378.07L567.088 0h55.89L0 415.333V378.07zm121.103 117.998L744.082 80.735v37.263l-567.089 378.07H121.1z" fill="#ff0" />
        </g>
      </g>
    </svg>
    
  );
}

export default FlagTZ
