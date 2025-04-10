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
        v-if="currentTab !== idx"
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
        :class="{ 'text-(--color2)': idx === currentTab }"
        >{{ item.title }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const currentTab = ref(0);

const tabs = [
  {
    icon: "/images/icon_tabber/home.png",
    selectedIcon: "/images/icon_tabber/home1.png",
    title: "Home",
    path: "/home",
  },
  {
    icon: "/images/icon_tabber/diamond.png",
    selectedIcon: "/images/icon_tabber/diamond1.png",
    title: "Promos",
    path: "/home",
  },
  {
    icon: "/images/icon_tabber/wallet-three.png",
    selectedIcon: "/images/icon_tabber/wallet-three1.png",
    title: "Wallet",
    path: "/home",
  },
  {
    icon: "/images/icon_tabber/swimming-ring.png",
    selectedIcon: "/images/icon_tabber/swimming-ring1.png",
    title: "VIP",
    path: "/home",
  },
  {
    icon: "/images/icon_tabber/user.png",
    selectedIcon: "/images/icon_tabber/user1.png",
    title: "Profile",
    path: "/home",
  },
];

const switchTab = (item, idx) => {
  currentTab.value = idx;
  // router.push(item.path);
};
</script>

<style scoped lang="scss"></style>
