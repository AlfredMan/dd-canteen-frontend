<template>
  <div class="container error">
    <div class="py-5">
      <h2 v-if="error.statusCode === 404">
        Page not found
      </h2>
      <h2 v-else>An error occurred...</h2>
      <nuxt-link to="/">&larr; return to home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  // layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style>
.error {
  min-height: 50vh
}
</style>
