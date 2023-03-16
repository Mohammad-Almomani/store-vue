<template>
  <div>
    <h1>Hello from list</h1>
    <v-text-field v-model="title" label="Title" />
    <v-text-field v-model="price" label="Price" />
    <v-text-field v-model="description" label="Description" />
    <v-text-field v-model="imgURL" label="Image URL" />
    <!-- <v-text-field v-model="category" label="Category" /> -->
    <v-btn @click="sendRequest">Submit</v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'listItem',
  props: {},
  data() {
    return {
      title: '',
      price: '',
      description: '',
      imgURL: '',
      category: ['other'],
    }
  },
  computed: {
    ...mapGetters(['getIsAuthorized', 'getUser']),
  },
  methods: {
    ...mapActions(['checkAuth', 'listItem']),
    sendRequest() {
      this.listItem({
        title: this.title,
        price: +this.price,
        description: this.description,
        imgURL:
          this.imgURL ||
          'https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg',
        category: this.category,
        username: this.getUser.username,
        userID: this.getUser.id,
      })
    },
  },
  created() {},
  mounted() {},
}
</script>

<style lang="sass" scoped></style>
