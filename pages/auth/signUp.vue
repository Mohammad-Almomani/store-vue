<template>
  <div>
    <SignUp />
  </div>
</template>

<script>
import SignUp from '~/components/auth/SignUp'
export default {
  components: {
    SignUp,
  },
  created() {
    this.$store.dispatch('checkAuth')
  },
  mounted() {
    if (this.$store.getters.getIsAuthorized) {
      this.$router.push('/')
    }
  },
}
</script>

<style lang="sass" scoped></style>
