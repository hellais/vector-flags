import React from 'react'

const FlagCU = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-cu" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" clipPath="url(#a)">
        <path fill="#0050f0" d="M-32 0h768v512H-32z" />
        <path fill="#fff" d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z" />
        <path d="M-32 0l440.69 255.67L-32 511.01V0z" fill="#ed0000" />
        <path d="M161.75 325.47l-47.447-35.432-47.214 35.78 17.56-58.144-47.13-35.904 58.306-.5 18.084-57.97 18.472 57.836 58.305.077-46.886 36.243 17.948 58.016z" fill="#fff" />
      </g>
    </svg>
    
  );
}

export default FlagCU
