<template>
  <div class="card">
    <div class="card-header bg-primary text-white">
      Formulario con Validaciones
    </div>
    <div class="card-body">
      <form @submit.prevent="enviarUsuario()">
        <div class="mb-3">
          <label for="nombre">Nombre</label>
          <input
            id="nombre"
            v-model.trim="formData.nombre"
            @input="formDirty.nombre = true"
            type="text"
            class="form-control"
          />
          <div v-if="errorNombre.mostrar" class="alert alert-danger mt-1">
            {{ errorNombre.mensaje }}
          </div>
        </div>

        <div class="mb-3">
          <label for="edad">Edad</label>
          <input
            id="edad"
            v-model.number="formData.edad"
            @input="formDirty.edad = true"
            type="number"
            class="form-control"
          />
          <div v-if="errorEdad.mostrar" class="alert alert-danger mt-1">
            {{ errorEdad.mensaje }}
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email</label>
          <input
            id="email"
            v-model.trim="formData.email"
            @input="formDirty.email = true"
            type="email"
            class="form-control"
          />
          <div v-if="errorEmail.mostrar" class="alert alert-danger mt-1">
            {{ errorEmail.mensaje }}
          </div>
        </div>

        <button class="btn btn-success" :disabled="!validarBotonEnvio">
          Enviar
        </button>
      </form>
    </div>

    <div class="card-footer mt-4" v-if="usuarios.length">
      <h5>Usuarios registrados</h5>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(u, index) in usuarios" :key="index">
            <td>{{ u.nombre }}</td>
            <td>{{ u.edad }}</td>
            <td>{{ u.email }}</td>
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
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      usuarios: [],
    };
  },
  methods: {
    getInicialData() {
      return { nombre: "", edad: null, email: "" };
    },
    enviarUsuario() {
      if (this.validarBotonEnvio) {
        this.usuarios.push({ ...this.formData });
        this.formData = this.getInicialData();
        this.formDirty = this.getInicialData();
      }
    },
  },
  computed: {
    errorNombre() {
      let mensaje = "";
      if (!this.formData.nombre) mensaje = "Campo requerido";
      else if (
        this.formData.nombre.length < 5 ||
        this.formData.nombre.length > 15
      )
        mensaje = "Debe tener entre 5 y 15 caracteres";
      return {
        mostrar: mensaje !== "" && this.formDirty.nombre,
        mensaje,
        ok: mensaje === "",
      };
    },
    errorEdad() {
      let mensaje = "";
      if (!this.formData.edad) mensaje = "Campo requerido";
      else if (this.formData.edad < 18 || this.formData.edad > 120)
        mensaje = "Debe estar entre 18 y 120 años";
      return {
        mostrar: mensaje !== "" && this.formDirty.edad,
        mensaje,
        ok: mensaje === "",
      };
    },
    errorEmail() {
      let mensaje = "";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email) mensaje = "Campo requerido";
      else if (!emailRegex.test(this.formData.email))
        mensaje = "Formato de email no válido";
      return {
        mostrar: mensaje !== "" && this.formDirty.email,
        mensaje,
        ok: mensaje === "",
      };
    },
    validarBotonEnvio() {
      return this.errorNombre.ok && this.errorEdad.ok && this.errorEmail.ok;
    },
  },
};
</script>
