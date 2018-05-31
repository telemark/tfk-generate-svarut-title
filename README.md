[![Build Status](https://travis-ci.org/telemark/tfk-generate-svarut-title.svg?branch=master)](https://travis-ci.org/telemark/tfk-generate-svarut-title)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tfk-generate-svarut-title

Generate title for SvarUt

## Usage

```JavaScript
const generateTitle = require('tfk-generate-svarut-title')
const data = {
  category: 'agreement',
  type: 'elevpc'
}

console.log(generateTitle(data))

// => 'Avtale fra Telemark fylkeskommune' 
```

## License

[MIT](LICENSE)

![Robohash image of tfk-generate-svarut-title](https://robots.kebabstudios.party/tfk-generate-svarut-title.png "Robohash image of tfk-generate-svarut-title")