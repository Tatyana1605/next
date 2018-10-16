<template lang="pug">
  .tabs
    tabs
      input(id="tab_1" type="radio" name="tab" checked="checked")
      input(id="tab_2" type="radio" name="tab" )
      input(id="tab_3" type="radio" name="tab" )

      label(for="tab_1" id="tab_l1") Обо мне 
      label(for="tab_2" id="tab_l2") Блог 
      label(for="tab_3" id="tab_l3") Мои работы

      .line(style="clear:both")
	
      .tabs_cont
        .text(id="tab_c1") 
        .text(id="tab_c2") 
        .text(id="tab_c3") 
	

      
        
</template>

<style lang="scss" scoped>


  .tabs {
	position: relative;
	margin: 0 auto;
	width: 100%;
  height: 100%;
  background-color: #f0efe9;
}
.tabs label {
	color: #555;
	cursor: pointer;
	display: block;
	float: left;
	width: 180px;
	height: 65px;
	line-height: 65px;
	position: relative;
  font-size: 24px;
	top: 2px;
	text-align: center;
}

.tabs input {
	position: absolute;
	left: -9999px;
}

#tab_1:checked  ~ #tab_l1,
#tab_2:checked  ~ #tab_l2,
#tab_3:checked  ~ #tab_l3 {
	background: #fff;
	border-color: #fff;
  color: #0f9c89;
	top: 0;
	z-index: 3;
}

// .tabs_cont {
// 	background: #fff;
// 	position: relative;
// 	z-index: 2;
// 	height: 230px;
// }

.tabs_cont > div {
	position: absolute;
	left: -9999px;
	top: 0;
	opacity: 0;
	-moz-transition: opacity .5s ease-in-out;
	-webkit-transition: opacity .5s ease-in-out;
	transition: opacity .5s ease-in-out;
}
#tab_1:checked ~ .tabs_cont #tab_c1,
#tab_2:checked ~ .tabs_cont #tab_c2,
#tab_3:checked ~ .tabs_cont #tab_c3 {
	position: static;
	left: 0;
	opacity: 1;
}
</style>
