import Characters from '~Screens/Characters'
import Episodes from '~Screens/Episodes'
import Home from '~Screens/Home'
import Locations from '~Screens/Locations'

export interface RouteType {
  component: React.ReactNode
  name: string
  path: string
}

interface RoutesType {
  baseUrl: RouteType
  characters: RouteType
  episodes: RouteType
  locations: RouteType
}

const routes: RoutesType = {
  baseUrl: {
    component: Home,
    name: 'Home',
    path: '/',
  },
  characters: {
    component: Characters,
    name: 'Characters',
    path: '/characters',
  },
  episodes: {
    component: Episodes,
    name: 'Episodes',
    path: '/episodes',
  },
  locations: {
    component: Locations,
    name: 'Locations',
    path: '/locations',
  },
}

export default routes
