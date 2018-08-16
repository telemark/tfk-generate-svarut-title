module.exports = data => {
  const category = data.category || data.documentType || 'default'
  const generateTitle = require(`./lib/generators/${category}`)
  return generateTitle(data)
}
