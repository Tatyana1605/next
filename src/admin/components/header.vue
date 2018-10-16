<template lang="pug">
  app-header
    h1.title Панель администрирования
    a(href="#").button_welcom Вернуться на сайт
</template>


<style lang="scss" scoped>
  app-header {
    width: 100%;
    height: 80px;
    background-color: #00bfa5;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px 0 -25px;

  }
  .title {
    padding-left: 30px;
  }
  .button_welcom {
    padding-right: 30px;
    color: #ffffff;
    opacity: 0.8;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
