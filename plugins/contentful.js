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
const contentfulConfig = {
  space: c.CTF_SPACE_ID,
  accessToken: c.CTF_CDA_ACCESS_TOKEN,
  previewAccessToken: c.CTF_CPA_ACCESS_TOKEN
}

// export `createClient` to use it in page components
const createClient = () => {
  return contentful.createClient(contentfulConfig)
}
export { createClient }
