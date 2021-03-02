<template>
  <Layout>
  
    <g-image  class="heroimage" 
              alt="cute dogs" 
              src="https://bit.ly/37Q5dnM" /> <br>
    <g-image  class="heroimage" 
              alt="cute dogs" 
              src="~/assets/welcome.jpg" width="1200"/>
    

    <div class="indexpage-text">
   
    <h1>Walk and Play ♬</h1>
    <p>
      You love your puppy and you love your walk. Walking will bring your dog and you closer everyday. Let's make walking more pleasant.</p>
   
     <g-link class="index-button"to="/products/"><button class="button">SHOP NOW</button></g-link>
   </div>
   
    
    <br>
     <g-image class="heroimage" alt="cute dogs" 
              src="https://images.ctfassets.net/80g45033v4tf/1EEVS52Z2Zh6GzSuc3QRFK/e73b21c43c4033e7297ae6a14a2f68fb/frontpage1.jpg" />


  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: 'Welcome to Dogtic.com'
  }
}
</script>

<style scoped>
.heroimage {
  display: block;
  max-width: 1050px;
  width: 95%;
  height: 500px;
  margin-left:auto;
  margin-right:auto;
  object-fit:cover;
}
.indexpage-text {
    max-width: 550px;
    width: 85%;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
   }
.button {
  background-color: red;
  border:none;
  border-radius: 5px;
  color:white;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 1rem;
}
button:hover{
  
  transform: scale(1.08);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
}


    

</style>
