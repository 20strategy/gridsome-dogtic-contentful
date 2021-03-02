<template>
  <div>
    <header class="header">       
        <g-link class="logo-text column-1" exact to="/">
            <span class="logo-text1">DOGTIC.</span>
            <span class="logo-text2">com</span>
          
        </g-link> 
      <nav class="nav column-2">
        <g-link class="nav__link" to="/about/">ABOUT</g-link>
        <g-link class="nav__link" to="/blog/">BLOG</g-link>
        <g-link class="nav__link" to="/products/">SHOP</g-link>
      <span class="nav snipcart-summary">
        <g-link href="#" class="snipcart-customer-signin nav__link"> 
           <g-image class="header-svg" src="~/assets/login.svg" width="26px"/> </g-link>  
         <g-link class="snipcart-checkout nav__link" > 
         <g-image class="header-svg" src="~/assets/cart.svg" width="26px"/>
                <span class="snipcart-items-count nav__total-items button__text" style="font-size:11px;">0</span>
            </g-link>   </span>   
      </nav> 
    </header>
    <!-- <div class="special-circle"></div>  -->
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
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    height: 80px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 2rem ;   }
.header-svg {
  width: 26px;
  height: auto;
}

.column1 {
  flex-shrink: 0; /* shrinks to 0 to apply 70% width*/
  flex-basis: 50%; /* sets initial width to 70% */
}
.column2 {
  flex-shrink: 0; /* shrinks to 0 to apply 70% width*/
  flex-basis: 50%; /* sets initial width to 70% */}

.box {
  margin: 0;
  padding: 0;
 }
    /*  -----UNIVERSAL CSS------ */
/* @font-face {
    font-family: Jost;
    src: url('../assets/Jost-Regular.ttf');
    font-weight: normal;}  */


.grid {
    max-width: 1050px;
    margin: 0 auto;
    padding: 0 3px ;}

body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    margin:0;
    padding:0;
    line-height: 1.5;
    background-color:white ;}

h1,h2{color:#444;}

p ,ul  {color: #666}

div {margin-bottom: 50px;}
a   {color:#555;text-decoration:none}
a:hover {color: #666;}
a: {color: red;}

nav {height: 20px;}

.nav a:hover {
    color: #111;
    text-decoration:underline;}
.nav .active {
    text-decoration:underline;
    color: #111;}

.logo-text1 {
    display:inline-flex;
    font-size: 30px;
    letter-spacing: 3px;
    color:blue;}
.logo-text:hover {
  transform: scale(1.05);}
.logo-text2 {color:red;letter-spacing: -0.0rem;}

.nav__link {
    font-size: 15px;
    margin-left: 20px;

}
.logoimage{margin-right:10px;}
.home-links a {margin-right: 1rem;}
.snipcart-checkout.nav__link.active--exact.active {
  text-decoration: none;}

/*
.special-circle {
  position:absolute;
  background-image: url(https://d2ekejdl2j2kuy.cloudfront.net/images/homepage/floating-figures/UGC-d2b55091.svg);
  background-repeat:none;
  top:20px;
  left:150px;
  width: 115px;
  height:115px;
  background-size:100%;
}
*/

@media only screen and (max-width: 900px) {
  .header {
    flex-direction: column;
    height:110px;}
 
  nav {margin-bottom: 30px;} 

}
</style>


