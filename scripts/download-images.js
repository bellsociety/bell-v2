const fs = require('fs')
const request = require('request')
const members = require('../src/data/members.json')

const ROOT = './src/data/memberImages'

// TODO fail gracefully when individual files fail to download?

if (!fs.existsSync(ROOT)) {
  console.log('ROOT path does not exist; creating...')
  fs.mkdirSync(ROOT, { recursive: true })
  console.log('Created ROOT directory.')
}

const getFilePath = (name, contentType) => {
  const sluggedName = name
    .toLowerCase()
    .split(' ')
    .join('-')
  const rand = (Math.random() * 10e9).toFixed(0)

  let fileEnding = ''
  if (contentType.includes('jpeg') || contentType.includes('jpg')) {
    fileEnding = 'jpg'
  } else if (contentType.includes('png')) {
    fileEnding = 'png'
  }

  return `${ROOT}/${sluggedName}-${rand}.${fileEnding}`
}

const download = function(uri, memberName, callback) {
  return request.head(uri, function(err, res, _) {
    if (err) {
      console.log('There was an error:', err.message)
      return callback(err)
    }

    const contentType = res.headers['content-type'].toLowerCase()
    const filePath = getFilePath(memberName, contentType)

    console.log(`Downloading and creating ${filePath}...`)

    request(uri)
      .pipe(fs.createWriteStream(filePath))
      .on('close', _ => callback(null, filePath))
  })
}

const promises = members.slice(0, 8).map(
  ({ name, headshotJpgUrl }) =>
    new Promise((resolve, reject) => {
      download(headshotJpgUrl, name, (err, filePath) => {
        if (err) {
          reject(err.message)
        } else {
          resolve(filePath)
        }
      })
    })
)

Promise.all(promises)
  .then(filePaths => {
    // TODO store file paths on users
    console.log('Dunzo wunzo!')
  })
  .catch(err => {
    console.log('Oh man, is a goof:', err.message)
  })
