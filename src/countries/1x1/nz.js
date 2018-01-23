import React from 'react'

const FlagNZ = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-nz" viewBox="0 0 512 512" {...props}>
      <defs>
        <g id="b">
          <g id="a">
            <path transform="translate(0 -.325)" d="M0 0v.5L1 0z" />
            <path d="M0 0v-.5L1 0z" transform="rotate(-36 .5 -.162)" />
          </g>
          <use xlinkHref="#a" transform="scale(-1 1)" />
          <use xlinkHref="#a" transform="rotate(72 0 0)" />
          <use xlinkHref="#a" transform="rotate(-72 0 0)" />
          <use xlinkHref="#a" transform="scale(-1 1) rotate(72)" />
        </g>
        <clipPath id="c">
          <path d="M0 0h600v300H0z" />
        </clipPath>
        <clipPath id="d">
          <path d="M0 0l300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z" />
        </clipPath>
      </defs>
      <path fillRule="evenodd" fill="#00247d" d="M.004 0h512v512h-512z" />
      <g transform="translate(-148.654 134.473) scale(.60566)">
        <use fill="#fff" height="100%" width="100%" xlinkHref="#b" transform="matrix(45.4 0 0 45.4 900 120)" />
        <use fill="#cc142b" height="100%" width="100%" xlinkHref="#b" transform="matrix(30 0 0 30 900 120)" />
      </g>
      <g transform="rotate(82 393.421 127.092) scale(.60566)">
        <use fill="#fff" height="100%" width="100%" xlinkHref="#b" transform="rotate(-82 519.022 -457.666) scale(40.4)" />
        <use fill="#cc142b" height="100%" width="100%" xlinkHref="#b" transform="rotate(-82 519.022 -457.666) scale(25)" />
      </g>
      <g transform="rotate(82 393.421 127.092) scale(.60566)">
        <use fill="#fff" height="100%" width="100%" xlinkHref="#b" transform="rotate(-82 668.57 -327.666) scale(45.4)" />
        <use fill="#cc142b" height="100%" width="100%" xlinkHref="#b" transform="rotate(-82 668.57 -327.666) scale(30)" />
      </g>
      <g transform="translate(-148.654 134.473) scale(.60566)">
        <use fill="#fff" height="100%" width="100%" xlinkHref="#b" transform="matrix(50.4 0 0 50.4 900 480)" />
        <use fill="#cc142b" height="100%" width="100%" xlinkHref="#b" transform="matrix(35 0 0 35 900 480)" />
      </g>
      <path transform="matrix(.52004 0 0 .78924 .002 0)" d="M0 0l600 300M0 300L600 0" clipPath="url(#c)" stroke="#fff" strokeWidth={60} />
      <path transform="matrix(.52004 0 0 .78924 .002 0)" d="M0 0l600 300M0 300L600 0" clipPath="url(#d)" stroke="#cc142b" strokeWidth={40} />
      <path style={{lineHeight: 'normal', textIndent: 0, textAlign: 'start', textDecorationLine: 'none', textDecorationStyle: 'solid', textDecorationColor: '#000', textTransform: 'none', blockProgression: 'tb', isolation: 'auto', mixBlendMode: 'normal'}} clipPath="url(#c)" d="M125.674-.004v88.049H-.06v60.682h125.733v88.046h60.681v-88.046h125.733V88.045H186.355V-.004h-60.681z" color="#000" fontWeight={400} fontFamily="sans-serif" white-space="normal" overflow="visible" fill="#fff" />
      <path style={{lineHeight: 'normal', textIndent: 0, textAlign: 'start', textDecorationLine: 'none', textDecorationStyle: 'solid', textDecorationColor: '#000', textTransform: 'none', blockProgression: 'tb', isolation: 'auto', mixBlendMode: 'normal'}} d="M137.81.002v100.18H-.058v36.408h137.87v100.18h36.408V136.59h137.869v-36.408h-137.87V.002h-36.407z" color="#000" fontWeight={400} fontFamily="sans-serif" white-space="normal" overflow="visible" fill="#cc142b" />
    </svg>
    
  );
}

export default FlagNZ
