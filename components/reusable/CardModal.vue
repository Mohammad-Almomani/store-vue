<template>
  <v-dialog
    transition="dialog-bottom-transition"
    width="auto"
    v-model="dialogVisible"
  >
    <template>
      <v-card class="mx-auto" max-width="344">
        <v-toolbar :title="item.title"> {{ item.title }} </v-toolbar>
        <!-- <v-card-title> {{ item.title }} </v-card-title> -->
        <v-img :src="item.imgURL" height="200px" cover></v-img>
        <v-card-subtitle> {{ item.description }} </v-card-subtitle>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    toggleShow: Function,
    item: Object,
  },
  data() {
    return {
      dialogVisible: this.isActive,
      
    }
  },
  methods: {
    closeDialog() {
        this.dialogVisible = false;
        this.toggleShow();
      },
  },
   watch: {
      isActive(newVal) {
        this.dialogVisible = newVal;
      },
   },
  // computed: {
  //   ModalShow() {
  //     get() {
  //       return this.isActive
  //     }
  //     set() {
  //       this.isActive = !this.isActive
  //     }
  //   }
  // }
}
</script>
