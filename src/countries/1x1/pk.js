import React from 'react'

const FlagPK = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-pk" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" strokeWidth="1pt" clipPath="url(#a)">
        <path fill="#0c590b" d="M-95 0h768v512H-95z" />
        <path fill="#fff" d="M-95 0H97.52v512H-95z" />
        <g fill="#fff">
          <path d="M403.702 225.4l-31.165-6.556-16.389 27.306-3.395-31.666-31.036-7.15 29.067-13.014-2.791-31.724 21.36 23.622 29.309-12.458-15.865 27.614 20.905 24.026z" />
          <path d="M415.455 306.086c-27.665 60.96-100.277 87.588-161.41 59.27-61.142-28.326-87.777-100.93-59.451-162.071 14.447-31.184 38.089-52.614 71.462-64.31-3.839 3.246-7.637 6.613-11.8 10.908-43.11 44.491-41.99 115.592 2.5 158.699 44.49 43.11 115.592 41.991 158.698-2.5z" />
        </g>
      </g>
    </svg>
    
  );
}

export default FlagPK