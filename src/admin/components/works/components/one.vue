<template lang="pug">
  h1 Мои работы
    div
      one-form
      one-table
</template>


<script>
import oneForm from "./oneForm";
import oneTable from "./oneTable";

export default {
  
  components: {
    oneForm,
    oneTable
  },

  data() {
    return {
      one: []
    }
  },

}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  
  flex: 1;
}
</style>
