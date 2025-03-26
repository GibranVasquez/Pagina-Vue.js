<script setup>
import {ref} from 'vue'
const bienvenido = ref("Bienvenido a la seccion de Condicionales")
const nombre = ref("Gibran Jesus")
const Apellidos =  ref("Vasquez Reyes")
</script>

<template>
    <div class="container">
        <h2 class="text-center">{{ bienvenido }}</h2>
        <div class="row">
            <div class="col-md-6">
                <h6 class="text-center">{{ nombre }}</h6>
                <h6 class="text-center">{{ Apellidos }}</h6>
            </div>
        </div>
    </div>
</template>