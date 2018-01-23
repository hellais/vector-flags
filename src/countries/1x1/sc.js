import React from 'react'

const FlagSC = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-sc" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M0 0h512v496.06H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="scale(1 1.0321)" strokeWidth="1pt">
        <path fill="red" d="M0 0h992.13v496.06H0z" />
        <path d="M0 496.065l992.13-165.349v165.349H0z" fill="#090" />
        <path d="M0 496.065l992.13-330.707v165.358L0 496.065z" fill="#fff" />
        <path d="M0 496.065V0h330.707L0 496.065z" fill="#009" />
        <path d="M0 496.065L330.707 0h330.707L0 496.065z" fill="#ff0" />
      </g>
    </svg>
    
  );
}

export default FlagSC
