<template lang="pug">
  .content
    skills(
      :skills="skills"
    )
        
</template>

<script>

import skills from "./skills";
import { mapActions} from "vuex";


const data = [
  {id: 1, title: "Html", percents: 20, category: 0},
  {id: 2, title: "PHP", percents: 20, category: 1},
  {id: 3, title: "CSS", percents: 20, category: 0},
  {id: 4, title: "Node.js", percents: 20, category: 1},
  {id: 5, title: "Mongo", percents: 20, category: 1},
  {id: 6, title: "Gut", percents: 20, category: 2},
  {id: 7, title: "Gulp", percents: 20, category: 2},
];


export default {
  components: {
    skills
    // appTitle: require("./components/title").default
  },

  data() {
    return {
      skills: data 
    }
  },

  

  created() {
    this.fetchSkills();
  },

  methods: {
    ...mapActions({
      fetchSkills: "skills/fetch"
    })
  }
};
</script>



<style lang="scss" scoped>
.content {
  padding-left: 30px;
  width: 90%;
}
</style>
