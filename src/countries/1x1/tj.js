import React from 'react'

const FlagTJ = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={512} width={512} id="flag-icon-css-tj" viewBox="0 0 512 512" {...props}>
      <path fill="#060" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 0h512v365.714H0z" />
      <path fill="#c00" d="M0 0h512v146.286H0z" />
      <g transform="translate(-256) scale(.73143)" fill="#f8c300">
        <path d="M672 340.7a12.5 12.5 0 0 1 23.3 5.9v50h9.4v-50a12.5 12.5 0 0 1 23.3-5.9 29.5 29.5 0 1 0-56 0" />
        <path d="M678.7 327.65a20 20 0 0 1 21.3 9.55 20 20 0 0 1 21.3-9.55 21.5 21.5 0 0 0-42.6 0" fill="#fff" />
        <path id="a" d="M695.3 376.627a38 38 0 0 1-63.845 24.316 39.5 39.5 0 0 1-59.734 17.467c3.65 36.426 58.252 28.989 62.32-6.429 17.154 30.115 54.873 21.49 65.91-15.4z" />
        <use height="100%" width="100%" xlinkHref="#a" transform="matrix(-1 0 0 1 1400 0)" />
        <path id="b" d="M658.84 441.31c-7.618 16.446-22.845 19.271-36.164 5.995 0 0 5.354-3.783 11.086-4.826-1.075-4.574 1.13-10.902 4.235-14.324 3.258 2.227 7.804 6.689 8.96 11.874 8.03-1.04 11.883 1.282 11.883 1.282z" />
        <use height="100%" width="100%" xlinkHref="#b" transform="rotate(9.37 700 804)" />
        <use height="100%" width="100%" xlinkHref="#b" transform="rotate(18.74 700 804)" />
        <path d="M603 478a340 340 0 0 1 194 0" fill="none" stroke="#f8c300" strokeWidth={16} />
        <g transform="translate(700 380)">
          <g transform="translate(0 -140)">
            <path id="c" transform="scale(.00005)" d="M488533-158734l-790463 574305L0-513674l301930 929245-790463-574305z" />
          </g>
          <g id="d">
            <use height="100%" width="100%" xlinkHref="#c" transform="translate(-70 -121.244)" />
            <use height="100%" width="100%" xlinkHref="#c" transform="translate(-121.244 -70)" />
            <use height="100%" width="100%" xlinkHref="#c" transform="translate(-140)" />
          </g>
          <use height="100%" width="100%" xlinkHref="#d" transform="scale(-1 1)" />
        </g>
      </g>
    </svg>
    
  );
}

export default FlagTJ
