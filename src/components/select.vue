<template>
  <div
    class="w-full bg-(--bg8) text-(--color4) text-sm/[2.8em] px-2 border border-(--border4) rounded-md flex items-center justify-between relative"
    @click="show = !show"
  >
    <span v-if="model">{{ data?.name }}</span>
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
        :class="{ 'bg-(--color2)': model === item.value }"
        v-for="(item, idx) in option"
        :key="idx"
        @click.stop="clickItem(item)"
      >
        <span>{{ item.name }}</span>
        <img
          v-if="model === item.value"
          src="/images/icon/check.png"
          class="size-3"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "请选择",
  },
  option: {
    type: Array,
    default: () => [
      {
        name: "AmBank",
        value: "AmBank",
      },
      {
        name: "AmBank22",
        value: "AmBank22",
      },
    ],
  },
});

const model = defineModel();

const emit = defineEmits(["update:modelValue"]);

const show = ref(false);

const data = computed(() => {
  return props.option.find((item) => item.value === model.value);
});

const clickItem = (item) => {
  model.value = item.value;
  show.value = false;
};
</script>

<style scoped lang="scss"></style>
