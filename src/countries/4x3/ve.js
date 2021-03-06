import React from 'react'

const FlagVE = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={480} width={640} id="flag-icon-css-ve" viewBox="0 0 640 480" {...props}>
      <defs>
        <g id="d" transform="translate(0 -36)">
          <g id="c">
            <g id="b">
              <path d="M0-5L-1.545-.245l2.853.927z" id="a" fill="#fff" />
              <use xlinkHref="#a" transform="scale(-1 1)" width={180} height={120} />
            </g>
            <use xlinkHref="#b" transform="rotate(72)" width={180} height={120} />
          </g>
          <use xlinkHref="#b" transform="rotate(-72)" width={180} height={120} />
          <use xlinkHref="#c" transform="rotate(144)" width={180} height={120} />
        </g>
      </defs>
      <path d="M0 0h640v480H0z" fill="#cf142b" />
      <path d="M0 0h640v320H0z" fill="#00247d" />
      <path d="M0 0h640v160H0z" fill="#fc0" />
      <g id="f" transform="matrix(4 0 0 4 320 336)">
        <g id="e">
          <use height={120} width={180} transform="rotate(10)" xlinkHref="#d" />
          <use height={120} width={180} transform="rotate(30)" xlinkHref="#d" />
        </g>
        <use height={120} width={180} transform="rotate(40)" xlinkHref="#e" />
      </g>
      <use height={120} width={180} transform="rotate(-80 320 336)" xlinkHref="#f" />
    </svg>
    
  );
}

export default FlagVE
