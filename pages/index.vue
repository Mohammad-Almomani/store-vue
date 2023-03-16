<template>
  <div>
    <HomePage />
  </div>
</template>

<script>
import HomePage from '~/components/homePage'
import AddItemForm from '~/components/forms/AddItemForm'
export default {
  name: 'IndexPage',

  components: {
    HomePage,
    AddItemForm,
  },
}
</script>
