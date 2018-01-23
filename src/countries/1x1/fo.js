import React from 'react'

const FlagFO = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={512} width={512} id="flag-icon-css-fo" viewBox="0 0 512 512" {...props}>
      <defs>
        <clipPath id="a">
          <path fillOpacity=".67" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" fillRule="evenodd" strokeWidth={0}>
        <path fill="#fff" d="M-78.015 0h708.18v512h-708.18z" />
        <path d="M-75.9 199.11h198.29V0H235.7v199.11h396.58v113.78H235.7V512H122.39V312.89H-75.9V199.11z" fill="#003897" />
        <path d="M-75.9 227.56h226.62V0h56.653v227.56h424.91v56.89h-424.91v227.56H150.72V284.45H-75.9v-56.89z" fill="#d72828" />
      </g>
    </svg>
    
  );
}

export default FlagFO
