<template lang="pug">
tr(v-if="editmode === false")
  td {{skill.title}}
  td {{skill.percent}} %
  td 
    button(type="button") Удалить

tr(v-else)
  td  
    input(
      type="text"
      placeholder="mew skill"
      v-model="newSkill.title"
    )
  td  
    input(
      type="text"
      placeholder="percent"
      v-model="newSkill.percents"
    )
    span %
  td
    button(
      type="button"
      @click="addNewSkill(newSkill)"
    ) Добавить

</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: {
    skill: {
      type: Object,
      default: () => {}

    },
    editmode: {
      type: Boolean,
      default: false
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: 0,
        category: this.type 
      }
    }
  },
  methods: {
    ...mapActions({
      addNewSkill: 'skills/add'
    })
  }
}
</script>
