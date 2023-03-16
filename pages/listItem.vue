<template>
  <div>
    <h1>Hello from list</h1>
    <ListItem />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ListItem from '../components/listItem/ListItem'
export default {
  name: 'list',
  methods: {
    ...mapActions(['checkAuth' ]),
    ...mapGetters(['getIsAuthorized']),
  },
  created() {
    this.checkAuth();
  },
  mounted() {
    if (!this.getIsAuthorized()) {
      this.$router.push('/auth')
    }
  },
}
</script>

<style lang="sass" scoped></style>
