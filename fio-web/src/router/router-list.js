
const ERROR = () => import('../components/errorpage/Page404');
const HomePage = () => import('../components/views/HomePage')

export default [
  {
    path:'/',
    name:'首页',
    component:HomePage
  },
  {
    path:'*',
    name:'404',
    component:ERROR,
  }
]
