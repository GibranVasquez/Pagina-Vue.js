<script setup>
import { ref } from 'vue'

defineProps({
nombre: String
})

</script>
<template>
<h1>{{ nombre }}</h1>
</template>
<style scoped></style>