<template lang="pug">
skills
  app-form
  h1 Страница обо мне
  .contents
    skills-row(
      v-for="type in types"
      :key="type.id"
      :type="type"
      :skills="skills"
    )
</template>


<script>
import skillsRow from './skillsRow';
import form from './form';




export default {
  
  components: {
    skillsRow,
    appForm: form
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      types: [
        {id: 0, name: "Frontend"},
        {id: 1, name: "Backend"},
        {id: 2, name: "Workflow"},
      ]
        
      
    }
  }
};
</script>


<style lang="scss" scoped>
//  #tab_c1 {
//    position: absolute;
//     top: 150px;
//     left: 0;
//     height: calc(100% - 150px);
//     width: 100%;
//     // background-color: rgba( #ffff,  0.15);
//     background: rgba('../img/hero.jpg', 0.15) center center/ cover no-repeat;
    
//     // opacity: 0.15;
//  }

.content {
  padding-left: 30px;
  width: 90%;
}

.contents {
  display: flex;
  justify-content: center;

  flex-flow: row wrap;
  
}
.skills { 
  flex: 1 1 650px;
}

</style>
