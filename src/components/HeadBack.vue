<template>
  <div
    class="font-bold text-xl text-(--color4) flex items-center justify-between py-2.5 px-2 border-b border-(--border2)"
  >
    <div class="flex items-center gap-1">
      <div class="px-1">
        <i class="" style="color: var(--color2); font-size: 20px">
          <svg
            width="26"
            height="26"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31 36L19 24L31 12"
              stroke="#de3c2d"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
      </div>
      <span>
        <slot></slot>
      </span>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
