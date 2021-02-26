// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "dogtic.com",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: "cdn.contentful.com",
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        typename: "Contentful"
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Products',
        path: './content/products/**/*.md',
      }
    },

  ],
  templates: {
    ContentfulBlog: [
        {path: '/blog/:slug',
        component: './src/templates/ContentfulBlog.vue'
    }
    ],
  ContentfulProduct:[
      {path: '/products/:slug',
      component: './src/templates/ContentfulProduct.vue'
    }
  ]
}
}
