import React from 'react'

const FlagGG = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={480} width={640} id="flag-icon-css-gg" viewBox="0 0 640 480" {...props}>
      <path d="M0 0h640v480H0z" fill="#fff" />
      <path d="M256 0h128v480H256z" fill="#e8112d" />
      <path d="M0 176h640v128H0z" fill="#e8112d" />
      <path id="a" d="M109.991 286.667l23.342-23.343h210.01v-46.666h-210.01l-23.342-23.325z" fill="#f9dd16" />
      <use xlinkHref="#a" transform="rotate(90 320 240)" height={24} width={36} />
      <use xlinkHref="#a" transform="rotate(-90 320 240)" height={24} width={36} />
      <use xlinkHref="#a" transform="rotate(180 320 240)" height={24} width={36} />
    </svg>
    
  );
}

export default FlagGG
