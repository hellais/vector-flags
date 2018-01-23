import React from 'react'

const FlagBH = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-bh" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fill="gray" d="M119.03-196.66h708.66V512H119.03z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)" transform="translate(-86 142.09) scale(.7225)" strokeWidth="1pt">
        <path fill="#e10011" d="M0-196.66h1063V512H0z" />
        <path d="M216.66 511.66L0 512v-708.66l215.64.113 139.14 44.743-138.12 43.614 138.12 44.968-138.12 43.615L354.78 25.36 216.66 68.976l138.12 44.968-138.12 43.615 138.12 44.97-138.12 43.613 138.12 44.97-138.12 43.614 138.12 44.968-138.12 43.615 138.12 44.968-138.12 43.615" fill="#fff" />
      </g>
    </svg>
    
  );
}

export default FlagBH
