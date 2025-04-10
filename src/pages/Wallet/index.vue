<template>
  <div class="min-h-[calc(100vh-57px)]">
    <!-- 头部 -->
    <HeadBack>
      钱包
      <template #right>
        <div>
          <div
            class="flex items-center gap-2 text-(--color2) border border-(--color2) p-1 rounded-lg"
          >
            <i class="size-5"
              ><svg
                width=""
                height=""
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 14.25V3.75H16.5V6.36251H15.25L11.65 9.96251H4.4625V11.2125H10.4L7.36252 14.25H1.5ZM4.4625 7.9875H8.85V6.73749H4.4625V7.9875ZM9.87501 15.75V14.6875L14.9375 9.62501L16 10.6875L10.9375 15.75H9.87501ZM16.475 10.2125L15.4125 9.15L16.125 8.4375C16.1875 8.375 16.2542 8.34375 16.325 8.34375C16.3958 8.34375 16.4625 8.375 16.525 8.4375L17.1625 9.075C17.225 9.1375 17.2562 9.2125 17.2562 9.3C17.2562 9.3875 17.225 9.4625 17.1625 9.525L16.475 10.2125Z"
                  fill="currentColor"
                ></path></svg></i
            ><span class="text-base">历史</span>
          </div>
        </div>
      </template>
    </HeadBack>

    <div class="p-4">
      <div
        class="bg-(--bg12) rounded-md text-(--color6) font-bold flex text-center overflow-hidden"
      >
        <div
          class="flex-1 py-2 rounded-md"
          v-for="(item, idx) in tabs"
          :key="idx"
          :class="{ active: currentTab === item.name }"
          @click="clickTab(item, idx)"
        >
          {{ item.name }}
        </div>
      </div>

      <component
        :is="currentTab === '存款' ? tab1 : currentTab === '提款' ? tab2 : tab3"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import tab1 from "./components/tab1.vue";
import tab2 from "./components/tab2.vue";
import tab3 from "./components/tab3.vue";
import HeadBack from "@/components/HeadBack.vue";


const currentTab = ref("存款");
const tabs = [
  {
    name: "存款",
  },
  {
    name: "提款",
  },
  {
    name: "转账",
  },
];

const clickTab = (item, idx) => {
  if (currentTab.value === item.name) return;
  currentTab.value = item.name;
};
</script>

<style scoped lang="scss">
.active {
  color: var(--color4);
  background: linear-gradient(180deg, #de3c2d, #830b00);
  border: 1px solid var(--color2);
}
</style>
