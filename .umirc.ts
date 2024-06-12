import { defineConfig } from '@umijs/max';
const resolve = (dir) => require('path').join(__dirname, dir);

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '菜单',
  },
  alias: {
    '@assets': resolve('/src/assets'),
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
