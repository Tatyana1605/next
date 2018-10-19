<template lang="pug">
  #root
    .header
      app-header
    .tabs
      app-tabs
    .content
    router-view
      router-link
        
</template>

<script>

import AppHeader from "./components/AppHeader";
import AppTabs from "./components/AppTabs";
import abouts from "./components/about";
import blog from "./components/blog/blog";
import work from "./components/work/work";
// import { mapActions} from "vuex";


// const data = [
//   {id: 1, title: "Html", percent: 20, category: 0},
//   {id: 2, title: "PHP", percent: 20, category: 1},
//   {id: 3, title: "CSS", percent: 20, category: 0},
//   {id: 4, title: "Node.js", percent: 20, category: 1},
//   {id: 5, title: "Mongo", percent: 20, category: 1},
//   {id: 6, title: "Gut", percent: 20, category: 2},
//   {id: 7, title: "Gulp", percent: 20, category: 2},
// ];


export default {
  components: {
    AppHeader,
    AppTabs,
    abouts,
    blog,
    work
    // appTitle: require("./components/title").default
  },

  // data() {
  //   return {
  //     skills: data 
  //   }
  // },

  

  // created() {
  //   this.fetchSkills();
  // },

  // methods: {
  //   ...mapActions({
  //     fetchSkills: "skills/fetch"
  //   })
  // }
};
</script>

 <style lang="scss" scoped>
 .content {
   color: #555;
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
