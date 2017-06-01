const phantom = require('../libs/phantom')
const parseUrl = require('../libs/query')
const resp = require('../libs/response')

module.exports = async (req, res) => {
  const params = parseUrl(req.url)
  if (!params.urlValid) {
    return resp(res, 500, 'Pls give me a vaild url. ie https://google.com/')
  }
  const data = await phantom(
    params.url,
    {
      width: params.width || '1200',
      height: params.height || '800'
    },
    params.crop
  )
  await res.setHeader('Content-Type', 'image/' + params.format || 'png')
  await res.setHeader('Cache-Control', 'public, max-age=31536000')
  return resp(res, 200, new Buffer(data, 'base64'))
}
