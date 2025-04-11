<template>
  <div class="font-bold text-xl text-[#fff] flex items-center gap-2">
    <div class="bg-(--bg7) rounded-md p-0.5" @click="router.back()">
      <i class="text-(--color2) stroke-(--color2)">
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 36L19 24L31 12"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </i>
    </div>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped lang="scss"></style>
