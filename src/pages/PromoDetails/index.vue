<template>
  <Head />
  <div class="gbox pb-20">
    <HeadBack2>Promo</HeadBack2>

    <img
      src="/images/image/banner.png"
      class="w-full block rounded-md mt-3"
      alt=""
    />
    <div class="text-(--color4) text-xl mt-3">欢迎奖金高达 888 TON！</div>
    <p class="text-(--color6) mt-1">
      今天首次存入 TON，即可获得高达 888 TON 的奖金！
    </p>
    <div>
      <div class="text-(--color4) mt-6 mb-3">Event Details:</div>
      <div
        class="text-(--color4) grid grid-cols-1 gap-[1px] rounded-md tables border border-(--border4) overflow-hidden text-center items-center text-sm bg-(--border4)"
      >
        <div class="flex gap-[1px]" v-for="(item, idx) in 5" :key="idx">
          <div class="w-1/2 text-(--color6) bg-(--bg9) py-1.5">
            Applicable Games/Products
          </div>
          <div
            class="w-1/2 text-(--color4) bg-(--bg9) py-1.5 flex items-center justify-center"
          >
            Slot only
          </div>
        </div>
      </div>
    </div>
    <div class="text-(--color4) my-4">How To Apply:</div>
    <p class="text-(--color6)">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure
      laudantium modi? Nam distinctio aliquid tenetur dicta eveniet deserunt
      earum vero maiores at facilis, laudantium praesentium ea molestias harum
      sed?
    </p>
    <div class="text-(--color4) my-4">Terms &amp; Conditions:</div>
    <p class="text-(--color6)">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure
      laudantium modi? Nam distinctio aliquid tenetur dicta eveniet deserunt
      earum vero maiores at facilis, laudantium praesentium ea molestias harum
      sed?
    </p>
  </div>

  <Foot />
</template>

<script setup>
import Head from "@/components/Head.vue";
import HeadBack2 from "@/components/HeadBack2.vue";
import Foot from "@/components/Foot.vue";
</script>

<style scoped lang="scss"></style>
