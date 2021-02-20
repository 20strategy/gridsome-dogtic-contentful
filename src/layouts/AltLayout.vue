<template>
  <div class="layout">
    <header class="header">
      <strong>
        
        <g-link exact to="/"><g-image class="logoimage" alt="logo" src="~/dogtic3.svg" width="120" /></g-link>
      </strong>
      <nav class="nav">
        
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
        <g-link class="nav__link" to="/products/">Products</g-link>
       
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style >
@font-face {
  font-family: Jost;
  src: url('../assets/Jost-Regular.ttf');
  font-weight: normal;
}
body {
  font-family: 'Jost','Helvetica','Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #ffffdb ;
}
.active {
    color: #f66;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.logoimage{
  margin-right:10px;
}
</style>
