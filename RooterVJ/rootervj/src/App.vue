<script>
export default {
  name: 'App'
}
</script>

<template>
<div class="container">
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Unidad III</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Calculadora 2</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Calculadora 1</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/horario">Horario</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recorrido1">Recorrido</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/eventos1">Eventos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/papa">Props</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


      <router-view></router-view>
   </div>
  </div>
</template>

<style>

</style>
