<template>
  <div class="container mt-4">
    <h2 class="text-center">Horario de Clases</h2>
    <table class="table table-striped table-hover table-bordered">
      <thead class="table-dark">
        <tr>
          <th v-for="field in fields" :key="field.key">{{ field.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fila in horarioAcademico" :key="fila.hora">
          <td v-for="field in fields" :key="field.key">
            <span v-if="fila[field.key]">{{ fila[field.key] }}</span>
            <br>
            <span v-if="fila[field.key + 'Docente']" class="text-muted">{{ fila[field.key + 'Docente'] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'hora', label: 'Hora' },
        { key: 'lunes', label: 'Lunes' },
        { key: 'martes', label: 'Martes' },
        { key: 'miercoles', label: 'Miércoles' },
        { key: 'jueves', label: 'Jueves' },
        { key: 'viernes', label: 'Viernes' }
      ],
      horarioAcademico: [
        { hora: '11:00-13:00', lunes: 'Redes de Computadoras', lunesDocente: 'Ing. Astrid', martes: '', martesDocente: '', miercoles: 'Redes de Computadoras', miercolesDocente: 'Ing. Astrid', jueves: 'Lenguajes y Autómatas I', juevesDocente: 'Ing. Ivor', viernes: 'Lenguajes y Autómatas I', viernesDocente: 'Ing. Ivor' },
        { hora: '12:00-14:00', lunes: '', lunesDocente: '', martes: 'Lenguajes y Autómatas I', martesDocente: 'Ing. Ivor', miercoles: '', miercolesDocente: '', jueves: '', juevesDocente: '', viernes: '', viernesDocente: '' },
        { hora: '13:00-15:00', lunes: 'Ingeniería de Software', lunesDocente: '', martes: '', martesDocente: '', miercoles: '', miercolesDocente: '', jueves: 'Administración de Bases de Datos', juevesDocente: 'Ing. Miguel Ángel', viernes: 'Redes de Computadoras', viernesDocente: 'Ing. Astrid' },
        { hora: '14:00-15:00', lunes: '', lunesDocente: '', martes: '', martesDocente: '', miercoles: '', miercolesDocente: '', jueves: '', juevesDocente: '', viernes: 'Ingeniería de Software', viernesDocente: '' },
        { hora: '15:00-17:00', lunes: 'Programación Web', lunesDocente: 'Ing. Josué', martes: 'Taller de Sistemas Operativos', martesDocente: 'Ing. Jorge', miercoles: 'Ingeniería de Software', miercolesDocente: '', jueves: 'Taller de Sistemas Operativos', juevesDocente: 'Ing. Jorge', viernes: 'Programación Web', viernesDocente: 'Ing. Josué' },
        { hora: '16:00-17:00', lunes: '', lunesDocente: '', martes: '', martesDocente: '', miercoles: '', miercolesDocente: '', jueves: '', juevesDocente: '', viernes: 'Administración de Bases de Datos', viernesDocente: 'Ing. Miguel Ángel' },
        { hora: '17:00-19:00', lunes: 'Administración de Bases de Datos', lunesDocente: 'Ing. Miguel Ángel', martes: 'Lenguajes de Interfaz', martesDocente: 'Ing. Lucía', miercoles: '', miercolesDocente: '', jueves: 'Lenguajes de Interfaz', juevesDocente: 'Ing. Lucía', viernes: '', viernesDocente: '' }
      ]
    };
  }
};
</script>

<style>
.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.text-muted {
  font-size: 0.9em;
  color: #084981;
}
</style>