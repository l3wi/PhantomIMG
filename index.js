// Import Functions
const capturePage = require('./functions/capturePage')

const handleRequests = async (req, res) => {
  await capturePage(req, res)
}

module.exports = async (req, res) => await handleRequests(req, res)
