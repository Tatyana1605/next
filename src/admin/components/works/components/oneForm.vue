<template lang="pug">
.one-form
  h3 Добавить работу
  form(
    
  )
    input(type="text" placeholder="Название проекта" v-model="work.title")
    input(type="text" placeholder="Технология" v-model="work.techs")
    input(type="text" placeholder="Ссылка" v-model="work.link")
    input(type="file"   @change="renderAndAddFile" )
    .review(:style="{backgroundImage: previewPic}")
    button(type="butto" @click="addWork(work)").input__add Добавить
    //- input(type="submit" value="Добавить").input__add
</template>

<script>

import{mapActions} from 'vuex';

export default {
  data() {
    return {
      previewPic: "",
      work : {
        title: "",
        techs: "",
        link: "",
        photo: {}
      }
    }
  },
  methods: {
     methods: {
    ...mapActions({
      
      addWork:"works/add"
    })
  },
    renderAndAddFile(event) {
      const file = event.target.files[0];

      const renderer = new FileReader();

      renderer.readAsDataURL(file);

      renderer.onloadend = () => {
        this.previewPic = `url(${renderer.result})`;
      };
      renderer.onerror = () => {

      };

      this.work.photo = file;
    }
  }
}
</script>



<style lang="scss" scoped>
h3 {
  font-size: 24px;
}
.one-form {
  display: flex;
  flex-direction: column;
}

 form{ 
   display: flex;
   flex-direction: column;

 }

 input {
   margin-top: 20px;
   height: 45px;
  width: 300px;
  border-radius: 5px;
  border: none;
  padding-left: 20px;
 }
  .review {
    width: 200px;
    height: 200px;
    background: center center / contain no-repeat;
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
</style>
