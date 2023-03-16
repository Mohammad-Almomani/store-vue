<template>
  <div>
    <SignInForm />
  </div>
</template>

<script>
import SignInForm from '~/components/auth/SignIn'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SignIn',
  components: {
    SignInForm,
  },
  methods: {
    ...mapActions({ checkAuth: 'checkAuth' }),
    ...mapGetters({ getIsAuthorized: 'getIsAuthorized' }),
  },
  created() {
    this.checkAuth()
  },
  mounted() {
    if (this.getIsAuthorized()) {
      this.$router.push('/')
    }
  },
}
</script>

<style lang="sass" scoped></style>
