const test = require('ava')
const generateTitle = require('../../index')

test('it returns expected title for yff', t => {
  const title = generateTitle({
    documentType: 'yff'
  })
  t.deepEqual(title, 'Brev fra videregående skole', 'yff ok')
})

test('it returns expected title for yff with kontaktpersonData and no avdeling', t => {
  const title = generateTitle({
    documentType: 'yff',
    documentCategory: 'yff-bekreftelse-bedrift',
    kontaktpersonData: [
      {
        navn: 'Ulla Norakk',
        telefon: '12345678',
        avdeling: ''
      }
    ]
  })
  t.deepEqual(title, 'Bekreftelse om utplassering av elev - att: Ulla Norakk', 'yff ok')
})

test('it returns expected title for yff with kontaktpersonData and avdeling', t => {
  const title = generateTitle({
    documentType: 'yff',
    documentCategory: 'yff-bekreftelse-bedrift',
    kontaktpersonData: [
      {
        navn: 'Ulla Norakk',
        telefon: '12345678',
        avdeling: 'Fellesfiskevaskeriet'
      }
    ]
  })
  t.deepEqual(title, 'Bekreftelse om utplassering av elev - att: Ulla Norakk - Fellesfiskevaskeriet', 'yff ok')
})
