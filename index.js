const resolveGenerator = require('./lib/resolve-generator')

module.exports = data => {
  const generateTitle = require(`./lib/generators/${resolveGenerator(data)}`)
  return generateTitle(data)
}
