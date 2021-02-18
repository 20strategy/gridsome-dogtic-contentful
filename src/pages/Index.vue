<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <g-image class="heroimage" alt="cute dogs" src="~/frontpage.jpg" width="600" />

    <h1>Hello, world!</h1>

    <p>
      Hi, My name is Andrew Kim and I am the co-founder of DOGTIC.COM. I started 
      this website/blog to provide quality products for dogs and good information for 
      dog-parents
    </p>
    <p>
     Although dogs have been with us more than 10,000+ years, 
     we are still learning new things about our furry companions
    </p>
    <p>
     My first commitment to comsumers is that we will provide good products in quality 
     and looks. Second, we will try hard to bring you good information on dogs. 
     From picking the best breed to pottying training your puppy, we will make 
     sure to deliver you with good contents.
    </p>

    
    <g-image class="heroimage" alt="cute dogs" src="~/frontpage1.jpg" width="600" />
    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.heroimage {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 98%;
}
p {
  color: #666
}
</style>
