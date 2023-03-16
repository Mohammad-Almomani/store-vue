<template>
  <v-app dark>
    <NavBar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
              <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  created() {
    console.log('created')
    this.$store.dispatch('checkAuth')
    // console.log(this.$store.getters.getIsAuthorized)
    // setTimeout(() => {
    //   this.$store.getters.getIsAuthorized
    // }, 2000)
  },
  components: {
    NavBar,
  },
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
          {
          icon: 'mdi-apps',
          title: 'SignIn',
          to: '/auth',
        },
          {
          icon: 'mdi-apps',
          title: 'SignUp',
          to: '/auth/SignUp',
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Agents Store',
    }
  },
}
</script>
