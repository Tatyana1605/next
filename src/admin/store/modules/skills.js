

const skills = {
  namespaced: true,
  state: {
    data: []
  },

  mutations: {
    loadSkills: (state, skills) => state.data = skills
  },

  actions: {
    fetch({commit}) {
      this.$axios.get('/skills/1').then(response => {
        commit('loadSkills', response.data)
      }, 
      error =>{
        console.error(error)
        }
      );
    },
    add(store, skill) {
      this.$axios.post('/skills', skill).then(
        response => {
          console.log(response);
      },
      error => {
        console.error(error);
      }
      )
    }
  }
};

export default skills;