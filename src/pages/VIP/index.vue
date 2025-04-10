<template>
  <HeadBack>VIP</HeadBack>

  <div class="gbox pb-10">
    <ul
      class="flex items-center justify-around text-xs text-(--color5) border-b border-(--color2) w-full tab"
    >
      <li
        class="py-2"
        v-for="(item, idx) in 5"
        :key="idx"
        :class="{ 'text-(--color2)': idx == 0 }"
      >
        Member
      </li>
    </ul>
    <div class="text-(--color5) text-sm py-5 content">
      <div class="mb-4">
        <div class="fs-7 fw-bold text-light mb-1">Tier Upgrade Requirement</div>
        <div class="d-flex justify-content-between fs-7 text-light">
          <span style="color: #ffe5d1">Minimum Deposit Within 30 days</span
          ><span class="fw-bold">First Deposit</span>
        </div>
      </div>
      <div class="mb-4">
        <div class="fs-7 fw-bold text-light mb-1">
          Tier Maintenance Requirement
        </div>
        <div class="d-flex justify-content-between fs-7 text-light">
          <span style="color: #ffe5d1">Accumulated Turnover Within 90 days</span
          ><span class="fw-bold">-</span>
        </div>
      </div>
      <div class="mb-4">
        <div class="fs-7 fw-bold text-light mb-1">Service Support</div>
        <div class="d-flex justify-content-between fs-7 text-light mb-1">
          <span style="color: #ffe5d1">Maximum Chat Support Wait Time</span
          ><span class="fw-bold">3 mins</span>
        </div>
        <div class="d-flex justify-content-between fs-7 text-light mb-1">
          <span style="color: #ffe5d1">Daily Withdrawal Limit</span
          ><span class="fw-bold">30,000</span>
        </div>
        <div class="d-flex justify-content-between fs-7 text-light mb-1">
          <span style="color: #ffe5d1">Maximum limit per Transaction</span
          ><span class="fw-bold">30,000</span>
        </div>
      </div>
      <div class="mb-4">
        <div class="fs-7 fw-bold text-light mb-1">Rebate</div>
        <div class="d-flex justify-content-between fs-7 text-light mb-1">
          <span style="color: #ffe5d1">Live Casino</span
          ><span class="fw-bold">0.40%</span>
        </div>
        <div class="d-flex justify-content-between fs-7 text-light mb-1">
          <span style="color: #ffe5d1">Sports</span
          ><span class="fw-bold">0.40%</span>
        </div>
        <div class="d-flex justify-content-between fs-7 text-light mb-1">
          <span style="color: #ffe5d1">Slots</span
          ><span class="fw-bold">0.50%</span>
        </div>
      </div>
      <div class="mb-4">
        <div class="fs-7 fw-bold text-light mb-1">Gift &amp; Treats</div>
        <div class="d-flex justify-content-between fs-7 text-light mb-1">
          <span style="color: #ffe5d1">Birthday Bonus</span
          ><span class="fw-bold">38</span>
        </div>
        <div class="d-flex justify-content-between fs-7 text-light mb-1">
          <span style="color: #ffe5d1">Weekly Rescue Bonus</span
          ><span class="fw-bold">288</span>
        </div>
        <div class="d-flex justify-content-between fs-7 text-light mb-1">
          <span style="color: #ffe5d1">Special Birthday Gift</span
          ><span class="fw-bold">-</span>
        </div>
      </div>
    </div>
    <p class="text-(--color5) text-sm">
      Red8 reserves the right to alter, cancel, terminate or suspend the
      Redemption or any part thereof or any part of the applicable terms and
      conditions from time to time, with or without any prior notice. Users
      participate in the VIP program must accept and comply with the above rules
      and terms as well as all relevant terms of the website implement by Red8.
    </p>
  </div>
</template>

<script setup>
import HeadBack from "@/components/HeadBack.vue";
import { ref } from "vue";

const currentTab = ref("Member");

const tabs = [
  {
    name: "Member",
  },
  {
    name: "Member",
  },
  {
    name: "Member",
  },
  {
    name: "Member",
  },
  {
    name: "Member",
  },
];
</script>

<style scoped lang="scss"></style>
