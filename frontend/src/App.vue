<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/stores">Магазины</router-link>
      <router-link to="/cars">Автомобили</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
}
</style>
