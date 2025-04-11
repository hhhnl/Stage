<template>
  <Head />
  <div class="gbox">
    <HeadBack2>Games</HeadBack2>

    <div class="my-4">
      <uSelect :option="option" v-model="select"></uSelect>
    </div>

    <div class="grid grid-cols-2 gap-4 text-(--color4) pb-20">
      <div v-for="(item, idx) in 10" :key="idx">
        <img
          class="w-full block rounded-md"
          src="/images/image/banner2.png"
          alt=""
        />
        <div class="font-bold mt-2">Blackjack</div>
        <p class="text-sm text-(--color)">SA Gaming</p>
      </div>
    </div>
  </div>

  <Foot />
</template>

<script setup>
import Head from "@/components/Head.vue";
import HeadBack2 from "@/components/HeadBack2.vue";
import Foot from "@/components/Foot.vue";
import { ref } from "vue";

const select = ref("All");

const option = [
  {
    name: "All Providers",
    value: "All",
  },
  {
    name: "111111",
    value: "AmBank",
  },
  {
    name: "222222",
    value: "AmBank22",
  },
];
</script>

<style scoped lang="scss"></style>
