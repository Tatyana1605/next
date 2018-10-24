

const posts = {
  namespaced: true,
  state: {
    data: [
      
    ]
  },
  mutations: {
    fillUpPostsData: (state, posts) => (state.data = posts),
    addNewPost: (state, post) => state.data.push(post),
    removePost: (state, deletePostId) => state.data = state.data.filter(post => post.id !== deletePostId),
    editPost: (state, editedPost) => state.data = state.data.map(post => {
      return post.id === editedPost.id
      ? editedPost
      : post
    }) 
  },
  actions: {
    fetch({commit}) {
      this.$axios.get("/posts/${user_id}").then(response =>{
        commit('fillUpPostsData', response.data)
      })
    },
    add({commit}, post) {
      const formData = new FormData();

      Object.keys(post).forEach(key => formData.append(key, post[key]));


     this.$axios.post('/posts', formData).then(response => {
        commit('addNewPost', response.data)
     });
    },
    remove({commit}, postId) {
      this.$axios.delete(`/posts/${postId}`).then(response => {
        commit('removePost', postId)
      });
    },
    edit({commit}, post) {
      const formData = new FormData();

      Object.keys(post).forEach(key => formData.append(key, post[key]));

      return this.$axios.post(`/posts/${post.id}`, formData).then(response => {
        commit('editPost', response.data.post);
        return response
      }).catch(error => {
        console.log(error);
        return Promise.reject(error);
      }
      )
    }
  }
};

export default posts;