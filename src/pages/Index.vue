<template>
  <Layout>
  
    <g-image  class="heroimage" 
              alt="cute dogs" 
              src="~/assets/welcome.jpg" width="1200" quality="90"/>
    

    <div class="indexpage-text">
   
    <h1>Walk and Play ♬</h1>
    <p>
      You love your puppy and you love your walk. Walking will bring your dog and you closer everyday. Let's make walking more pleasant.</p>
   
     <g-link class="index-button"to="/products/"><button class="button">SHOP NOW</button></g-link>
   </div>
   
    
    <br>
    
     <g-image class="heroimage" alt="cute dogs" 
              src="~/assets/frontpage.jpg" width="1050" quality="90" />


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
  height: auto;
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
