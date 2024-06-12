import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '菜单',
  },
  routes: [
    {
      path: '/',
      redirect: '/table',
    },
    {
      name: '首页',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
