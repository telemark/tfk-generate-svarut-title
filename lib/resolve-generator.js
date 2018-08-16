module.exports = data => {
  let category = 'default'
  if (data.category) {
    category = data.category
  }
  if (data.documentType) {
    category = data.documentType
  }
  return category
}
