import Vue from "vue";
import VueRouter from "vue-router";
import Classify from "../views/Classify.vue";
import Action from "../views/Action.vue";

import Rindex from "../views/routers/routers";
//二级路由
import Rhome from "../views/routers/home/index";
import Rnews from "../views/routers/news/index";
//三级路由
import Rhomezx from "../views/routers/home/tab/zx";
import Rhomegj from "../views/routers/home/tab/gj";
import Rhomegn from "../views/routers/home/tab/gn";
import Rnewszx from "../views/routers/news/tab/zx";
import Rnewsgj from "../views/routers/news/tab/gj";
import Rnewsgn from "../views/routers/news/tab/gn";

Vue.use(VueRouter);

const routes = [
  {
    path: "/classify",
    name: "Classify",
    component: Classify
  },
  {
    path: "/action",
    name: "Action",
    component: Action
  },
  {
    path: "/routers",
    name: "rindex",
    component: Rindex,
    children: [
      {
        name: "2rhome",
        path: "2rhome", //如果这里不使用 "/rhome" 则表示是归属于上级路由（上级luyou/子path），如果使用 "/rhome" 则表示根路径下访问
        component: Rhome,
        redirect: { name: "3Rhomezx" }, //跳转到下级第一层
        children: [
          {
            name: "3Rhomezx",
            path: "3Rhomezx",
            component: Rhomezx
          },
          {
            name: "3Rhomegj",
            path: "3Rhomegj",
            component: Rhomegj
          },
          {
            name: "3Rhomegn",
            path: "3Rhomegn",
            component: Rhomegn
          }
        ]
      },
      {
        name: "2rnews",
        path: "2rnews",
        component: Rnews,
        redirect: { name: "3Rnewszx" },
        children: [
          {
            name: "3Rnewszx",
            path: "3Rnewszx",
            component: Rnewszx
          },
          {
            name: "3Rnewsgj",
            path: "3Rnewsgj",
            component: Rnewsgj
          },
          {
            name: "3Rnewsgn",
            path: "3Rnewsgn",
            component: Rnewsgn
          }
        ]
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 异步组件
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({ 
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
