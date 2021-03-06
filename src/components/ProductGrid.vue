<template>

<div class="grid">
      <div class ="projects">
        <div class="project" v-for="edge in $page.products.edges" :key="edge.node.id">
            <g-link :to="edge.node.path" class="project-link">
            <g-image :src="edge.node.image.file.url+`?h=1000`"
                :alt="edge.node.image.title"
                class="product-thumbnail"/>
           
              <h3 class="project-title">{{ edge.node.title }}</h3>
                <p>${{edge.node.price}}.00</p>
                <button style="display:none"
            class="snipcart-add-item cart-button"
            :data-item-id="edge.node.id"
            :data-item-name="edge.node.title"
            :data-item-image="edge.node.image.file.url"
            :data-item-price="edge.node.price"
            :data-item-url="edge.node.path"
            ></button>
           
            </g-link>
        </div>
        </div>
        </div>
        
    
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

.projects {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-gap: 0px;
}
.project {
  grid-column: auto / span 2;
  text-align: center;
}
.project-link {
  text-decoration: none;
}
.product-thumbnail {
  width: 95%;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0,0,0,0.25);
}
.project-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 0.5rem 0 1rem 0;
}

.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
}

@media (min-width: 320px) {
  .project {
    display: block;
    grid-column: auto / span 1;
  }
  .project:nth-child(3n+1) {
    grid-column: auto / span 1;
  }
}

</style>
