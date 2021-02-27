<template>
  <div class="layout">
    <header class="header">
      <strong>
        
        <g-link exact to="/">
        <span class="logo-text">dogtic.</span>
        <span style="color:red; letter-spacing:1px;">com</span>
        </g-link>
      </strong>
      <nav class="nav">
        
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
        <g-link class="nav__link" to="/products/">Shop</g-link>
       
      </nav>
    </header>
    <slot/>
   <footer>
    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
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

