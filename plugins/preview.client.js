export default function ({ query, enablePreview }) {
  console.log('query from preview.client.js', query, enablePreview)
  if (query.preview) {
    enablePreview()
  }
}
// // export default function ({ query, enablePreview }) {
//   export default function (abc) {
//   debugger    
//   if (query.preview) {
//     enablePreview()
//   }
// }
