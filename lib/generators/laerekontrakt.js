module.exports = data => {
  let title = 'Informasjonsbrev'
  if (data.documentCategory === 'kontrakt-signert') {
    title = 'Informasjonsbrev - godkjent lærekontrakt – følgebrev'
  }

  return title
}
