<template>
  <v-container
    class="d-flex flex-column justify-content-center align-items-center form-width"
  >
    <!-- <v-sheet width="80%" class="mx-auto"> -->
    <!-- <v-form > -->
    <h1>Sign Up</h1>

    <v-card class="">
      <v-form fast-fail @submit="signUp">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="username"
          label="Username"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          :type="passwordType"
          required
        ></v-text-field>
        <v-text-field
          v-model="passwordConfirm"
          label="Confirm Password"
          :type="passwordType"
          required
        ></v-text-field>
        <v-checkbox
          label="Show Password"
          @click="
            passwordType = passwordType === 'password' ? 'text' : 'password'
          "
        >
          {{ passwordType === 'password' ? 'Show' : 'Hide' }}
        </v-checkbox>
        <v-btn variant="text" type="submit"> Sign Up </v-btn>
      </v-form>
    </v-card>
    <!-- </v-form> -->
    <!-- </v-sheet> -->
  </v-container>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      username: '',
      passwordType: 'password',
    }
  },
  computed: {},
  methods: {
    signUp(e) {
      e.preventDefault()
      const emailRegex = /\S+@\S+\.\S+/
      if (
        this.email === '' ||
        this.password === '' ||
        this.passwordConfirm === '' ||
        this.username === ''
      ) {
        alert('please fill out all fields')
        return
      }
      if (!emailRegex.test(this.email)) {
        alert('please enter a valid email')
        return
      }

      if (this.password !== this.passwordConfirm) {
        alert('passwords do not match')
        return
      }
      const obj = {
        email: this.email,
        password: this.password,
        username: this.username,
      }
      try {
        console.log(obj)
        this.$store.dispatch('signUp', obj)
      } catch (error) {
        alert('Something went wrong')
      }
      console.log('signing up')
    },
  },
  created() {
    this.$store.dispatch('checkAuth')
  },
  }
</script>

<style lang="css" scoped>
.form-width {
  width: 50%;
}
</style>
