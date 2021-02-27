<template>
  <Layout>
    
    <h1 style="text-align:center">Blog</h1>
    <BlogGrid :blogs="$page.blogs.edges" />

    
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
import BlogGrid from "@/components/BlogGrid" 

export default {
  components: {
    BlogGrid,
  },
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