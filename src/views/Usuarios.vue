<template>
  <div class="card">
    <div class="card-header bg-info text-white">Usuarios desde MockAPI</div>
    <div class="card-body">
      <div v-if="this.sinUsuario" class="text-center">
        <div>
          <div class="card-header bg-warning text-white">Cargando</div>
        </div>
      </div>
      <div v-else>
        <table class="table table-bordered table-hover">
          <thead class="table-light">
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id">
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.telefono }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuarios: [],
      sinUsuario: true,
    };
  },
  mounted() {
    axios
      .get("https://6845e00efc51878754dc6d84.mockapi.io/usuarios")
      .then((response) => {
        this.usuarios = response.data;
        this.sinUsuario = false;
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  },
};
</script>
