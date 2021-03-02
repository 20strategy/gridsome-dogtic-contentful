// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import DefaultLayout from '~/layouts/Default.vue'
import Layout from '~/layouts/Layout.vue'


export default async function (Vue, { router, head, isClient }) {
 
   head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css'
   });

 head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js',
    body: true,
    id: 'snipcart',
    'data-api-key': 'YzMxODU1YWYtOGIzOS00YmFlLTkxNDktNzNiOTgxYjJjYjRkNjM3NDQwMTE2MzAyNzQ0MDkz',
    'data-config-modal-style' : 'side',
  });
  // Set default layout as a global component
  Vue.component('Layout', Layout)
}

