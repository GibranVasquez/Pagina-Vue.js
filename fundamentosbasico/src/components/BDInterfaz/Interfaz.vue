<template>
    <div>
      <h1>Registro en Facultad</h1>
      <label>Tipo de usuario:</label>
      <select v-model="tipoUsuario">
        <option value="alumno">Alumno</option>
        <option value="profesor">Profesor</option>
      </select>
  
      <div v-if="tipoUsuario === 'alumno'">
        <h2>Registrar Alumno</h2>
        <label>ID Alumno:</label>
        <input v-model="alumno.idAlumno" type="text" />
        <label>NIF:</label>
        <input v-model="alumno.NIF" type="text" />
        <label>Nombre:</label>
        <input v-model="alumno.nombre" type="text" />
        <label>Apellido 1:</label>
        <input v-model="alumno.apellido1" type="text" />
        <label>Apellido 2:</label>
        <input v-model="alumno.apellido2" type="text" />
        <label>Email:</label>
        <input v-model="alumno.email" type="email" />
        <label>Dirección:</label>
        <input v-model="alumno.direccion" type="text" />
        <label>Código Postal:</label>
        <input v-model="alumno.codigoPostal" type="number" />
        <label>Municipio:</label>
        <input v-model="alumno.municipio" type="text" />
        <label>Provincia:</label>
        <input v-model="alumno.provincia" type="text" />
        <label>Beca (SI/NO):</label>
        <input v-model="alumno.beca" type="text" />
        <button @click="agregarAlumno">Agregar Alumno</button>
      </div>
  
      <div v-if="tipoUsuario === 'profesor'">
        <h2>Registrar Profesor</h2>
        <label>ID Profesor:</label>
        <input v-model="profesor.idProfesor" type="text" />
        <label>NIF:</label>
        <input v-model="profesor.NIF" type="text" />
        <label>Nombre:</label>
        <input v-model="profesor.nombre" type="text" />
        <label>Apellido 1:</label>
        <input v-model="profesor.apellido1" type="text" />
        <label>Apellido 2:</label>
        <input v-model="profesor.apellido2" type="text" />
        <label>Email:</label>
        <input v-model="profesor.email" type="email" />
        <label>Dirección:</label>
        <input v-model="profesor.direccion" type="text" />
        <label>Código Postal:</label>
        <input v-model="profesor.codigoPostal" type="number" />
        <label>Municipio:</label>
        <input v-model="profesor.municipio" type="text" />
        <label>Provincia:</label>
        <input v-model="profesor.provincia" type="text" />
        <label>Categoría:</label>
        <input v-model="profesor.categoria" type="text" />
        <button @click="agregarProfesor">Agregar Profesor</button>
      </div>
  
      <h2>Lista de Alumnos</h2>
      <ul>
        <li v-for="alumno in alumnos" :key="alumno.idAlumno">
          {{ alumno.nombre }} {{ alumno.apellido1 }} ({{ alumno.email }})
        </li>
      </ul>
  
      <h2>Lista de Profesores</h2>
      <ul>
        <li v-for="profesor in profesores" :key="profesor.idProfesor">
          {{ profesor.nombre }} {{ profesor.apellido1 }} ({{ profesor.email }})
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tipoUsuario: "alumno",
        alumno: {
          idAlumno: "",
          NIF: "",
          nombre: "",
          apellido1: "",
          apellido2: "",
          email: "",
          direccion: "",
          codigoPostal: "",
          municipio: "",
          provincia: "",
          beca: ""
        },
        profesor: {
          idProfesor: "",
          NIF: "",
          nombre: "",
          apellido1: "",
          apellido2: "",
          email: "",
          direccion: "",
          codigoPostal: "",
          municipio: "",
          provincia: "",
          categoria: ""
        },
        alumnos: [],
        profesores: []
      };
    },
    methods: {
      agregarAlumno() {
        this.alumnos.push({ ...this.alumno });
        this.alumno = {
          idAlumno: "",
          NIF: "",
          nombre: "",
          apellido1: "",
          apellido2: "",
          email: "",
          direccion: "",
          codigoPostal: "",
          municipio: "",
          provincia: "",
          beca: ""
        };
      },
      agregarProfesor() {
        this.profesores.push({ ...this.profesor });
        this.profesor = {
          idProfesor: "",
          NIF: "",
          nombre: "",
          apellido1: "",
          apellido2: "",
          email: "",
          direccion: "",
          codigoPostal: "",
          municipio: "",
          provincia: "",
          categoria: ""
        };
      }
    }
  };
  </script>
  
  <style>
    div {
      margin: 10px;
    }
  </style>
  