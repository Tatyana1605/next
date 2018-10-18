<template lang="pug">
  .skills
    .skills-title {{type.name}}
    table.skills-list
      skill-item(
        v-for="skill in skills"
        :key="skill.id"
        v-if="skill.category === type.id"
        :skill="skill"
      )
      skill-item(
        :editmode="true"
        :typeId="type.id"
      )
    
</template>


<script>
import skillItem from './skillItem';

export default {

  components: {
    skillItem
  },

  props: {
    type: {
      type: Object,
      default: () => {}
    },
    skills: {
      type: Array,
      default: () => []
    }
  }
}
</script>


<style lang="scss" scoped>
.skills-title {
  font-size: 20px;
  font-weight: 800;
  padding: 15px 0;

}
</style>
