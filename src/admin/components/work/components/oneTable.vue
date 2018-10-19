<template lang="pug">
.one-table
  h3 Последнии работы
  table
    tr.tr__header 
      th Название 
      th Технология
      th Ссылка
      th Превью
      th
    
    tr.tr__color_beige
      td Сайт школы онлайн образования
      td HTML, CSS, JAVASCRIPT
      td https://www.google.ru/
      td 
        img(src="../../../img/work-1.png").img__sait
      td 
        button.button_rename редактирование
        button.button_delet удалить
    tr.tr__color
      td Сайт школы онлайн образования
      td HTML, CSS, JAVASCRIPT
      td https://www.google.ru/
      td 
        img(src="../../../img/work-1.png").img__sait
      td 
        button.button_rename редактирование
        button.button_delet удалить
    tr.tr__color_beige
      td Сайт школы онлайн образования
      td HTML, CSS, JAVASCRIPT
      td https://www.google.ru/
      td 
        img(src="../../../img/work-1.png").img__sait
      td 
        button.button_rename редактирование
        button.button_delet удалить
</template>


<style lang="scss" scoped>
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
