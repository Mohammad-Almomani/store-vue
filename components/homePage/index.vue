<template>
  <v-container class="text-center">
  <AddItemForm  v-on:get-data-event="handleGetData"  :formActive="formActive" :toggleForm="toggleForm"/>
    <h1>Listed Items</h1>
    <!-- must be logged in to add items -->
      <v-btn @click="toggleForm">Add New Item</v-btn>
    <v-text-field
      v-model="searchField"
      label="Computed Search"
      class="input-class"
    ></v-text-field>
    <v-container grid-list-md>
      <v-row :align="alignment" :justify="justify">
        <v-col v-for="(item, idx) in findShirt" :key="idx" xs6 md4>
          <ItemCard :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import ItemCard from '../reusable/ItemCard'
import AddItemForm from '../forms/AddItemForm'
// import jsonItems from '../../static/StoreItems.json'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'homePage',
  components: {
    ItemCard,
    AddItemForm
  },
  data() {
    return {
      // items: jsonItems,
      formActive: false,
      alignment: 'center',
      dense: false,
      justify: 'center',
      searchField: '',
    }
  },
  computed: {
    ...mapGetters({listedItems: 'getListedItems'}),
    findShirt() {
      console.log('test')
      return this.listedItems.filter((item) => {
        // return item.title.toLowerCase().includes(this.searchField.toLowerCase())
        // || item.description.toLowerCase().includes(this.searchField.toLowerCase())
        return (
          item.title.toLowerCase().match(this.searchField.toLowerCase()) ||
          item.description.toLowerCase().match(this.searchField.toLowerCase())
        )
      })
    },
  },
  methods: {
    ...mapActions({ getItems: 'newGetListedItems' }),
    toggleForm() {
      this.formActive = !this.formActive
    },
    handleGetData() {
      this.getItems()
    },
  },
  created() {
    this.getItems()
  },
  // mounted() {},
  // watch: {},
}
</script>

<style lang="css" scoped>
.input-class{
  max-width: 30% ;
  margin: 0 auto;
}
</style>
