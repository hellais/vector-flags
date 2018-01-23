import React from 'react'

const FlagBS = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-bs" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M56.618 26.364h480.31v480.31H56.618z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="matrix(1.066 0 0 1.067 -60.354 -28.133)">
        <path fill="#fff" d="M990.01 506.18H9.39V27.64h980.62z" />
        <path fill="#ffe900" d="M990.01 370.57H9.39V169.25h980.62z" />
        <path fill="#08ced6" d="M990.01 506.18H9.39V346.67h980.62zm0-318.89H9.39V27.78h980.62z" />
        <path d="M8.925 25.872c2.177 0 392.37 236.97 392.37 236.97L7.835 505.382 8.92 25.872z" />
      </g>
    </svg>
    
  );
}

export default FlagBS
