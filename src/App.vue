<script setup>
</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/work">Work</RouterLink>
    |
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <RouterView />
</template>