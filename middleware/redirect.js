const redirects = require('./redirects.json') // update to your file path

export default function (context) {
  // console.log(context)
  // debugger
  // find the redirect if it exists where the from === the requested url
  const redirect = redirects.find(r => r.from === context.route.path)

  // If it exists, redirect the page with a 301 response else carry on
  if (redirect) {
    // res.writeHead(301, { Location: redirect.to })
    // res.end()
    console.log('redirect', redirect.from, redirect.to)
    return context.redirect(redirect.to);

  } else {
    return
    // res.end()
    // next()
  }
}
