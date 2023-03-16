<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in getItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="getIsAuthorized"
          router
          @click="signOut"
          exact
        >
          <v-list-item-action> <v-icon>mdi-apps</v-icon></v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>signout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer />
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-vuetify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NavBar',

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Agents Store',
    }
  },
  computed: {
    ...mapGetters({ getItems: 'getItems', getIsAuthorized: 'getIsAuthorized' }),
  },
  methods: {
    ...mapActions({ checkAuth: 'checkAuth', signOut: 'signOut' }),
  },
  created() {
    console.log('created')
    this.checkAuth()
  },
}
</script>

<style lang="sass" scoped></style>
