<template lang="pug">
  #root
    .header
      app-header
    .tabs
      app-tabs
    .content
      skills(
        :skills="skills"
      )
</template>

<script>

import AppHeader from "./components/AppHeader";
import AppTabs from "./components/AppTabs";
import skills from "./components/skills";
import { mapActions, mapState} from "vuex";


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
    AppHeader,
    AppTabs,
    skills
    // appTitle: require("./components/title").default
  },

  data() {
    return {
      skills: data 
    }
  },

  computed: {
    ...mapState('skills', {
      skills: state => state.data
    })
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

<style lang="scss" >
 .content {
    position: absolute;
    top: 150px;
    left: 0;
    height: calc(100% - 150px);
    width: 100%;
    background: url('./img/hero.jpg') center center/ cover no-repeat;
    box-shadow: inset 0px 2000px 0px rgba(#fff, 0.85);
    // opacity: 0.15;
  }
</style>
