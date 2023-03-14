<template>
    <div>
        <h1>Hello from list</h1>
    </div>
</template>

<script>
    export default {
        name: 'list',
        created() {
    this.$store.dispatch('checkAuth')
  },
  mounted() {
    if (!this.$store.getters.getIsAuthorized) {
      this.$router.push('/auth')
    }
  },
    }
</script>

<style lang="sass" scoped>

</style>