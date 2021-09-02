// export default function (context) {
//   console.log('preview.client', context, context.query, context.enablePreview)
//   // if (query.preview) {
//   //   enablePreview()
//   // }
// }
// // // export default function ({ query, enablePreview }) {
// //   export default function (abc) {
// //   debugger    
// //   if (query.preview) {
// //     enablePreview()
// //   }
// // }

export default async function ({ query, enablePreview }) {
  if (query.preview) {
    enablePreview()
  }
}