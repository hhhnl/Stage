<template>
  <Head />
  <div class="gbox">
    <HeadBack2>Promo</HeadBack2>

    <div class="grid gap-2 mt-2">
      <div class="mb-12" v-for="(item, idx) in 10" :key="idx">
        <img
          src="/images/image/banner.png"
          class="w-full block mb-2 rounded-md"
          alt=""
        />
        <div class="text-xl text-(--color4) font-bold mb-2">
          Biggest Welcome Bonus Ever!
        </div>
        <p class="text-(--color)">
          Biggest Bonus Ever for the first timer who join with us, enjoy the
          388% Welcome bonus up to RM1,088.
        </p>
      </div>
    </div>
  </div>
  <Foot />
</template>

<script setup>
import Head from "@/components/Head.vue";
import Foot from "@/components/Foot.vue";
import HeadBack2 from "@/components/HeadBack2.vue";
</script>

<style scoped lang="scss"></style>
