import React from 'react'

const FlagIN = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-in" viewBox="0 0 512 512" {...props}>
      <path fill="#f93" d="M0 0h512v170.667H0z" />
      <path fill="#fff" d="M0 170.667h512v170.667H0z" />
      <path fill="#128807" d="M0 341.333h512V512H0z" />
      <g transform="translate(256 256) scale(3.41333)">
        <circle r={20} fill="#008" />
        <circle r="17.5" fill="#fff" />
        <circle r="3.5" fill="#008" />
        <g id="d">
          <g id="c">
            <g id="b">
              <g id="a" fill="#008">
                <circle r=".875" transform="rotate(7.5 -8.75 133.5)" />
                <path d="M0 17.5L.6 7 0 2l-.6 5L0 17.5z" />
              </g>
              <use height="100%" width="100%" xlinkHref="#a" transform="rotate(15)" />
            </g>
            <use height="100%" width="100%" xlinkHref="#b" transform="rotate(30)" />
          </g>
          <use height="100%" width="100%" xlinkHref="#c" transform="rotate(60)" />
        </g>
        <use height="100%" width="100%" xlinkHref="#d" transform="rotate(120)" />
        <use height="100%" width="100%" xlinkHref="#d" transform="rotate(-120)" />
      </g>
    </svg>
    
  );
}

export default FlagIN
