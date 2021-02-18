// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'DOGTIC',
  siteDescription: 'Your shop to find the best products for your dog',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '80g45033v4tf', // required
        accessToken: 'jQQ7lvr_HkpikjL2s0ay-ijay8LmOuIOZhQVyYLuZyc', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ],
  transformer: {
    remark:{
      
    }
  }
}
