<template>
  <Head />
  <div class="gbox">
    <div class="font-bold text-xl text-[#fff] flex items-center gap-2">
      <div class="bg-(--bg7) rounded-md p-0.5">
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
      <span>Promo</span>
    </div>

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
</script>

<style scoped lang="scss"></style>
