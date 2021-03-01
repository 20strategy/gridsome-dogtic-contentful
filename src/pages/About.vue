<template>
  <Layout>
    <g-image class="about-hero-image" alt="cool dogs" src="https://images.ctfassets.net/80g45033v4tf/VaHaxz1kCO6Mb9WmGwE82/9a64691d308a86dc20d919f548d67fc2/PRODUCT_BOTTOM_960_620.jpg"  />
    <div class="about-text">
    <h1 style="text-align:center">Welcome to Dogtic.com</h1>
  <p>
     Hi, My name is <b>Andrew Kim</b> and I am the co-founder of DOGTIC.COM. I started this website/blog to provide quality products for dogs and good information for dog-parents</p>
     
    <p>Although dogs have been with us more than 10,000+ years, 
     we are still learning new things about our furry companions</p>
    <p>
     My first commitment to comsumers is that we will provide good products in quality 
     and looks. Second, we will try our best to bring you good information on dogs, from picking the best breed to potty training your puppy. We will make 
     sure to deliver you with good contents.</p>
    </div>

 
    <g-image alt="cute dogs" class="about-hero-image" src="~/aboutpage1.webp" />
    <br>
   
   

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us',
    meta:[
      {charset:'utf-8'},
      {name: "description", content:" Dogs have been with us more than 10,000 years. "}]
  }
}
</script>

<style scoped>
.about-hero-image {
    display: block;
    object-fit: cover;
    max-width: 700px;
    width: 98%;
    margin-left:auto;
    margin-right: auto; 
}


.about-text {
    max-width: 550px;
    width: 85%;
    margin-left:auto;
    margin-right:auto;}
</style>
