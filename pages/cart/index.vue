<template>
    <div>
        <h1>Hello from cart</h1>
    </div>
</template>

<script>
    export default {
        name: 'cart',
        created() {
    this.$store.dispatch('checkAuth')
  },
  mounted() {
    if (!this.$store.getters.getIsAuthorized) {
      this.$router.push('/')
    }
  },
    }
</script>

<style lang="sass" scoped>

</style>