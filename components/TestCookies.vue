<template>
  <div class="container">
    <div>
      <button @click="count++">{{count}}</button>
      <button @click="add">add</button>
      <button @click="remove">remove</button>
      <div class="">
        hasCookie? {{hasCookie}}
      </div>
      <div>
        document.cookie = {{documentCookie}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      hasCookie: false,
      added: false,
      documentCookie: ''
    }
  },
  mounted () {
    this.checkCookie()
  },
  methods: {
    add () {
      document.cookie = 'my_cookie=1;max-age=60'
      this.checkCookie()
    },
    remove () {
      document.cookie = 'my_cookie=;max-age=0'
      this.checkCookie()
    },
    checkCookie () {
      this.documentCookie = document.cookie
      this.hasCookie = document.cookie.indexOf('my_cookie')>-1
    }
  }
}
</script>

<style>
</style>
