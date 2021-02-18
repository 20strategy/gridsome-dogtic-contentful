<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <h1>Blog</h1>
    <div v-for="edge in $page.allContentfulBlog.edges" :key="edge.node.id">
      <h2 style="margin-bottom:0.25em;"> {{edge.node.title}}</h2>
    
      <g-image :src="edge.node.picture1.file.url" style="width:100%; height:500px;
      object-fit:contain;" :alt="edge.node.picture1.title" />
        <p>{{edge.node.description}}</p>
      </div>
      
    
  </Layout>
</template>



<page-query>
{
  allContentfulBlog{
    edges{
      node{
        id
        title
        picture1 {
          id
          title
          file{
            url
          }
          
        }
        description
        
        
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
