// router/index.js
import Index from '@/views/Index'
import About from '@/views/About.jsx'

const routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/about",
    component: About
  }
];

export default routes