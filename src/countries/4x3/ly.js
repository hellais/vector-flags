import React from 'react'

const FlagLY = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-ly" viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="a">
          <path d="M166.67-20h666.67v500H166.67z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(.96 0 0 .96 -160 19.2)">
        <path fill="#239e46" d="M0-20h1000v500H0z" />
        <path d="M0-20h1000v375H0z" />
        <path fill="#e70013" d="M0-20h1000v125H0z" />
        <path d="M544.2 185.8a54.3 54.3 0 1 0 0 88.4 62.5 62.5 0 1 1 0-88.4M530.4 230l84.1-27.3-52 71.5v-88.4l52 71.5z" fill="#fff" />
      </g>
    </svg>
    
  );
}

export default FlagLY