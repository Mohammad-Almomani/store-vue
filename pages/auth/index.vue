<template>
  <div>
    <SignInForm />
  </div>
</template>

<script>
import SignInForm from '~/components/auth/SignIn'
export default {
  name: 'SignIn',
  components: {
    SignInForm,
  },
  created() {
    this.$store.dispatch('checkAuth')
  },
  mounted() {
    if(this.$store.getters.getIsAuthorized) {
      this.$router.push('/')
    }
  },
}
</script>

<style lang="sass" scoped></style>
