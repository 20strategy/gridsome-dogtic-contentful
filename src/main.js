// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import DefaultLayout from '~/layouts/Default.vue'
import Layout from '~/layouts/Layout.vue'
import '~/assets/styles.css'

export default function (Vue, { router, head, isClient }) {
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.css'
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    body: true,
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js',
    body: true,
    id: 'snipcart',
    'data-api-key': 'YzMxODU1YWYtOGIzOS00YmFlLTkxNDktNzNiOTgxYjJjYjRkNjM3NDQwMTE2MzAyNzQ0MDkz',
    'data-config-add-product-behavior' : 'none',
  });
  // Set default layout as a global component
  Vue.component('Layout', Layout)
}

