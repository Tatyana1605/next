<template lang="pug">
  .content
    h1 Страница "Блог"
    .contents
      form(method="post")
        h3 Добавить запись
        input(type="text" placeholder="Название").input__name
        input(type="date" placeholder="Дата").input__name
        textarea(type="text" name="comment")
        input(type="submit" value="Добавить").input__add
      .conteiner__form
        h3 Последнии записи
        table
          tr.tr__header 
            th Название 
            th Дата
            th Содержание
            th
          tr.tr__color_beige
            td Мой первый сайт
            td 25.07.2018г
            td Сайт авиакомпании
            td 
              button.button_rename редактирование
              button.button_delet удалить
          tr.tr__color
            td Мой второй сайт
            td 25.08.2018г
            td Сайт бургер
            td 
              button.button_rename редактирование
              button.button_delet удалить
          tr.tr__color_beige
            td Мой третий сайт
            td 10.10.2018г
            td Сайт-визитка
            td 
              button.button_rename редактирование
              button.button_delet удалить
</template>


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
form {
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
</style>
