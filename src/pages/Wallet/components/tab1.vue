<template>
  <div class="text-(--color3) flex text-center mt-5 border-b border-(--bg12)">
    <div
      class="flex-1 pb-1"
      v-for="(item, idx) in tabList"
      :key="idx"
      :class="{ tabs: currentTab === item.name }"
      @click="clickTab(item, idx)"
    >
      {{ item.name }}
    </div>
  </div>

  <div>
    <div class="mb-3 mt-3">
      <p class="text-(--color6) text-sm mb-2">
        选择银行<span class="text-(--color2) ml-1">*</span>
      </p>
      <div>
        <uSelect />
      </div>
    </div>
    <div class="mb-15">
      <p class="text-(--color6) text-sm mb-2">
        存款金额<span class="text-(--color2) ml-1">*</span>
      </p>
      <div>
        <uInput />
      </div>
      <p class="text-(--color6) text-xs mt-1">最低50/最大30,000</p>
      <p class="text-(--color6) text-xs">每日限额:30,000</p>
    </div>
  </div>

  <button class="gbtn xl">存款</button>
  <p class="text-(--color2) text-sm text-right mt-5 underline">重要提示</p>
</template>

<script setup>
import { ref } from "vue";

const currentTab = ref("银行");
const tabList = ref([
  {
    name: "银行",
  },
  {
    name: "电子钱包",
  },
]);
const clickTab = (item) => {
  if (currentTab.value === item.name) return;
  currentTab.value = item.name;
};
</script>

<style scoped lang="scss">
.tabs {
  color: var(--color2);
  border-bottom: 1px solid var(--color2);
}
</style>
