<template>
  <div class="contenido">
    <div class="contenido-centrado">
      <serie></serie>
    </div>
  </div>
</template>

<script>
import Serie from './../components/Serie'

export default {
  name: 'home',
  components: {
    Serie
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
