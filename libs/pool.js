// Phantom Pool
// https://github.com/binded/phantom-pool
// Uses an implimentation of Generic Pool to
// handle high rate calls on resources.

const createPhantomPool = require('phantom-pool').default

const pool = () => {
  return createPhantomPool({
    max: 10, // default
    min: 2, // default
    // how long a resource can stay idle in pool before being removed
    idleTimeoutMillis: 30000, // default.
    // maximum number of times an individual resource can be reused before being destroyed; set to 0 to disable
    maxUses: 50, // default
    // function to validate an instance prior to use; see https://github.com/coopernurse/node-pool#createpool
    validator: () => Promise.resolve(true), // defaults to always resolving true
    // validate resource before borrowing; required for `maxUses and `validator`
    testOnBorrow: true, // default
    // For all opts, see opts at https://github.com/coopernurse/node-pool#createpool
    phantomArgs: [['--ignore-ssl-errors=true', '--disk-cache=true']]
  })
}

module.exports = pool()
