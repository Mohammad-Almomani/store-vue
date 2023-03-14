<template>
  <div class="text-center">
    <h1>Listed Items</h1>
    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12 md12 :justify="justify">
          <v-row :align="alignment" :justify="justify">
            <v-flex v-for="(item, idx) in items" :key="idx" xs6 md4>
              <ItemCard :item="item" />
            </v-flex>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ItemCard from '../reusable/ItemCard'
import jsonItems from '../../static/StoreItems.json'
export default {
  name: 'homePage',
  data() {
    return {
      items: jsonItems,
       alignment: 'center',
      dense: false,
      justify: 'center',
    }
  },
  components: {
    ItemCard,
  },
  created() {
    this.$store.dispatch('getItems', this.items)
  },
}
</script>

<style lang="sass" scoped></style>
