
console.log('hai')
import Vue from 'vue';


const skill = {
  template: "#skill",
  props: {
    title: String,
    percentage: Number,
  },
  mounted() {
    const circle = this.$refs.circle;
    const currentPercent = parseInt(
      getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
    );

    const requiredDashoffset = (currentPercent / 100) * (100 - this.percentage);

    circle.style.strokeDashoffset = requiredDashoffset;
  }
}

const skillsRow = {
  template: "#skills-item",
  props: {
    skills: Object
  },
  components: {
    skill
  }
}




new Vue ({
  el: "#skills-component",
  components: {
    skillsRow
  },
  data() {
    return {
      skills: []
    }
  },
  created() {
    const data = require('../../../data/skills.json');
    this.skills = data;

  },
  template: "#skills-list",
  
});
