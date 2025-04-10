<template>
  <div class="h-[50px]"></div>
  <div
    class="flex justify-evenly items-center w-[90%] mx-auto text-(--color) bg-(--bg) h-[50px] rounded-t-xl fixed bottom-0 left-[50%] translate-x-[-50%] px-2 border-t border-x border-(--border)"
  >
    <div
      v-for="(item, idx) in tabs"
      :key="idx"
      class="cursor-pointer"
      @click="switchTab(item, idx)"
    >
      <img
        v-if="currentTab !== item.name"
        class="size-5 block mx-auto"
        :src="item.icon"
        alt=""
      />
      <img
        v-else
        class="size-5 block mx-auto"
        :src="item.selectedIcon"
        alt=""
      />
      <span
        class="block mx-auto text-xs mt-0.5"
        :class="{ 'text-(--color2)': item.name === currentTab }"
        >{{ item.title }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const currentTab = ref("");

// console.log(route.matched[1].name);
currentTab.value = route.matched[1]?.name;

const tabs = [
  {
    icon: "/images/icon_tabber/home.png",
    selectedIcon: "/images/icon_tabber/home1.png",
    title: "Home",
    name: "Home",
  },
  {
    icon: "/images/icon_tabber/diamond.png",
    selectedIcon: "/images/icon_tabber/diamond1.png",
    title: "Promos",
    name: "Promos",
  },
  {
    icon: "/images/icon_tabber/wallet-three.png",
    selectedIcon: "/images/icon_tabber/wallet-three1.png",
    title: "Wallet",
    name: "Wallet",
  },
  {
    icon: "/images/icon_tabber/swimming-ring.png",
    selectedIcon: "/images/icon_tabber/swimming-ring1.png",
    title: "VIP",
    name: "VIP",
  },
  {
    icon: "/images/icon_tabber/user.png",
    selectedIcon: "/images/icon_tabber/user1.png",
    title: "Profile",
    name: "Profile",
  },
];

const switchTab = (item, idx) => {
  if (currentTab.value == item.name) return;
  currentTab.value = item.name;
  router.push({
    name: item.name,
  });
};
</script>

<style scoped lang="scss"></style>
