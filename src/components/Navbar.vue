<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">TP3</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Formulario</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/usuarios" class="nav-link">Usuarios</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navbar",
  props: [],
  data() {
    return {};
  },
  methods: {
  },
  computed: {},
};
</script>

<style scoped></style>
