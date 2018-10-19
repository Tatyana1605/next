<template lang="pug">
.one-form
  h3 Добавить работу
  form(
    method="post"
  )
    input(type="text" placeholder="Название проекта")
    input(type="text" placeholder="Технология")
    input(type="text" placeholder="Ссылка")
    input(type="file" accept="image/*"  name="Загрузить картинку" value="Загрузить картинку")
    input(type="submit" value="Добавить").input__add
</template>


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
