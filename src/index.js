import React from 'react'

import { isSupportedCountryCode } from './countries'

const Flag = ({size, circle, square, countryCode}) => {
  let props = {}
  let flagEl
  if (!size) {
    size = 100
  }

  props.width = size
  props.height = size/4*3
  if (coutryCode) {
    countryCode = countryCode.toLowerCase()
    if (!isSupportedCountryCode(countryCode)) {
      throw Error('Invalid country code')
    }
    flagEl = require('./countries/4x3/' + countryCode).default
    if (square === true) {
      props.height = size
      flagEl = require('./countries/1x1/' + countryCode).default
    }
  }
  if (!flagEl) {
    throw Error('Could not detect an appropriate element')
  }
  return React.createElement(flagEl, props)
}

export default Flag
