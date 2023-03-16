<template>
  <div>
    <SignUp />
  </div>
</template>

<script>
import SignUp from '~/components/auth/SignUp'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    SignUp,
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
