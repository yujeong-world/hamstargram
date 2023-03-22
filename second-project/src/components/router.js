import { createWebHistory, createRouter } from "vue-router";
import BlogList from '../components/BlogList.vue';
import Info from '../components/Info.vue';
import Detail from '../components/Detail.vue';
import Cafe from "../components/Cafe.vue";
import Comment from "../components/Comment.vue";

const routes = [
  {
    path: "/BlogList",
    component: BlogList,
  },
  {
    path: "/Info",
    component : Info,
  },
  {
    //path:"/detali/:id(\\d+)" url 주소에 숫자만 입력받아야 하는 경우
    path: "/detail/:id",
    component: Detail,
    children:[
        {path:'cafe', component: Cafe},
        {path:'comment', component: Comment}
    ]
  },
  {
    /* 아무문자나 임력한 경우 홈으로 전송하거나 404페이지 출력 */
    path:"/:anything(.*)",
    component:BlogList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;  