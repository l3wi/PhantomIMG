const createPhantomPool = require('phantom-pool').default

const pool = () => {
  return createPhantomPool({
    max: 10, // default
    min: 2, // default
    // how long a resource can stay idle in pool before being removed
    idleTimeoutMillis: 30000, // default.
    // maximum number of times an individual resource can be reused before being destroyed; set to 0 to disable
    maxUses: 50, // default
    // For all opts, see opts at https://github.com/coopernurse/node-pool#createpool
    phantomArgs: [['--ignore-ssl-errors=true', '--disk-cache=true']] // arguments passed to phantomjs-node directly, default is `[]`. For all opts, see https://github.com/amir20/phantomjs-node#phantom-object-api
  })
}

module.exports = pool()
