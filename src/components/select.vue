<template>
  <div
    class="w-full bg-(--bg8) text-(--color4) text-sm/[2.8em] px-2 border border-(--border4) rounded-md flex items-center justify-between relative"
    @click="show = !show"
  >
    <span v-if="data">{{ data }}</span>
    <span v-else class="text-(--color5)">{{ placeholder }}</span>
    <div>
      <img src="/images/svg/select.svg" class="size-3" alt="" />
    </div>
    <div
      class="bg-(--bg8) p-2 absolute bottom-0 left-0 rounded-md w-full transform-[translateY(100%)] z-5 text-(--color4)"
      v-if="show"
    >
      <div
        class="text-[#fff] px-2 rounded-md flex items-center justify-between"
        :class="{ 'bg-(--color2)': data === item.name }"
        v-for="(item, idx) in list"
        :key="idx"
        @click.stop="clickItem(item)"
      >
        <span>{{ item.name }}</span>
        <img
          v-if="data === item.name"
          src="/images/icon/check.png"
          class="size-3"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "请选择",
  },
});

const data = ref("");
const show = ref(false);

const list = ref([
  {
    name: "AmBank",
  },
  {
    name: "AmBank22",
  },
]);

const clickItem = (item) => {
  data.value = item.name;
  show.value = false;
  console.log(show.value);
};
</script>

<style scoped lang="scss"></style>
