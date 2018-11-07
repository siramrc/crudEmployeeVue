<template>
  <div id="app">
    <div class="container">
    <router-view/>
  </div>
  </div>
</template>

<script>
import Principal from './components/Principal';

export default {
  name: 'app',
  components: {
    Principal
  }
}
</script>
