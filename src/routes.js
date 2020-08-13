import home from './pages/home/index.vue'
import contact from './pages/contact/index.vue'
import about from './pages/about/index.vue'
import notFound from './pages/not_found/index.vue'

export const routes = [
    {
        path: '/',
        component: home,
        name: 'home',

    },

    {
        path: '/contact',
        component: contact,
        name: 'contact',

    },
    {
        path: '/about',
        component: about,
        name: 'about',

    },
    
    {
        path: '*',
        component: notFound,
        name: 'notFound',

    }
 
]