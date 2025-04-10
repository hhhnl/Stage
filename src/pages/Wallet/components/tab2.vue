<template>
  <div class="border-b border-(--bg12) text-(--color3) text-center pb-1 mt-5">
    Bank
  </div>
  <div class="px-5">
    <div class="flex items-center justify-center gap-2 my-4">
      <div
        class="bg-(--color2) size-6 rounded-full text-(--color4) text-center font-bold"
      >
        !
      </div>
      <div class="text-(--color2) flex-1">
        Phone Verification &amp; KYC is required to perform withdrawals.
      </div>
    </div>
    <div class="grid gap-4 mt-2 mb-2">
      <div
        class="bg-[#000] text-(--color10) font-bold flex items-center flex-1 justify-between p-2 py-3 border border-(--border2)"
      >
        <div class="relative">
          <img src="/images/icon/iphone.png" class="size-6" alt="" /><span
            class="size-3 bg-(--color2) text-(--color4) rounded-full absolute -top-1 -right-1 text-[10px]/3 text-center"
            >×</span
          >
        </div>
        <span class="pl-2">需要验证</span><span class="size-6"></span>
      </div>
      <div
        class="bg-[#000] text-(--color10) font-bold flex items-center flex-1 justify-between p-2 py-3 border border-(--border2)"
      >
        <div class="relative">
          <i class="size-8 text-(--color5)"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.65 15H13.35L12.7416 11.5083C13.0802 11.351 13.3467 11.1229 13.5414 10.8241C13.736 10.5253 13.8333 10.195 13.8333 9.83328C13.8333 9.32911 13.6537 8.89752 13.2943 8.5385C12.935 8.17947 12.5031 7.99995 11.9985 7.99995C11.494 7.99995 11.0625 8.17947 10.7042 8.5385C10.3458 8.89752 10.1667 9.32911 10.1667 9.83328C10.1667 10.195 10.264 10.5253 10.4586 10.8241C10.6533 11.1229 10.9198 11.351 11.2584 11.5083L10.65 15ZM12 21.9833C9.67222 21.3999 7.75694 20.0541 6.25418 17.9458C4.75139 15.8374 4 13.5166 4 10.9833V4.98328L12 1.98328L20 4.98328V10.9833C20 13.5166 19.2486 15.8374 17.7458 17.9458C16.2431 20.0541 14.3278 21.3999 12 21.9833Z"
                fill="currentColor"
              ></path></svg></i
          ><span
            class="size-3 bg-(--color2) text-(--color4) rounded-full absolute -top-1 -right-1 text-[10px]/3 text-center"
            >×</span
          >
        </div>
        <span class="pl-2">需要验证</span><span class="size-6"></span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
