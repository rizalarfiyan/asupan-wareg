import Home from '../views/pages/home'
import Detail from '../views/pages/detail'
import Favorite from '../views/pages/favorite'
import Search from '../views/pages/search'

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/search': Search,
}

export default routes
