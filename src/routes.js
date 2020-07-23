import home from './pages/home/index.vue'
import details from './pages/detail/index.vue'
import catagory from './pages/catagory/index.vue'
import notFound from './pages/not_found/index.vue'

export const routes = [
    {
        path: '/',
        component: home,
        name: 'home',

    },
    {
        path: '/details',
        component: details,
        name: 'details',
        props(route) {
            return { id: route.query.id };
        }

    },
    {
        path: '/politics',
        component: catagory,
        props: { type: 'politics'},
       
    },
    {
        path: '/society',
        component: catagory,
        props: {type: 'society'},
    },
    {
        path: '*',
        component: notFound,
        name: 'notFound',

    }
    
    // {
    //     path: '/detail',
    //     component: detailpage,
    //     name: 'detailpage',
    //     props(route) {
    //         return { story: route.query.story };
    //     }

    // },
 
]