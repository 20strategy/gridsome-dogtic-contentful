<template>
    <Layout>
      <h1 class="product-title">{{$page.product.title}}</h1>
      <g-image class="bannerimage" :src="$page.product.image.file.url" />
      <p>{{$page.product.description}}</p>
      <p>Price: ${{$page.product.price}}</p>
  </Layout>
     
</template>

<page-query>
query ($id:ID!){
  product: contentfulProduct (id: $id) {
     id
     title
     price
     image {
      file{
        url
      }
    }
     description 
  }
}
</page-query>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  methods: {
    richTextToHTML (content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img src="${node.data.target.fields.file.url}?w=800" alt="${node.data.target.fields.title}" />`
          }
        }
      })
    }
  }
}
</script>
<style >
.bannerimage {
  width:98%;
}
.blogposts img {
width: 100%;
}
.product-title {
  text-transform: uppercase;
}

</style>