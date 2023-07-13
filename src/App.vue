<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Logo from "./components/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>

<template>
  <Logo />
  <!-- <div class="head"> -->
  <!-- <RouterLink to="/"> <Logo /></RouterLink> -->

  <!-- <nav>
      <div class="box">
        <RouterLink to="/post-product">PRODUCTOS</RouterLink>
        <RouterLink to="/about">ABOUT</RouterLink>
        <RouterLink to="/login">INGRESAR</RouterLink>
      </div>
    </nav> -->
  <!-- </div> -->
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.head {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: white;
  width: 100%;
}
.content {
  margin-top: 100px;
}

.box {
  width: 100%;
  background-color: #0cb6e0;
  height: 27px;
  border: none;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: black;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  margin: 3px 10px 0 10px;
  font-size: 14px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
  }
}
</style>
