<template>
  <div>
    <v-dialog
      transition="dialog-bottom-transition"
      width="50%"
      v-model="formVisible"
    >
      <template class="bg-gray">
        <v-card>
          <v-toolbar>AddItem</v-toolbar>
          <v-form @submit="sendRequest">
            <v-text-field v-model="title" label="Title" />
            <v-text-field v-model="price" label="Price" />
            <v-text-field v-model="description" label="Description" />
            <v-text-field v-model="imgURL" label="Image URL" />
            <!-- <v-text-field v-model="category" label="Category" /> -->
            <v-btn type="submit">Submit</v-btn>
            <v-btn @click="closeDialog">Cancel</v-btn>
          </v-form>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddItemForm',
  props: {
    formActive: Boolean,
    toggleForm: Function,
  },
  data() {
    return {
      title: '',
      price: '',
      description: '',
      imgURL: '',
      category: ['other'],
      formVisible: this.formActive,
    }
  },
  methods: {
    async sendRequest(e) {
      e.preventDefault()
      try {
        console.log('sendRequest')
        const obj = {
          title: this.title,
          price: +this.price,
          description: this.description,
          imgURL:
            this.imgURL ||
            'https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg',
          category: this.category,
          username: 'm',
          userID: 1,
        }
        await this.$axios.post('/post', obj, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        // .then((res) => {
        alert('Item added successfully')
        e.target.reset()
        this.title = ''
        this.price = ''
        this.description = ''
        this.imgURL = ''
        // this.$store.dispatch('newGetListedItems')
        this.$emit('get-data-event')
        this.toggleForm()
        console.log(res)
        // })
        // .catch((err) => {
        //   console.log(err)
        //   alert('Error creating item')
        // })
      } catch (error) {
        // alert('Error creating item')
        console.log(error)
      }
    },
    closeDialog() {
      this.formVisible = false
      this.toggleForm()
    },
  },
  watch: {
    formActive(newVal) {
      this.formVisible = newVal
    },
  },
}
</script>

<style lang="sass" scoped></style>
