const fs = require('fs')
const path = require('path')
const HTMLtoJSX = require('htmltojsx')
const jsdom = require('jsdom-no-contextify')

const svgConverter = new HTMLtoJSX({ createClass: false })

const convertSvg = (svgContent) => {
  return new Promise((resolve, reject) => {
    jsdom.env(svgContent, (err, window) => {
      const body = window.document.getElementsByTagName('body')[0]

      let width = '512'
      let height = '512'

      if (body.firstChild.hasAttribute('width')) {
        width = body.firstChild.getAttribute('width')
      }
      if (body.firstChild.hasAttribute('height')) {
        height = body.firstChild.getAttribute('height')
      }

      let viewBox = `0 0 ${width} ${height}`
      if(!body.firstChild.hasAttribute('viewBox')) {
        body.firstChild.setAttribute('viewBox', viewBox)
      } else {
        viewBox = body.firstChild.getAttribute('viewBox')
      }

      // This is a placeholder for supporting retrieving props
      body.firstChild.setAttribute(':props:', '')

      // Convert the manipulated SVG to react JSX
      svgContent = svgConverter.convert(body.innerHTML)

      // We replace the :props: marker with the react dot expansion
      svgContent = svgContent.replace(/:props:/g, '{...props}')

      resolve(svgContent)
    })
  })
}

const wrapSvgInComponent = (svgContent, componentName) => {
  return `import React from 'react'

const ${componentName} = (props) => {
  return (
${svgContent.split('\n').map(line => `    ${line}`).join('\n')}
  );
}

export default ${componentName}
`
}

const makeFlagComponent = (componentName, srcPath, dstPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(srcPath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
        return
      }

      convertSvg(data)
      .then((svgContent) => {
        componentContent = wrapSvgInComponent(svgContent, componentName)
        fs.writeFile(dstPath, componentContent, (err) => {
          if (err) {
            reject(err)
            return
          }
          resolve(dstPath)
        })
      })
    })
  })
}

const squareCountryFlags = path.join(
  __dirname,
  '..',
  'node_modules',
  'flag-icon-css',
  'flags',
  '1x1'
)
const dstSquare = path.join(__dirname, '..', 'src', 'countries', '1x1')
const rectCountryFlags = path.join(
  __dirname,
  '..',
  'node_modules',
  'flag-icon-css',
  'flags',
  '4x3'
)
const dstRect = path.join(__dirname, '..', 'src', 'countries', '4x3')

const processDirectory = (srcDir, dstDir) => {
  fs.readdir(squareCountryFlags, (err, files) => {
    files.forEach((filename) => {
      let filePath = path.join(srcDir, filename)
      const countryCode = filename.split('.svg')[0]
      const componentName = `Flag${countryCode.toUpperCase().replace('-', '')}`
      const dstPath = path.join(dstDir, countryCode + '.js')
      makeFlagComponent(componentName, filePath, dstPath)
      .then((dstPath) => {
        console.log('+ written to ' + dstPath)
      })
      .catch((err) => {
        console.error('+ failed to write to' + dstPath, err)
      })
    })
  })
}

const main = async () => {
  processDirectory(squareCountryFlags, dstSquare)
  processDirectory(rectCountryFlags, dstRect)
}

main()
