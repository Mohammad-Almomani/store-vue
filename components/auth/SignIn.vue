<template>
  <div>
    <v-container
      class="d-flex flex-column justify-content-center align-items-center form-width"
    >
      <h1>Sign In</h1>

      <v-card class="">
        <v-form fast-fail @submit="signIn" class="text-form">
          <v-text-field
            v-model="email"
            label="Email or Username"
            type="text"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
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
          <v-btn color="orange-lighten-2" variant="text" type="submit">
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'SignInForm',
  data() {
    return {
      email: '',
      password: '',
      passwordType: 'password',
    }
  },
  methods: {
    signIn(e) {
      e.preventDefault()
      if (this.email === '' || this.password === '') {
        alert('please fill out all fields')
        return
      }
      const obj = {
        email: this.email,
        password: this.password,
      }
      try {
        console.log(obj)
        this.$store.dispatch('signIn', obj)
      } catch (error) {
        alert('You have entered an invalid email or password')
      }
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

<style scoped>
.text-form {
  text-align: center;
}
</style>
