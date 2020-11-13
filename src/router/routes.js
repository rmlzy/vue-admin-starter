import { UserLayout, BasicLayout } from "@/layouts";

const RouteView = {
  name: "RouteView",
  render: (h) => h("router-view"),
};

export default [
  {
    path: "/",
    name: "/",
    component: BasicLayout,
    meta: { title: "控制台" },
    redirect: "/dashboard",
    children: [
      {
        name: "/dashboard",
        path: "/dashboard",
        component: () => import("@/views/dashboard/Analysis"),
        meta: { key: "dashboard", title: "控制台", keepAlive: true, icon: "dashboard" },
      },
      {
        name: "/module1",
        path: "/module1",
        component: RouteView,
        meta: { key: "module1", title: "模块1", icon: "appstore" },
        redirect: "/module1/page1",
        children: [
          {
            name: "/module1/page1",
            path: "/module1/page1",
            component: () => import("@/views/module1/page1/index"),
            meta: { title: "页面1" },
          },
          {
            name: "/module1/page2",
            path: "/module1/page2",
            component: () => import("@/views/module1/page2/index"),
            meta: { title: "页面2" },
          },
          {
            name: "/module1/page3",
            path: "/module1/page3",
            component: () => import("@/views/module1/page3/index"),
            meta: { title: "页面3" },
          },
        ],
      },
      {
        name: "/module2",
        path: "/module2",
        component: RouteView,
        meta: { key: "module2", title: "模块2", icon: "appstore" },
        redirect: "/module2/page1",
        children: [
          {
            name: "/module2/page1",
            path: "/module2/page1",
            component: () => import("@/views/module2/page1/index"),
            meta: { title: "页面1" },
          },
          {
            name: "/module2/page2",
            path: "/module2/page2",
            component: () => import("@/views/module2/page2/index"),
            meta: { title: "页面2" },
          },
          {
            name: "/module2/page3",
            path: "/module2/page3",
            component: () => import("@/views/module2/page3/index"),
            meta: { title: "页面3" },
          },
        ],
      },
      {
        name: "/module3",
        path: "/module3",
        component: RouteView,
        meta: { key: "module3", title: "模块1", icon: "appstore" },
        redirect: "/module3/page1",
        children: [
          {
            name: "/module3/page1",
            path: "/module3/page1",
            component: () => import("@/views/module3/page1/index"),
            meta: { title: "页面1" },
          },
          {
            name: "/module3/page2",
            path: "/module3/page2",
            component: () => import("@/views/module3/page2/index"),
            meta: { title: "页面2" },
          },
          {
            name: "/module3/page3",
            path: "/module3/page3",
            component: () => import("@/views/module3/page3/index"),
            meta: { title: "页面3" },
          },
        ],
      },
    ],
  },

  {
    path: "/user",
    component: UserLayout,
    redirect: "/user/login",
    hidden: true,
    children: [
      {
        path: "/user/login",
        name: "/user/login",
        component: () => import(/* webpackChunkName: "user" */ "@/views/user/login"),
      },
      {
        path: "/user/register",
        name: "/user/register",
        component: () => import(/* webpackChunkName: "user" */ "@/views/user/register"),
      },
      {
        path: "/user/register-result",
        name: "/user/registerResult",
        component: () => import(/* webpackChunkName: "user" */ "@/views/user/register-result"),
      },
      {
        path: "/user/recover",
        name: "/user/recover",
        component: undefined,
      },
    ],
  },

  {
    path: "/404",
    component: () => import(/* webpackChunkName: "fail" */ "@/views/exception/404"),
  },

  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];
