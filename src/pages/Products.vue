<template>
  <Layout>


    <h1 style="text-align:center">Products</h1>
    <ProductGrid :products="$page.products.edges" />
    
    
  </Layout>
</template>



<page-query>
{
  products: allContentfulProduct {
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
import ProductGrid from "@/components/ProductGrid"

export default {
  components:{
    ProductGrid,
  },
  metaInfo: {
    title: 'Dogtic Products'
  }
}

</script>

