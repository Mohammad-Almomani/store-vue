<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title> {{ item.title }} </v-card-title>
    <v-img :src="item.imgURL" height="200px" @click="toggleShow" cover></v-img>
    <v-card-subtitle> {{ item.description }} </v-card-subtitle>
    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text" @click="toggleShow">
        Learn More
      </v-btn>
    </v-card-actions>
    <CardModal :item="item" :isActive="isActive" :toggleShow="toggleShow" />
  </v-card>
</template>

<script>
import CardModal from './CardModal.vue'
export default {
  name: 'ItemCard',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleShow() {
      this.isActive = !this.isActive
    },
  },
  props: {
    item: Object,
  },
  components: {
    CardModal,
  },
}
</script>

<style lang="sass" scoped></style>
