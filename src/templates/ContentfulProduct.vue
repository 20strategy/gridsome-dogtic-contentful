<template>
    <Layout>

      
      <div class="container1">
          <div class="column1 box">
            <g-image class="product-image" 
            :src="$page.product.image.file.url" /></div>
          <div class="column2 box"> 
            <div class="product-box-text">
            <h1 class="product-title">{{$page.product.title}}</h1>
            <p>{{$page.product.description}}</p>
            <p>Price: ${{$page.product.price}}</p>
        <button
            class="snipcart-add-item cart-button"
            :data-item-id="$page.product.id"
            :data-item-name="$page.product.title"
            :data-item-image="$page.product.image.file.url"
            :data-item-price="$page.product.price"
            :data-item-url="$page.product.path"
            >Buy Now</button>
            </div>
          </div>
      </div>

    
  </Layout>
     
</template>

<page-query>
query ($id:ID!){
  product: contentfulProduct (id: $id) {
     id
     title
     price
     path
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


<style scoped>
.container1{
    display: flex;
  
    max-width: 1050px;
    margin: 0 auto;
    padding: 0  ; 
 
}

.column1 {
  flex-shrink: 0; /* shrinks to 0 to apply 70% width*/
  flex-basis: 50%; /* sets initial width to 70% */
}
.column2 {
  flex-shrink: 0; /* shrinks to 0 to apply 70% width*/
  flex-basis: 50%; /* sets initial width to 70% */
  
}

.box {
  margin: 0;
  padding: 0;
 
}
.product-box-text {
  padding: 0px 20px;
  max-width:450px;
  width: 80%;
}
.cart-button {
  background-color: red;
  border:none;
  border-radius: 5px;
  color:white;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 1rem;


}


@media only screen and (max-width: 900px) {
  .container {
      /* it place the items in vertical direction */
    flex-direction: column;
  }

.box {
    margin: 0 0 1rem;
  }
}
</style>
