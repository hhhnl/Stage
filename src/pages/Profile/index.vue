<template>
  <HeadBack>Profile</HeadBack>

  <div
    class="text-(--color3) border-b border-(--border2) flex text-center mt-5"
  >
    <div
      class="flex-1 py-1"
      v-for="(item, idx) in tabs"
      :key="idx"
      :class="{ 'text-(--color2) border-b': currentTab == item.name }"
      @click="clickTab(item)"
    >
      {{ item.title }}
    </div>
  </div>

  <div class="gbox py-5">
    <router-view />
  </div>
</template>

<script setup>
import HeadBack from "@/components/HeadBack.vue";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const currentTab = ref("");
currentTab.value = route.matched[2]?.name;

const tabs = [
  {
    name: "Settings",
    title: "Settings",
  },
  {
    name: "KYC",
    title: "KYC",
  },
];

const clickTab = (item) => {
  if (item.name == currentTab.value) return;
  currentTab.value = item.name;
  router.push({ name: item.name });
};
</script>

<style scoped lang="scss"></style>
