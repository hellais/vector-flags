import React from 'react'

const FlagTZ = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={480} width={640} id="flag-icon-css-tz" viewBox="0 0 640 480" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M10 0h160v120H10z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" fillRule="evenodd" transform="matrix(4 0 0 4 -40 0)" strokeWidth="1pt">
        <path fill="#09f" d="M0 0h180v120H0z" />
        <path d="M0 0h180L0 120V0z" fill="#090" />
        <path d="M0 120h40l140-95V0h-40L0 95v25z" />
        <path d="M0 91.456L137.18 0h13.52L0 100.47v-9.014zM29.295 120l150.7-100.47v9.014L42.815 120h-13.52z" fill="#ff0" />
      </g>
    </svg>
    
  );
}

export default FlagTZ