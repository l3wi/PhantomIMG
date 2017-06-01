const qs = require('query-string')
const up = require('url-parse')
var validator = require('validator')

const parseUrl = url => {
  return up(url)
}

const parseQueries = queries => {
  return qs.parse(queries)
}

module.exports = url => {
  const params = parseQueries(parseUrl(url).query)
  params.urlValid = validator.isURL(params.url, { require_protocol: true })
  return params
}
