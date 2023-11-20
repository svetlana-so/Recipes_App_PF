<template>
  <button class="favorite-button" type="button">❤️</button>
</template>

<style scoped>
.favorite-button {
  opacity: 0.6;
  filter: saturate(0);
  cursor: pointer;
  padding: 1rem;
  font-size: 2.5rem;
}
.favorite-button:hover {
  color: red;
}
</style>
