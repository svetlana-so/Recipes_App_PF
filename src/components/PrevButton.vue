<template>
  <button @click="navigateBack"><i class="fa-solid fa-chevron-left"></i></button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateBack = () => {
  router.push(`/`);
};
</script>
