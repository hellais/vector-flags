import React from 'react'

const FlagIS = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-is" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M85.43 0h486v486h-486z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="translate(-90) scale(1.0535)" strokeWidth={0}>
        <path fill="#003897" d="M0 0h675v486H0z" />
        <path d="M0 189h189V0h108v189h378v108H297v189H189V297H0V189z" fill="#fff" />
        <path d="M0 216h216V0h54v216h405v54H270v216h-54V270H0v-54z" fill="#d72828" />
      </g>
    </svg>
    
  );
}

export default FlagIS
