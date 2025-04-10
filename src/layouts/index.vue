<template>
  <!-- layouts -->
  <router-view />
  <Foot />

  <FloatIcon />
  <Tab />
</template>

<script setup>
import Tab from "./components/tab.vue";
import FloatIcon from "./components/floatIcon.vue";
import Foot from "@/components/Foot.vue";
</script>

<style scoped lang="scss"></style>
