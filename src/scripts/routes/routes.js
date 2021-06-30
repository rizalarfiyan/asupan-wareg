import Home from '../views/pages/home'
import Detail from '../views/pages/detail'
import City from '../views/pages/city'
import Favorite from '../views/pages/favorite'
import Search from '../views/pages/search'
import NotFound from '../views/pages/not-found'

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/city/:id': City,
  '/favorite': Favorite,
  '/search': Search,
  '/notfound': NotFound,
}

export default routes
