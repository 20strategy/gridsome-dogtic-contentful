<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <h1 style="text-align:center">Products</h1>
    <div v-for="edge in $page.allContentfulProduct.edges" :key="edge.node.id">
    
        <h2 style="margin-bottom:0.25em; text-align:center;"> {{edge.node.title}}</h2></g-link>
    
      <g-image :src="edge.node.image.file.url" style="width:100%; 
      object-fit:contain;" :alt="edge.node.image.title" />
        <p>${{edge.node.price}}</p>
        <g-link :to="edge.node.path">More Info...</g-link>
      
    
      <br>
      </div>
    
  </Layout>
</template>



<page-query>
{
  allContentfulProduct {
    edges {
      node {
        id
        title
        slug
		    price
        path
        image {
            file {
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
    title: 'Dogtic Products'
  }
}

</script>

