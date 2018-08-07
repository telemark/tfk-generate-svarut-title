function repackKontaktPerson (lines) {
  let kontaktperson = []
  lines.forEach(line => {
    kontaktperson.push(`${line.navn}${line.avdeling && line.avdeling !== '' ? ' - ' : ''}${line.avdeling || ''}`)
  })
  return ` - att: ${kontaktperson.join(', ')}`
}

module.exports = data => {
  let title = 'Brev fra videregående skole'
  if (data.documentCategory === 'yff-bekreftelse') {
    title = 'Bekreftelse om utplassering hos virksomhet'
  } else if (data.documentCategory === 'yff-bekreftelse-bedrift') {
    title = `Bekreftelse om utplassering av elev${data.kontaktpersonData ? repackKontaktPerson(data.kontaktpersonData) : ''}`
  } else if (data.documentCategory === 'yff-tilbakemelding') {
    title = 'Tilbakemelding etter utplassering hos virksomhet'
  } else if (data.documentCategory === 'yff-lokalplan') {
    title = 'Oppdatert lokal læreplan'
  }
  return title
}
