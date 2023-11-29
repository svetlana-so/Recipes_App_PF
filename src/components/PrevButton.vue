<template>
  <button
    @click="navigateBack"
    class="w-30 bg-slate-300 rounded-full p-4 m-4 md:w-40"
  >
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
