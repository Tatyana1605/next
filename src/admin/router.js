import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import about from './components/about';
import blog from './components/blog/blog';
import work from './components/work/work';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'about', component: about },
  { path: '/blog', name: 'blog', component: blog },
  { path: '/work', name: 'work', component: work }

];

const guard = axios.create({
  baseURL: "https://webdev-api.loftschool.com"
});




const router = new VueRouter({ routes });

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