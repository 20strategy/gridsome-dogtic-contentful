<template>
    <Layout>
    <div class="blog-page">
      <g-image class="bannerimage" :src="$page.post.picture1.file.url" width="250"  height="300" fit="fill" />
      <p class="blog-text" v-html="richTextToHTML($page.post.description)"></p>
  
  </div>
        
  </Layout>
    
    
</template>

<page-query>
query ($id:ID!){
  post: contentfulBlog (id: $id) {
     id
     title
     picture1 {
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
