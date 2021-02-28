<template>
  <div class="layout">
    <header class="container">
  
        
        <g-link exact to="/">
        <span class="logo-text">dogtic.</span>
        <span class="logo-text2">com</span>
        </g-link>
  
      <nav class="nav">
   
        <g-link class="nav__link" to="/about/">ABOUT</g-link>
        <g-link class="nav__link" to="/blog/">BLOG</g-link>
        <g-link class="nav__link" to="/products/">SHOP</g-link>
         <g-link class="snipcart-checkout nav__link" style="color:#777"> 
           CART
                <span class="snipcart-items-count nav__total-items button__text" style="font-size:11px;">0</span>
            </g-link>
            
       
      </nav>

 
    </header>
    <slot/>



   








   <footer>
    <p class="home-links">
      
      <p style="text-align:center">Email: bark@dogtic.com
      <br>All rights have been reserved.</p>
    </p>
  </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    height: 80px;
    max-width: 1050px;
    margin: 0 auto;
    padding: 0  ; 
    display: flex;
}


.column1 {
  flex-shrink: 0; /* shrinks to 0 to apply 70% width*/
  flex-basis: 50%; /* sets initial width to 70% */
}
.column2 {
  flex-shrink: 0; /* shrinks to 0 to apply 70% width*/
  flex-basis: 50%; /* sets initial width to 70% */  
  text-align: right;

}
.box {
  margin: 0;
  padding: 0;
 
}

@media only screen and (max-width: 900px) {

  .container {
      /* it place the items in vertical direction */
    flex-direction: column;
  }
  .box {
    text-align: center;
  }


}
</style>


