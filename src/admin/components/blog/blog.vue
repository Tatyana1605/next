<template lang="pug">
  blog
    h1 Страница "Блог"
    .content
      form(method="post")
        h3 Добавить запись
        input(type="text" placeholder="Название")
        input(type="date" placeholder="Дата")
        textarea(type="text" name="comment")
        input(type="submit" value="Добавить")
      .conteiner__form
        table
          tr 
            th Название 
            th Дата
            th Содержание
            th
          tr
            td Мой первый сайт
            td 25.07.2018г
            td Сайт авиакомпании
            td 
              button.button_rename редактирование
              button.button_delet удалить
          tr
            td Мой второй сайт
            td 25.08.2018г
            td Сайт бургер
            td 
              button.button_rename редактирование
              button.button_delet удалить
          tr
            td Мой третий сайт
            td 10.10.2018г
            td Сайт-визитка
            td 
              button.button_rename редактирование
              button.button_delet удалить
</template>


<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
}
</style>
