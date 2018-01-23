import React from 'react'

const FlagEU = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-eu" viewBox="0 0 512 512" {...props}>
      <defs>
        <g id="d">
          <g id="b">
            <path d="M0-1l-.31.95.477.156z" id="a" />
            <use transform="scale(-1 1)" xlinkHref="#a" />
          </g>
          <g id="c">
            <use transform="rotate(72)" xlinkHref="#b" />
            <use transform="rotate(144)" xlinkHref="#b" />
          </g>
          <use transform="scale(-1 1)" xlinkHref="#c" />
        </g>
      </defs>
      <path fill="#039" d="M0 0h512v512H0z" />
      <g transform="translate(256 258.414) scale(25.28395)" fill="#fc0">
        <use height="100%" width="100%" xlinkHref="#d" y={-6} />
        <use height="100%" width="100%" xlinkHref="#d" y={6} />
        <g id="e">
          <use height="100%" width="100%" xlinkHref="#d" x={-6} />
          <use height="100%" width="100%" xlinkHref="#d" transform="rotate(-144 -2.344 -2.11)" />
          <use height="100%" width="100%" xlinkHref="#d" transform="rotate(144 -2.11 -2.344)" />
          <use height="100%" width="100%" xlinkHref="#d" transform="rotate(72 -4.663 -2.076)" />
          <use height="100%" width="100%" xlinkHref="#d" transform="rotate(72 -5.076 .534)" />
        </g>
        <use height="100%" width="100%" xlinkHref="#e" transform="scale(-1 1)" />
      </g>
    </svg>
    
  );
}

export default FlagEU
