

const works = {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    fillUpWorksData: (state, work) => (state.data = work),
    addNewWork: (state, work) => state.data.push(work),
    removeWork: (state, deleteWorkId) => state.data = state.data.filter(work => work.id !== deleteWorkId),
    editWork: (state, editedWork) => state.data = state.data.map(work => {
      return work.id === editedWork.id
      ? editedWork
      : work
    }) 
  },
  actions: {
    fetch({commit}) {
      this.$axios.get("/works/${user_id}").then(response =>{
        commit('fillUpWorksData', response.data)
      })
    },
    add({commit}, work) {
      const formData = new FormData();

      Object.keys(work).forEach(key => formData.append(key, work[key]));


     this.$axios.post('/works', formData).then(response => {
        commit('addNewWork', response.data)
     });
    },
    remove({commit}, workId) {
      this.$axios.delete(`/works/${workId}`).then(response => {
        commit('removeWork', workId)
      });
    },
    edit({commit}, work) {
      const formData = new FormData();

      Object.keys(work).forEach(key => formData.append(key, work[key]));

      return this.$axios.post(`/works/${work.id}`, formData).then(response => {
        commit('editWork', response.data.work);
        return response
      }).catch(error => {
        console.log(error);
        return Promise.reject(error);
      }
      )
    }
  }
};

export default works;