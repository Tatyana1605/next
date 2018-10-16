<template lang="pug">
  #root
    .header
      app-header
    .tabs
      tabs
    .content
      skills(
        :skills="skills"
      )
</template>

<script>

import header from "./components/header";
import tabs from "./components/tabs";
import skills from "./components/skills";
import { mapActions, mapState} from "vuex";


const data = [
  {id: 1, title: "Html", percent: 20, category: 0},
  {id: 2, title: "PHP", percent: 20, category: 1},
  {id: 3, title: "CSS", percent: 20, category: 0},
  {id: 4, title: "Node.js", percent: 20, category: 1},
  {id: 5, title: "Mongo", percent: 20, category: 1},
  {id: 6, title: "Gut", percent: 20, category: 2},
  {id: 7, title: "Gulp", percent: 20, category: 2},
];


export default {
  components: {
    appHeader: header,
    tabs,
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
    box-shadow: inset 0px 1000px 0px rgba(#fff, 0.85);
    // opacity: 0.15;
  }
</style>
