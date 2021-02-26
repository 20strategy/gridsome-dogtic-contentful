<template>
  <Layout>
    
    <h1 style="text-align:center">Blog</h1>
    
    <div v-for="edge in $page.blogs.edges" :key="edge.node.id">
      <g-link :to= "edge.node.path" >
        <h2 style="margin-bottom:0.25em; text-align:center;"> {{edge.node.title}}</h2></g-link>
    
      <g-link :to= "edge.node.path" ><g-image :src="edge.node.picture1.file.url" style="width:100%; 
      object-fit:contain;" :alt="edge.node.picture1.title" /></g-link>
        <p>{{edge.node.excerpt}}</p>
      
      <g-link :to= "edge.node.path" >Read more... </g-link>
      <br>
    </div>
    
  </Layout>
</template>


<page-query>
{
  blogs: allContentfulBlog{
    edges{
      node{
        id
        title
        excerpt
        slug
        path
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
    title: 'Dogtic Blog'
  }
}

</script>

<style>
a {
  color:#999;
  text-decoration:none;
}
a:hover {
   color: #666;
   text-decoration: none;
}

a: {
  color: red;
  text-decoration: none;
}
</style>