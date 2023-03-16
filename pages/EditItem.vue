<template>
    <div>
        <h1>Test</h1>
        <p>Test</p>
    </div>
</template>

<script>
    export default {
         props: {
    item: Object,
  },
    created() {
      // this.$store.dispatch('fetchItems')
      console.log('created')
      console.log(this.item)
    },
    }
</script>

<style lang="sass" scoped>

</style>