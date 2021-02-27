// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import DefaultLayout from '~/layouts/Default.vue'
import AltLayout from '~/layouts/AltLayout.vue'
import '~/assets/styles.css'

export default function (Vue, { router, head, isClient }) {
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
    body: true,
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
    body: true,
    id: 'snipcart',
    'data-api-key': 'YzMxODU1YWYtOGIzOS00YmFlLTkxNDktNzNiOTgxYjJjYjRkNjM3NDQwMTE2MzAyNzQ0MDkz',
  });
  // Set default layout as a global component
  Vue.component('Layout', AltLayout)
}

