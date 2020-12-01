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

if (process.client) {
  console.log('contentfuljs window.location', window.location)
  if (window && window.location.host) {
    const urlParams = new URLSearchParams(window.location.search)
    const preview = urlParams.get('preview')
    if (window.location.host !== 'designdistrict.co.uk' && preview) {
      isLive = false
    }
    console.log('isLive?', isLive)
  }
}

const ACCESS_TOKEN = isLive ? c.CTF_CDA_ACCESS_TOKEN : c.CTF_CPA_ACCESS_TOKEN
const HOST = isLive ? 'cdn.contentful.com' : 'preview.contentful.com'

console.log(isLive, ACCESS_TOKEN, HOST)

const contentfulConfig = {
  space: c.CTF_SPACE_ID,
  accessToken: ACCESS_TOKEN,
  host: HOST
}

// export `createClient` to use it in page components
const createClient = () => {
  return contentful.createClient(contentfulConfig)
}
export { createClient }
