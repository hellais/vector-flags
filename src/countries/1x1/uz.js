import React from 'react'

const FlagUZ = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-uz" viewBox="0 0 512 512" {...props}>
      <path fill="#1eb53a" d="M0 341.333h512V512H0z" />
      <path fill="#0099b5" d="M0 0h512v170.667H0z" />
      <path fill="#ce1126" d="M0 163.84h512v184.32H0z" />
      <path fill="#fff" d="M0 174.08h512v163.84H0z" />
      <circle cx="143.36" cy="81.92" r="61.44" fill="#fff" />
      <circle cx="163.84" cy="81.92" r="61.44" fill="#0099b5" />
      <g transform="translate(278.528 131.072) scale(2.048)" fill="#fff">
        <g id="e">
          <g id="d">
            <g id="c">
              <g id="b">
                <path id="a" d="M0-6L-1.854-.294 1 .633" />
                <use height="100%" width="100%" xlinkHref="#a" transform="scale(-1 1)" />
              </g>
              <use height="100%" width="100%" xlinkHref="#b" transform="rotate(72)" />
            </g>
            <use height="100%" width="100%" xlinkHref="#b" transform="rotate(-72)" />
            <use height="100%" width="100%" xlinkHref="#c" transform="rotate(144)" />
          </g>
          <use height="100%" width="100%" xlinkHref="#d" y={-24} />
          <use height="100%" width="100%" xlinkHref="#d" y={-48} />
        </g>
        <use height="100%" width="100%" xlinkHref="#e" x={24} />
        <use height="100%" width="100%" xlinkHref="#e" x={48} />
        <use height="100%" width="100%" xlinkHref="#d" x={-48} />
        <use height="100%" width="100%" xlinkHref="#d" x={-24} />
        <use height="100%" width="100%" xlinkHref="#d" x={-24} y={-24} />
      </g>
    </svg>
    
  );
}

export default FlagUZ
