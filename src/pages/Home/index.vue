<template>
  <Head />

  <!-- 轮播图 -->
  <div class="gbox">
    <div class="rounded-md overflow-hidden">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        :modules="modules"
        :pagination="{ el: '.swiper-pagination' }"
        loop
        autoplay
        effect="creative"
        :creativeEffect="creativeEffect"
        :speed="1000"
      >
        <swiper-slide v-for="(item, idx) in swieprList" :key="idx">
          <img
            @click="clickSwiper(item)"
            src="/images/image/banner.png"
            alt=""
            class="block w-full"
          />
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
    </div>

    <!-- list -->
    <div class="text-[#fff] pt-1">
      <div class="mt-5" v-for="(item, idx) in list" :key="idx">
        <div class="font-bold text-xl mb-2 flex items-center justify-between">
          <div class="flex items-center gap-1">
            <img
              class="size-4"
              src="/images/icon/endocrine.png"
              alt=""
            /><span>{{ item.title }}</span>
          </div>
          <!-- 查看更多 -->
          <button
            class="gbtn mini"
            v-if="idx != 0"
            @click="router.push({ name: 'Games' })"
          >
            查看更多
          </button>
        </div>
        <div class="w-full overflow-x-auto">
          <div class="gap-2 whitespace-nowrap">
            <div
              class="w-[148px] inline-block mr-2 last:mr-0"
              v-for="(item, idx) in item.list"
              :key="idx"
            >
              <img
                class="block rounded-lg"
                src="/images/image/banner2.png"
                alt=""
              />
              <div class="font-bold mt-2">Blackjack</div>
              <p class="text-(--color) text-sm">SA Gaming</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 底部 -->
  <div class="text-[#fff] mt-5">
    <div class="flex items-center gap-1 font-bold text-xl mb-2 px-4">
      <img class="size-4" src="/images/icon/endocrine.png" alt="" /><span
        >PROVIDER</span
      >
    </div>
    <div class="w-full overflow-x-auto px-4">
      <div class="flex items-center gap-[4px]" style="width: 516px">
        <img
          class="w-[100px] block bg-(--bg6) overflow-hidden rounded-md px-2 border border-(--border3)"
          src="/images/svg/sa-gaming-DLPh0KMk.svg"
          alt=""
        /><img
          class="w-[100px] block bg-(--bg6) overflow-hidden rounded-md px-2 border border-(--border3)"
          src="/images/svg/sa-gaming-DLPh0KMk.svg"
          alt=""
        /><img
          class="w-[100px] block bg-(--bg6) overflow-hidden rounded-md px-2 border border-(--border3)"
          src="/images/svg/sa-gaming-DLPh0KMk.svg"
          alt=""
        /><img
          class="w-[100px] block bg-(--bg6) overflow-hidden rounded-md px-2 border border-(--border3)"
          src="/images/svg/sa-gaming-DLPh0KMk.svg"
          alt=""
        /><img
          class="w-[100px] block bg-(--bg6) overflow-hidden rounded-md px-2 border border-(--border3)"
          src="/images/svg/sa-gaming-DLPh0KMk.svg"
          alt=""
        />
      </div>
    </div>
    <div
      class="w-[60%] text-sm/[35px] bg-(--bg6) text-center text-(--color4) border border-(--border3) m-auto my-10"
      @click="router.push({ name: 'Games' })"
    >
      View All Games!
    </div>
  </div>
  <Foot />
</template>

<script setup>
import Head from "@/components/Head.vue";
import Foot from "@/components/Foot.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRouter } from "vue-router";
const router = useRouter();

const modules = [Pagination, Autoplay, EffectCreative];

const creativeEffect = {
  prev: {
    // shadow: true,
    origin: "right",
    translate: ["-20px", 0, 0],
  },
  next: {
    origin: "left top",
    translate: ["100%", 0, 10],
  },
  perspective: true,
};

const swieprList = [
  {
    img: "/images/image/banner.png",
  },
  {
    img: "/images/image/banner.png",
  },
];

const clickSwiper = (item) => {
  router.push({ name: "PromoDetails" });
};

/**
 * LIST 模块
 */
const list = [
  {
    title: "TOP 10",
    list: [
      {
        img: "/images/image/banner.png",
        name: "Blackjack",
        type: "SA Gaming",
      },
      {
        img: "/images/image/banner.png",
        name: "Blackjack",
        type: "SA Gaming",
      },
      {
        img: "/images/image/banner.png",
        name: "Blackjack",
        type: "SA Gaming",
      },
      {
        img: "/images/image/banner.png",
        name: "Blackjack",
        type: "SA Gaming",
      },
    ],
  },
  {
    title: "TOP 10",
    list: [
      {
        img: "/images/image/banner.png",
        name: "Blackjack",
        type: "SA Gaming",
      },
    ],
  },
];
</script>

<style scoped lang="scss">
::v-deep(.swiper-pagination-bullet-active) {
  background: #fff;
}
</style>
