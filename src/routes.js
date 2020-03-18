import layout from './pages/home/layout.vue'
import detailpage from './pages/politics/detailpage.vue'


export const routes = [

    { path: '/',
     component: layout,
      name: 'layout',

    },
    { path: '/detail',
     component: detailpage,
      name: 'detailpage',
      props(route) {
        return { story : route.query.story };
      }

    },


]