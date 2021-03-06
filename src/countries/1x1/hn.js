import React from 'react'

const FlagHN = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-hn" viewBox="0 0 512 512" {...props}>
      <path d="M0 0h512v512H0z" fill="#0073cf" />
      <path d="M0 170.666h512v170.667H0z" fill="#fff" />
      <g id="c" transform="translate(256 256) scale(28.44446)" fill="#0073cf">
        <g id="b">
          <path id="a" d="M0-1l-.31.95.477.156z" />
          <use height="100%" width="100%" xlinkHref="#a" transform="scale(-1 1)" />
        </g>
        <use height="100%" width="100%" xlinkHref="#b" transform="rotate(72)" />
        <use height="100%" width="100%" xlinkHref="#b" transform="rotate(-72)" />
        <use height="100%" width="100%" xlinkHref="#b" transform="rotate(144)" />
        <use height="100%" width="100%" xlinkHref="#b" transform="rotate(-144)" />
      </g>
      <use height="100%" width="100%" xlinkHref="#c" transform="translate(142.223 -45.511)" />
      <use height="100%" width="100%" xlinkHref="#c" transform="translate(142.223 39.822)" />
      <use height="100%" width="100%" xlinkHref="#c" transform="translate(-142.223 -45.511)" />
      <use height="100%" width="100%" xlinkHref="#c" transform="translate(-142.223 39.822)" />
    </svg>
    
  );
}

export default FlagHN
