<template lang="pug">
  .content
    h1 Страница "Блог"
    .contents
      .forma
        h3 Добавить запись
        input(type="text" placeholder="Название" v-model="post.title").input__name
        input(type="date"  placeholder="Дата" v-model="post.date" ).input__name
        textarea(type="text" name="comment" v-model="post.content")
        button(type="button" @click="editmode ? editExistedPost(post) : addPost(post)" v-text="editmode ? 'Изменить' : 'Добавить новую'" ).input__add
      .conteiner__form
        h3 Последнии записи
        table
          tr.tr__header 
            td Название 
            td Дата
            td Содержание
            td
          tr(
            v-for='post in posts'
            :key='post.id'

            
            )
            td {{post.title}}
            td {{post.date}}
            td {{post.content}}
            td
              button(type="button" @click="removePost(post.id)" ) удалить
              button(type="button" @click="fillUpFormWithData(post)") изменит
          
</template>


<script>

import{mapActions, mapState} from 'vuex';


export default {
  components: {
   
  },
    

   data() {
    return {
     
      editmode: false,
      post : {
        id: 0, 
        title: "",
        date: "",
        content: ""
        
      }
    }
  },
  computed: {
    ...mapState('posts', {
      posts: state => state.data
    })
  },
  created() {
    this.fetchPosts();
  },
  
  methods: {
    ...mapActions({
      fetchPosts: 'posts/fetch',
      addPost:"posts/add",
      removePost: "posts/remove",
      editPost: "posts/edit"
    }),

    editExistedPost(post) {
      this.editPost(post).then(response => {
        console.log(response);
        Object.keys(this.post).forEach(key => (this.post[key] = ""));
        this.editmode = false;
      }).catch(error => {
        alert(error);
      });
    
    },

    fillUpFormWithData(post) {
      this.post.id = post.id;
      this.post.title = post.title;
      this.post.date = post.date;
      this.post.content = post.content;
      

      this.editmode = true;
    },
    
  }
}
</script>


<style lang="scss" scoped>

.content {
  padding-left: 30px;
  width: 90%;
}
.contents {
  display: flex;
  align-items: end;
  flex: 1;
  
}
.forma {
  display: flex;
  flex-direction: column;
  width: 50%;
}
input, textarea {
  margin-top: 20px;

}
.input__name {
  height: 45px;
  width: 300px;
  border-radius: 3px;
  border: none;
  padding-left: 20px;
}

textarea {
  height: 180px;
  width: 500px;
  overflow: auto;
  border: none;
  resize: none;
}

.input__add {
  height: 45px;
  width: 120px;
  border-radius: 5px;
  background-color: #00bfa5;
  border: none;
  color: #ffffff;
  cursor: pointer;
}
table {
  font-size: 16px;
  height: 450px;
  width: 530px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 10px;
}

td {
 border: 2px solid #00bfa5;
}

.tr__header {
  height: 56px;
 
  // display: flex;
  // justify-content: space-around;
  
}
.tr__color {
 
  height: 95px;
  &_beige {
    background-color: #f9f9f9;
    height: 95px;
  }
}
</style>
