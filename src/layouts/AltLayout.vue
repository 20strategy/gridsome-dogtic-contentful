<template>
  <div class="layout">
    <header class="header">
  
        
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


