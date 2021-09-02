<template>
    <div class="py-64 bg-red-400">
        B
        <router-link :to="'/t/a'" class="underline">/t/a</router-link>
        <router-link :to="'/t/b'" class="underline">/t/b</router-link>
        <router-link :to="'/t/c'" class="underline">/t/c</router-link>
    </div>   
</template>

<script>
export default {
    name: 'test-a'
}
</script>