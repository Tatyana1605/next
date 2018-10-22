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
import posts from "./components/posts/posts";
import works from "./components/works/works";


export default {
  components: {
    AppHeader,
    AppTabs,
    abouts,
    posts,
    works
    // appTitle: require("./components/title").default
  },

  
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
