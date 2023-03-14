import axios from 'axios'
import base64 from 'base-64'
const mainStore = {
  state: {
    counter: 0,
    listedItems: [],
    user: {},
    isAuthorized: false,
    items:[
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
      }]
  },
  actions: {
    increaseCounter({ commit }) {
      commit('increaseCounter')
    },
    getItems({ commit }, items) {
      // axios.get('static/data.json').then((response) => {
        commit('setItems', items)
        console.log(items)
      // })
    },
    signUp({commit}, payload) {
      try {
        axios
          .post(`${process.env.BACKENDURL}/signup`, payload)
          .then((res) => {
            console.log(res.data.username);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("capabilities", JSON.stringify(res.data.capabilities));
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            console.log(res.data);
            commit("setUser", res.data);
            this.$router.push({ path: `/` })
          }).catch((e) => alert('User already exists'));
          // .catch((e) => dispatch({ type: actionType.FAILED_SIGNUP }));
      } catch (e) {
        // dispatch({ type: actionType.FAILED_SIGNUP });
      }
    },
    signIn ({commit}, payload) {
      console.log(payload.email)
      console.log(payload.password)
      const encodedCredintial = base64.encode(
        `${payload.email}:${payload.password}`
      );
      console.log(encodedCredintial)
      try {
        axios
          .post(
            `${process.env.BACKENDURL}/signin`,
            {},
            {
              headers: {
                Authorization: `Basic ${encodedCredintial}`,
              },
            }
          )
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("capabilities", JSON.stringify(res.data.capabilities));
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            console.log(res.data);
            commit("setUser", res.data);
            this.$router.push({ path: `/` })
          })
          .catch((err) =>  alert("Invalid Username or Password"));
      } catch (e) {
        alert("Invalid Username or Password");
      }
    },
    signOut({ commit }) {
      localStorage.removeItem("token");
      localStorage.removeItem("capabilities");
      localStorage.removeItem("userInfo");
      commit("signOut");
      commit("resetItems");
      this.$router.push({ path: `/` })
    },
    checkAuth({ commit }) {
      const token = localStorage.getItem("token");
      const userInfo = localStorage.getItem("userInfo");
      if (token) {
        commit("setUser", JSON.parse(userInfo));
        // this.$router.push({ path: `/` })
      }
    },
  },
  mutations: {
    increaseCounter(state) {
      state.counter = state.counter + 1
    },
    setItems(state, items) {
      state.listedItems = items
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
        }]
    },
    signOut(state) {
      state.user = {}
      state.isAuthorized = false
    }
        
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
    }
  },
}

export default mainStore
