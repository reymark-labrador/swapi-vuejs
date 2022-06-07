import Film from '../view/Film.vue'
import Starship from '../view/Starship.vue'
import NotFound from '../view/NotFound.vue'

const routes = [
    { path: '/films', alias: '/', component: Film },
    { path: '/starships', component: Starship },
    { path: '/:pathMatch(.*)*', component: NotFound}
]

export default routes