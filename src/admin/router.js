import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import about from './components/about';
import posts from './components/posts/posts';
import works from './components/works/works';

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: "https://webdev-api.loftschool.com"
});

const routes = [
  { path: '/', name: 'about', component: about },
  { path: '/posts', name: 'posts', component: posts },
  { path: '/works', name: 'works', component: works }

];






const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  // guard.get('/user', {
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`
  //   }
  // }).then(response => {
  //   // next();
  // }).catch(error => {
  //   // localStorage.removeItem("token");
  //   // window.location.href = "http://google.com";
  // });
  next();
});

export default router;