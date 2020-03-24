import layout from './pages/home/layout.vue'
import detailpage from './pages/politics/detailpage.vue'
import content from './pages/society/content.vue'


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
    { path: '/society',
     component: content,
      name: 'society',

    },


]