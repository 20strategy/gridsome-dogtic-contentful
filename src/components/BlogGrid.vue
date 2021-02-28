<template>

 <div class="between-header-footer">
      <div class ="projects">
        <div class="project" v-for="edge in $page.blogs.edges" :key="edge.node.id">
            <g-link :to="edge.node.path" class="project-link">
            <g-image :src="edge.node.picture1.file.url"
                :alt="edge.node.picture1.title"
                class="thumbnail"/>
           
              <h2 class="blog-title">{{ edge.node.title }}</h2>
                <p class="blog-excerpt">{{edge.node.excerpt}}</p>
           
            </g-link>
        </div>
        </div>
        </div>
    
    
</template>

<script>
export default {
    props: {
        blogs: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5px;
}
.project {
  grid-column: auto / span 2;
  text-align: center;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  height: 430px;
  width: 95%;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0,0,0,0.25);
}
.blog-title {
  font-size: 1.2rem;
  color: #333;
  margin: 0.5rem 0 0 0;
  max-width: 600px;
  width: 85%;
  margin-left:auto;
  margin-right:auto;
}
.blog-excerpt {
  font-size: 0.88rem;
  color: #999;
  margin: 0.5rem 0 0 0;
  max-width: 600px;
  width: 85%;
  margin-left:auto;
  margin-right:auto;
}

.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
}

@media (min-width: 920px) {
  .project {
    grid-column: auto / span 1;
  }
  .project:nth-child(3n+1) {
    grid-column: auto / span 1;
  }
}

</style>
