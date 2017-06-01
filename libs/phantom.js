// PhantomJS
// https://github.com/amir20/phantomjs-node
// Uses PhantomJS to render a page to base64 then return it.
// No require for Phantom because of 'pool'

const pool = require('./pool')

module.exports = async (url, size, crop) => {
  const image = await pool.use(async instance => {
    let image
    let status
    try {
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

      if (crop) {
        await page.property('clipRect', {
          top: 0,
          left: 0,
          width: size.width,
          height: size.height
        })
      }

      status = await page.open(url)
      image = await page.renderBase64()
    } catch (e) {
      console.log(e)
      image = ''
      status = 'Errror'
    }

    console.log('Returned page with:', status)
    return image
  })

  return image
}
