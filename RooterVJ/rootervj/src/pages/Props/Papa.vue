<script setup>
import { ref } from 'vue';
import hijo1 from './Hija1.vue';
import hijo2 from './Hija2.vue';

defineProps({ nombre: String });
</script>

<template>
  <div class="container text-center mt-4">
    <h1 class="text-primary fw-bold display-3" style="font-family: 'Courier New', monospace; text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);">
      <i class="fas fa-user"></i> Soy el Componente Padre
    </h1>
    <div class="row justify-content-between mb-5">
      <div class="col-md-5 mb-5">
        <div class="row align-items-center bg-gradient p-4 rounded shadow" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4);">
          <i class="fas fa-child fa-2x me-3 text-dark"></i>
          <hijo1 class="mt-4 p-3 border rounded bg-light text-dark shadow-sm" edad="10" />
        </div>
      </div>
      <div class="col-md-5 mb-5">
        <div class="row align-items-center bg-gradient p-4 rounded shadow" style="background: linear-gradient(135deg, #a1c4fd, #c2e9fb);">
          <i class="fas fa-child fa-2x me-3 text-dark"></i>
          <hijo2 class="mt-4 p-3 border rounded bg-light text-dark shadow-sm" edad="4" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';

.container {
  max-width: 800px;
}

h1 {
  font-family: 'Courier New', monospace;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
</style>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
  }
};
</script>
