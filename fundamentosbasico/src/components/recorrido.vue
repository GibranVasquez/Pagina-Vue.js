
<template>
    <div class="container mt-5">
      <h3 class="text-center bg-light text-dark py-3 rounded shadow">Lista de Estudiantes</h3>
      <div class="table-responsive">
        <table class="table table-striped table-bordered mt-4 shadow text-center">
          <thead class="table-light">
            <tr>
              <th># Control</th>
              <th>Nombre</th>
              <th>Carrera</th>
              <th>Pasatiempo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alumno in alumnos" :key="alumno.id">
              <td>{{ alumno.id }}</td>
              <td>{{ alumno.nombre }}</td>
              <td>{{ alumno.carrera }}</td>
              <td>{{ alumno.pasatiempo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        alumnos: [
          { id: 1001, nombre: 'Alejandro', carrera: 'Ingeniería en Software', pasatiempo: 'Escalada' },
          { id: 1002, nombre: 'Beatriz', carrera: 'Diseño Gráfico', pasatiempo: 'Ilustración' },
          { id: 1003, nombre: 'Carlos', carrera: 'Administración', pasatiempo: 'Ciclismo' },
          { id: 1004, nombre: 'Diana', carrera: 'Psicología', pasatiempo: 'Escritura' },
          { id: 1005, nombre: 'Eduardo', carrera: 'Medicina', pasatiempo: 'Fotografía' },
          { id: 1006, nombre: 'Fernanda', carrera: 'Arquitectura', pasatiempo: 'Pintura' },
          { id: 1007, nombre: 'Gabriel', carrera: 'Matemáticas', pasatiempo: 'Ajedrez' },
          { id: 1008, nombre: 'Hugo', carrera: 'Biología', pasatiempo: 'Senderismo' },
          { id: 1009, nombre: 'Isabel', carrera: 'Derecho', pasatiempo: 'Teatro' },
          { id: 1010, nombre: 'Javier', carrera: 'Física', pasatiempo: 'Astronomía' }
        ]
      };
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 950px;
    margin: auto;
  }
  .table {
    border-radius: 10px;
    overflow: hidden;
    border-collapse: collapse;
    border-spacing: 0;
  }
  th, td {
    padding: 15px;
    text-align: center;
    border: 1px solid #dee2e6;
  }
  th {
    background-color: #f8f9fa !important;
    color: black;
    text-transform: uppercase;
  }
  tr:hover {
    background-color: #f1f1f1;
  }

  
  </style>
