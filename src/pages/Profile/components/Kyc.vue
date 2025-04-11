<template>
  <p class="text-(--color2) text-sm">
    <span
      class="text-(--color4) text-xs/[1em] bg-(--color2) size-3 inline-block text-center rounded-full"
      >!</span
    >
    KYC is required to perform withdrawals.
  </p>
  <div
    v-for="(item, idx) in 5"
    :key="idx"
    class="text-sm flex items-center justify-between mt-5"
  >
    <span class="text-(--color6) w-10">ID/Passport (Front)</span>
    <div class="flex items-center gap-3">
      <span
        class="text-(--color4) bg-(--color6) size-6 text-sm/1em inline-block text-center rounded-full font-bold"
        >i</span
      >
      <div
        class="bg-(--bg8) rounded-md flex items-center gap-3 p-2 border border-(--border2)"
      >
        <i
          ><svg
            width="22"
            height="22"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"
              stroke="#de3c2d"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M27 33H41"
              stroke="#de3c2d"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M27 39H41"
              stroke="#de3c2d"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M41 33L36 28"
              stroke="#de3c2d"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M32 44L27 39"
              stroke="#de3c2d"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M30 4V14H40"
              stroke="#de3c2d"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></svg></i
        ><span class="text-(--color4) text-xs">Upload File</span>
      </div>
    </div>
  </div>
  <div class="mt-13 pb-5">
    <button class="gbtn xl">Submit</button>
  </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
