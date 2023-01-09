import { lazy } from 'react'

type ExtendRouteProps = {
  title: string
  path: string
  component: any
}

const Dashboard = lazy(() => import('src/pages/Dashboard'))
const Role = lazy(() => import('src/pages/Role'))
const Battle = lazy(() => import('src/pages/Battle'))

const routes: ExtendRouteProps[] = [
  {
    path: '/home',
    title: '首页',
    component: <Dashboard />,
  },
  {
    path: '/role',
    title: '角色',
    component: <Role />,
  },
  {
    path: '/battle',
    title: '战斗',
    component: <Battle />,
  },
]

export default routes
