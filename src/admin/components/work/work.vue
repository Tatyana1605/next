<template lang="pug">
  router-link-exact-active
    h1 Мои работы
    .content
      form(method="post")
        h3 Добавить работу
        input(type="text" placeholder="Название проекта")
        input(type="text" placeholder="Технология")
        input(type="text" placeholder="Ссылка")
        input(type="file" value="Загрузить картинку")
      .conteiner__form
        table
          tr 
            th Название 
            th Технология
            th Ссылка
            th Превью
            th
          tr
            td Сайт школы онлайн образования
            td HTML, CSS, JAVASCRIPT
            td https://www.google.ru/
            td 
              img
            td 
              button.button_rename редактирование
              button.button_delet удалить
          tr
            td Сайт школы онлайн образования
            td HTML, CSS, JAVASCRIPT
            td https://www.google.ru/
            td 
              img
            td 
              button.button_rename редактирование
              button.button_delet удалить
          tr
            td Сайт школы онлайн образования
            td HTML, CSS, JAVASCRIPT
            td https://www.google.ru/
            td 
              img
            td 
              button.button_rename редактирование
              button.button_delet удалить
</template>
