const fs = require('fs')
const mkdirp = require('mkdirp')
const getDirName = require('path').dirname
const readline = require('readline')
const { google } = require('googleapis')

const { GOOGLE_MEMBER_SPREADSHEET_ID, GOOGLE_NEWS_SPREADSHEET_ID } = process.env
const VERSION = 'v4'
const JSON_MEMBERS_FILE_PATH = 'src/data/members.json'
const JSON_NEWS_FILE_PATH = 'src/data/news.json'
const IMAGE_LABEL = 'headshotJpgUrl'

if (!GOOGLE_MEMBER_SPREADSHEET_ID) {
  throw new Error('GOOGLE_MEMBER_SPREADSHEET_ID not in env')
}

if (!GOOGLE_NEWS_SPREADSHEET_ID) {
  throw new Error('GOOGLE_NEWS_SPREADSHEET_ID not in env')
}

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json'

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err)
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), fetchAndWriteData)
})

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  )

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback)
    oAuth2Client.setCredentials(JSON.parse(token))
    callback(oAuth2Client)
  })
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  })
  console.log('Authorize this app by visiting this url:', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  rl.question('Enter the code from that page here: ', code => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err)
        return console.error('Error while trying to retrieve access token', err)
      oAuth2Client.setCredentials(token)
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
        if (err) return console.error(err)
        console.log('Token stored to', TOKEN_PATH)
      })
      callback(oAuth2Client)
    })
  })
}

async function fetchSheetNames(sheets, spreadsheet_id) {
  console.log('Fetching sheet names')
  return sheets.spreadsheets
    .get({
      spreadsheetId: spreadsheet_id,
    })
    .then(response => {
      const { sheets: sheetData } = response.data
      const sheetNames = sheetData.map(({ properties }) => properties.title)
      return sheetNames
    })
    .catch(err => {
      throw new Error('Error: ' + err.message)
    })
}

function cleanImgUrl(url = '') {
  if (!url) return ''
  if (url.startsWith('https://imgur.com/a/')) {
    const imgurId = url.substring(20).split('/')[0]
    return `https://i.imgur.com/${imgurId}.jpg`
  } else if (url.startsWith('https://imgur.com/')) {
    const imgurId = url.substring(18).split('/')[0]
    return `https://i.imgur.com/${imgurId}.jpg`
  }

  return url
}

async function fetchDataForSheet(sheets, name, id) {
  console.log('Fetching data for sheet:', name)
  return sheets.spreadsheets.values
    .get({
      spreadsheetId: id,
      range: `${name}`,
    })
    .then(
      function(res) {
        const data = res.data.values

        // Pull out column names
        // Convert from snake_case to camelCase
        const cols = data[0].map(colName =>
          colName
            .split('_')
            .map((v, idx) => {
              if (idx === 0) return v
              const firstChar = v.charAt(0).toUpperCase()
              return `${firstChar}${v.substring(1)}`
            })
            .join('')
        )
        const rows = data.slice(1)
        return rows.map(arr => {
          const obj = {}
          arr.forEach((item, idx) => {
            const label = cols[idx]
            if (label === IMAGE_LABEL) {
              obj[label] = cleanImgUrl(item)
            } else {
              obj[label] = item
            }
          })
          return obj
        })
      },
      function(res) {
        throw new Error('Error: ' + res.result.error.message)
      }
    )
}

async function writeData(data, file_path) {
  const json = JSON.stringify(data)
  return mkdirp(getDirName(file_path), function(err) {
    if (err) return cb(err)
    fs.writeFile(file_path, json, err => {
      if (err) throw new Error(err.message)
      console.log('Successfully wrote JSON to file')
      return
    })
  })
}

/**
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function fetchAndWriteData(auth) {
  console.log('Pulling data from Google Sheets')
  const sheets = google.sheets({ version: VERSION, auth })
  const memberSheetNames = await fetchSheetNames(
    sheets,
    GOOGLE_MEMBER_SPREADSHEET_ID
  )
  const newsSheetNames = await fetchSheetNames(
    sheets,
    GOOGLE_NEWS_SPREADSHEET_ID
  )
  console.log('Member sheet names:', memberSheetNames)
  console.log('News sheet names:', newsSheetNames)

  // Pull the data for each sheet and flatten together the results
  const memberData = (await Promise.all(
    memberSheetNames.map(name =>
      fetchDataForSheet(sheets, name, GOOGLE_MEMBER_SPREADSHEET_ID)
    )
  )).reduce((newArr, aggArr) => aggArr.concat(newArr))
  const newsData = (await Promise.all(
    newsSheetNames.map(name =>
      fetchDataForSheet(sheets, name, GOOGLE_NEWS_SPREADSHEET_ID)
    )
  )).reduce((newArr, aggArr) => aggArr.concat(newArr))
  console.log('Finished pulling all data')

  await writeData(memberData, JSON_MEMBERS_FILE_PATH)
  await writeData(newsData, JSON_NEWS_FILE_PATH)
  return
}
