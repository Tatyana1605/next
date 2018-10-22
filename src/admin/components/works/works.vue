<template lang="pug">
  .content
    h1 Мои работы
    .center
      .one-form
        h3 Добавить работу
        input(type="text" placeholder="Название проекта" v-model="work.title")
        input(type="text" placeholder="Технология" v-model="work.techs")
        input(type="text" placeholder="Ссылка" v-model="work.link")
        input(type="file"   @change="renderAndAddFile" )
        .review(:style="{backgroundImage: previewPic}")
        button(type="butto" @click="editmode ? editExistedWork(work) : addWork(work)" v-text="editmode ? 'Изменить' : 'Добавить новую'").input__add 
          //- input(type="submit" value="Добавить").input__add
      .one-table
        h3 Последнии работы
        table
          tr.tr__header 
            td Название 
            td Технология
            td Ссылка
            td Превью
            td
          tr(v-for='work in works')
            td {{work.title}}
            td {{work.techs}}
            td {{work.link}}
            td 
              img(:src='`https://webdev-api.loftschool.com/${work.photo}`', width="100", height="100") 
            td
              button(type="button" @click="removeWork(work.id)" ) удалить
              button(type="button" @click="fillUpFormWithData(work)") изменит

          
          
          tr.tr__color_beige
            td Сайт школы онлайн образования
            td HTML, CSS, JAVASCRIPT
            td https://www.google.ru/
            td 
              img(src="../../img/work-1.png").img__sait
            td 
              button(type="button" @click="fillUpFormWithData(work)").button_rename редактирование
              button(type="button" @click="removeWork(work.id)").button_delet удалить
          tr.tr__color
            td Сайт школы онлайн образования
            td HTML, CSS, JAVASCRIPT
            td https://www.google.ru/
            td 
              img(src="../../img/work-1.png").img__sait
            td 
              button(type="button" @click="fillUpFormWithData(work)" ).button_rename редактирование
              button(type="button" @click="removeWork(work.id)").button_delet удалить
          tr.tr__color_beige
            td Сайт школы онлайн образования
            td HTML, CSS, JAVASCRIPT
            td https://www.google.ru/
            td 
              img(src="../../img/work-1.png").img__sait
            td 
              button(type="button" ).button_rename редактирование
              button(type="button" @click="removeWork(work.id)").button_delet удалить
</template>

<script>

import{mapActions, mapState} from 'vuex';

export default {
  components: {
    
  },
   data() {
    return {
      previewPic: "",
      editmode: false,
      work : {
        id: 0, 
        title: "",
        techs: "",
        link: "",
        photo: {}
      }
    }
  },
  computed: {
    ...mapState('works', {
      works: state => state.data
    })
  },
  created() {
    this.fetchWorks();
  },
  
  methods: {
    ...mapActions({
      fetchWorks: 'works/fetch',
      addWork:"works/add",
      removeWork: "works/remove",
      editWork: "works/edit"
    }),

    editExistedWork(work) {
      this.editWork(work).then(response => {
        console.log(response);
        Object.keys(this.work).forEach(key => (this.work[key] = ""));
        this.editmode = false;
      }).catch(error => {
        alert(error);
      })
    
    },

    fillUpFormWithData(work) {
      this.work.id = work.id;
      this.work.title = work.title;
      this.work.techs = work.techs;
      this.work.link = work.link;
      this.previewPic = `url(https://webdev-api.loftschool.com/${work.photo})`;

      this.editmode = true;
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

.center {
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.content {
  
  padding-left: 30px;
  width: 90%;
}

.contents {
  display: flex;
  flex: 1;
  align-items: center;
  
}
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

.one-table {
  display: flex;
  flex-direction: column;

}
h3 {
  font-size: 24px;
}
table {
  font-size: 16px;
  height: 450px;
  width: 630px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 10px;
}

.tr__header {
  height: 56px;
  border-bottom-color: 3px solid #00bfa5;
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
.img__sait {
width: 100px;
height: 70px;
}

</style>