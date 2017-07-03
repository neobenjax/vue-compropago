<template>
  <div id="app" class="full">
    <encabezado></encabezado>
    <home></home>
    <pie></pie>
  </div>
</template>

<script>
import Encabezado from './components/Encabezado'
import Home from './components/Home'
import Pie from './components/Pie'

export default {
  name: 'app',
  components: {
    Encabezado,
    Home,
    Pie
  }
}
</script>
