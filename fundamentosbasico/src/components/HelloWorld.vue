<!----<script setup>
import Nav from './Nav.vue';
import Carrusel from './Carrusel.vue';
import Obje from './Obje.vue';
import Cards from './Cards.vue';
import Form from './Form.vue';
import Carrusel2 from './Carrusel2.vue';

</script>

<template>
  <h1>MOTOS DEPORTIVAS</h1>
  <Nav />
  <Carrusel />
  <Obje />
  <Cards />
  <Form/>
  <Carrusel2/>
 </template>

<style scoped>
</style>
-->

<script setup>
import { ref } from 'vue'
const binevenida = ref ("Binevenidos a la seccion de condicionales");
const nombre = ref ("Gibran Jesus");
const apellidos = ref("Vasquez Reyes")
//defineProps({
  //msg: String,
//})


</script>

<template>
  <div class="container">
    <h2 class="text-center">{{ binevenida }}</h2>
<div class="row">
  <div class="col-md-6">
    <h6>{{ nombre }}</h6>
    <h6>{{ apellidos }}</h6>
  </div>
</div>
  </div>
</template>

<style scoped>
</style>