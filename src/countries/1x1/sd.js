import React from 'react'

const FlagSD = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-sd" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M0 0h496.06v496.06H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="scale(1.0321)" strokeWidth="1pt">
        <path d="M0 330.7h992.13v165.37H0z" />
        <path fill="#fff" d="M0 165.33h992.13V330.7H0z" />
        <path fill="red" d="M0 0h992.86v165.37H0z" />
        <path d="M0 0v496.06l330.7-248.03L0 0z" fill="#009a00" />
      </g>
    </svg>
    
  );
}

export default FlagSD
