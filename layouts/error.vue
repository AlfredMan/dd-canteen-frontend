<template>
  <div class="container error">
    <div class="py-5">
      <h3 v-if="error.statusCode === 404">
        Page not found
      </h3>
      <h3 v-else>An error occurred</h3>
      <nuxt-link to="/">&larr; return to home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style>
.error {
  min-height: 50vh
}
</style>
