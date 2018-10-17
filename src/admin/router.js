import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";


Vue.use(VueRouter);

const guard = axios.create({
  baseURL: "https://webdev-api.loftschool.com"
});


const routers = [];

const router = new VueRouter({ routers });

router.beforeEach((to, from, next) => {
  guard.get('/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(response => {
    // next();
  }).catch(error => {
    // localStorage.removeItem("token");
    // window.location.href = "http://google.com";
  });
  next();
});

export default router;