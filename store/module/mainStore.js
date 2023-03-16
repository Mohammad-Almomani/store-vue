import base64 from 'base-64'
import {
  signInService,
  SignUpAction,
  postItem,
  getListedItems,
} from '../../static/services/storeServices'
const mainStore = {
  state: {
    counter: 0,
    listedItems: [],
    user: {},
    isAuthorized: false,
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
      },
    ],
  },
  actions: {
    increaseCounter({ commit }) {
      commit('increaseCounter')
    },
    async newGetListedItems({ commit }) {
      // axios.get('static/data.json').then((response) => {
      const homeListedItems = await getListedItems()
      commit('setItems', homeListedItems)
      // })
    },
    async signUp({ commit }, payload) {
      try {
        const result = await SignUpAction(payload)
        console.log(result.username)
        localStorage.setItem('token', result.token)
        localStorage.setItem(
          'capabilities',
          JSON.stringify(result.capabilities)
        )
        localStorage.setItem('userInfo', JSON.stringify(result))
        console.log(result)
        commit('setUser', result)
        this.$router.push({ path: `/` })
      } catch (e) {
        alert('Conflict')
      }
    },
    async signIn({ commit }, payload) {
      const encodedCredintial = base64.encode(
        `${payload.email}:${payload.password}`
      )
      try {
        const result = await signInService(encodedCredintial)
        localStorage.setItem('token', result.token)
        localStorage.setItem(
          'capabilities',
          JSON.stringify(result.capabilities)
        )
        localStorage.setItem('userInfo', JSON.stringify(result))
        commit('setUser', result)
        this.$router.push({ path: `/` })
      } catch (e) {
        alert('Invalid Username or Password')
      }
    },
    signOut({ commit }) {
      // just for testing
      localStorage.removeItem('token')
      localStorage.removeItem('capabilities')
      localStorage.removeItem('userInfo')
      commit('signOut')
      commit('resetItems')
      this.$router.push({ path: `/` })
    },
    checkAuth({ commit }) {
      const token = localStorage.getItem('token')
      const userInfo = localStorage.getItem('userInfo')
      if (token) {
        commit('setUser', JSON.parse(userInfo))
        // this.$router.push({ path: `/` })
      }
    },
    async listItem({ dispatch }, payload) {
      const obj = {
        item: payload,
        token: localStorage.getItem('token'),
      }
      try {
        const res = await postItem(obj)
        alert('Item Posted Successfully')
        dispatch('newGetListedItems')
      } catch (error) {
        alert('Error in Posting Item')
      }
      // commit('setItems', payload)
    },

  },
  mutations: {
    increaseCounter(state) {
      state.counter = state.counter + 1
    },
    setItems(state, homeItems) {
      state.listedItems = homeItems
    },
    setUser(state, user) {
      state.user = user
      state.isAuthorized = true
      state.items = [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-apps',
          title: 'Favorite',
          to: '/favorite',
        },
        {
          icon: 'mdi-apps',
          title: 'Cart',
          to: '/cart',
        },
        {
          icon: 'mdi-apps',
          title: 'List Item',
          to: '/listItem',
        },
      ]
    },
    resetItems(state) {
      state.items = [
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
        },
      ]
    },
    signOut(state) {
      state.user = {}
      state.isAuthorized = false
    },
  },
  getters: {
    getCounter(state) {
      return state.counter
    },
    getListedItems(state) {
      return state.listedItems
    },
    getUser(state) {
      return state.user
    },
    getIsAuthorized(state) {
      return state.isAuthorized
    },
    getItems(state) {
      return state.items
    },
    getUser (state) {
      return state.user
    }
  },
}

export default mainStore
