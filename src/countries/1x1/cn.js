import React from 'react'

const FlagCN = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-cn" viewBox="0 0 512 512" {...props}>
      <defs>
        <path id="a" fill="#ffde00" d="M.95-.31L-.587.81 0-1 .588.81-.952-.31z" />
      </defs>
      <path d="M0 0h512v512H0z" fill="#de2910" />
      <use xlinkHref="#a" transform="matrix(76.8 0 0 76.8 128 128)" width={30} height={20} />
      <use xlinkHref="#a" transform="matrix(-13.1584 -21.9392 21.9392 -13.1584 256 51.2)" width={30} height={20} />
      <use xlinkHref="#a" transform="rotate(-98.106 198.016 -82.078) scale(25.6)" width={30} height={20} />
      <use xlinkHref="#a" transform="matrix(7.04 -24.6272 24.6272 7.04 307.2 179.2)" width={30} height={20} />
      <use xlinkHref="#a" transform="matrix(16 -19.968 19.968 16 256 230.4)" width={30} height={20} />
    </svg>
    
  );
}

export default FlagCN