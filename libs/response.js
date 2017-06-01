const { send } = require('micro')

module.exports = async (res, code, data) => {
  return send(res, code, data)
}
