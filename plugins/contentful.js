const contentful = require('contentful')
const config = require('../.contentful.json')

const c = {
  CTF_SPACE_ID: config.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
  CTF_CPA_ACCESS_TOKEN: config.CTF_CPA_ACCESS_TOKEN,
  CTF_PERSON_ID: config.CTF_PERSON_ID,
  CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
}
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

let isLive = true

// console.log('process.env.IS_CONTENTFUL_LIVE', process.env.IS_CONTENTFUL_LIVE)
// console.log('process.client?', process.client)

// if (process.client) {
//   // console.log('contentfuljs window.location', window.location)
//   if (window && window.location.host) {
//     const urlParams = new URLSearchParams(window.location.search)
//     const preview = urlParams.get('preview')
//     if (window.location.host !== 'designdistrict.co.uk' && preview) {
//       isLive = false
//     }
//     // console.log('isLive?', isLive)
//   }
// }

// console.log('npm run dev. using cdn.contentful.com. works and preview ok locally.')
// else {
//   console.log('force contentful isLive?')
//   isLive = process.env.IS_CONTENTFUL_LIVE || false
// }

console.log('checking process.env.CONTENTFUL_PREVIEW... ', process.env.CONTENTFUL_PREVIEW)
isLive = (process.env.CONTENTFUL_PREVIEW == 'true' || process.env.CONTENTFUL_PREVIEW == true) || process.env.NODE_ENV === 'development' ? false : true
console.log('"isLive" is now:', isLive)

// console.log('force contentful preview via process.env.CONTENTFUL_PREVIEW', (process.env.CONTENTFUL_PREVIEW == 'true' || process.env.CONTENTFUL_PREVIEW == true))
// isLive = (process.env.CONTENTFUL_PREVIEW == 'true' || process.env.CONTENTFUL_PREVIEW == true) ? false : isLive

console.info('step 0: is process client?')
if (process.client) {
  console.info('step 1: is process client')
  if (window && window.location.host) {
    console.info('step 2: has window and host')
    const urlParams = new URLSearchParams(window.location.search)
    const preview = urlParams.get('preview')
    console.info('step 3: check host and url params', urlParams, preview)
    if (window.location.host !== 'designdistrict.co.uk' && preview) {
      isLive = false
      console.info('step 4: succesfully enabled preview mode on client side. isLive:', isLive)
    } else {
      console.info('step 4: check failed. isLive:', isLive)
    }
  }
}

const ACCESS_TOKEN = isLive ? c.CTF_CDA_ACCESS_TOKEN : c.CTF_CPA_ACCESS_TOKEN
const HOST = isLive ? 'cdn.contentful.com' : 'preview.contentful.com'

const contentfulConfig = {
  space: c.CTF_SPACE_ID,
  accessToken: ACCESS_TOKEN,
  host: HOST
}

if (isLive) {
  console.info('contentful client running in production mode')
} else {
  console.info('contentful client running in preview mode', contentfulConfig)
}

// export `createClient` to use it in page components
const createClient = () => {
  return contentful.createClient(contentfulConfig)
}
export { createClient }
