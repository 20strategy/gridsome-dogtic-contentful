<template>
  <Layout>
    <g-image class="about-hero-image" alt="cool dogs" src="~/aboutpage.webp" width="700" />
    <div class="about-text">
    <h1>What Happens When You Try to Fake Your Death in Front of Your Dog?</h1>
    <p>
      Do you think he would be fooled. 
      I am sure everyone has tried this at least once.  
      Here is a youtube video of border collie's reaction.  The owner was faking her 
      death. Can you guess what happened?
    </p>
    <ul>
     <li> He knows the owner is not dead.  By smelling and licking, dog know 
       instantaneously that nothing is wrong the owner.</li> 
     <li> He thinks the owner is playing</li> 
     <li> He thinks you are just tired. </li> 
       
       
    </ul>
    <p>
     My first commitment to comsumers is that we will provide good products in quality 
     and looks. Second, we will try hard to bring you good information on dogs. 
     From picking the best breed to pottying training your puppy, we will make 
     sure to deliver you with good contents.
    </p>
    </div>

 
    <g-image alt="cute dogs" class="heroimage" src="~/aboutpage1.webp" />
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
.heroimage {
  display: block;
  max-width: 1050px;
  width: 95%;
  margin-left:auto;
  margin-right:auto;
}

.about-text {
    max-width: 550px;
    width: 85%;
    margin-left:auto;
    margin-right:auto;}
</style>
