<template>
  <button @click="navigateBack" class="w-34 bg-slate-300 rounded-full p-2 m-4">
    <i class="fa-solid fa-chevron-left mr-2"></i>Back
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateBack = () => {
  router.push(`/`);
};
</script>
