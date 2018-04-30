const test = require('ava')
const generateTitle = require('../../index')

test('it returns default title on empty', t => {
  const title = generateTitle({})
  t.deepEqual(title, 'Brev fra Telemark fylkeskommune', 'default ok')
})

test('it returns expected title for agreement', t => {
  const title = generateTitle({
    category: 'agreement'
  })
  t.deepEqual(title, 'Avtale fra Telemark fylkeskommune', 'agreement ok')
})
