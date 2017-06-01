// const phantom = require('phantom')
const pool = require('./pool')
const log = console.log

module.exports = async (url, size, crop) => {
  const maData = await pool.use(async instance => {
    const page = await instance.createPage()
    // Set the viewport
    await page.property('viewportSize', {
      width: size.width,
      height: size.height
    })
    // Set a Standard User Agent
    await page.setting(
      'userAgent',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    )
    // Request Resource
    await page.on('onResourceRequested', function (requestData) {
      console.log('Requesting', requestData.url)
    })

    await page.property('clipRect', {
      top: 0,
      left: 0,
      width: size.width,
      height: size.height
    })

    const status = await page.open(url)
    const image = await page.renderBase64()
    await instance.exit()

    console.log('Returned page with:', status)
    return image
  })

  return maData
}
// module.exports = async (url, size, crop) => {
//   const instance = await phantom.create(['--ignore-ssl-errors=yes'], {
//     logger: { warn: log, debug: log, error: log }
//   })
//   const page = await instance.createPage()
//   // Set the viewport
//   await page.property('viewportSize', {
//     width: size.width,
//     height: size.height
//   })
//   // Set a Standard User Agent
//   await page.setting(
//     'userAgent',
//     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
//   )
//   // Request Resource
//   await page.on('onResourceRequested', function (requestData) {
//     console.log('Requesting', requestData.url)
//   })

//   await page.property('clipRect', {
//     top: 0,
//     left: 0,
//     width: size.width,
//     height: size.height
//   })

//   const status = await page.open(url)
//   const image = await page.renderBase64()
//   await instance.exit()

//   console.log('Returned page with:', status)
//   return image
// }
