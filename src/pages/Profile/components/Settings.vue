<template>
  <div class="flex gap-6">
    <img src="/tx.png" class="size-15 object-cover rounded-full" alt="" />
    <div class="text-sm">
      <div class="text-(--color6)">Profile Picture</div>
      <div class="text-(--color11)">Max 1MB. JPEG, JPG, PNG</div>
      <div class="">
        <button
          type="button"
          class="van-button van-button--primary van-button--small"
          style="height: 25px"
        >
          <div class="van-button__content">
            <!----><span class="van-button__text"> Select image </span
            ><!---->
          </div>
        </button>
      </div>
    </div>
  </div>
  <div class="grid gap-2 mt-3">
    <div class="mb-2">
      <p class="text-(--color6) mb-2">Full Name</p>
      <div>
        <div data-v-6b3f7d7a="" class="box">
          <input
            data-v-6b3f7d7a=""
            class="w-full bg-(--bg8) rounded-md text-(--color4) border border-(--border4) h-[42px]"
            type="text"
            placeholder="setteset"
          /><!----><!---->
        </div>
        <!---->
      </div>
    </div>
    <div class="mb-2">
      <p class="text-(--color6) mb-2">Date of Birth</p>
      <div>
        <div data-v-6b3f7d7a="" class="box">
          <input
            data-v-6b3f7d7a=""
            class="w-full bg-(--bg8) rounded-md text-(--color4) border border-(--border4) h-[42px]"
            type="text"
            placeholder="15 Dec 1998"
          /><!----><!---->
        </div>
        <!---->
      </div>
    </div>
    <div class="mb-2">
      <p class="text-(--color6) mb-2">Username</p>
      <div>
        <div data-v-6b3f7d7a="" class="box">
          <input
            data-v-6b3f7d7a=""
            class="w-full bg-(--bg8) rounded-md text-(--color4) border border-(--border4) h-[42px]"
            type="text"
            placeholder="tttttt"
          /><!----><!---->
        </div>
        <!---->
      </div>
    </div>
    <div class="mb-2">
      <p class="text-(--color6) mb-2">Email</p>
      <div>
        <div data-v-6b3f7d7a="" class="box">
          <input
            data-v-6b3f7d7a=""
            class="w-full bg-(--bg8) rounded-md text-(--color4) border border-(--border4) h-[42px]"
            type="text"
            placeholder="123@qq.com"
          /><!----><!---->
        </div>
        <!---->
      </div>
    </div>
    <div class="mb-2">
      <div class="text-(--color6) mb-2 flex items-center justify-between">
        <div>Phone Number <span class="text-(--color2)">*</span></div>
        <div>
          <button
            type="button"
            class="van-button van-button--primary van-button--mini"
          >
            <div class="van-button__content">
              <!----><span class="van-button__text">Verify Phone Number</span
              ><!---->
            </div>
          </button>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-20">
          <div
            class="w-full bg-(--bg8) text-(--color4) text-sm/[2.8em] px-2 border border-(--border4) rounded-md flex items-center justify-between relative"
          >
            <span>+60</span>
            <div>
              <img src="/images/svg/select.svg" class="size-3" alt="" />
            </div>
            <div
              class="bg-(--bg8) p-2 absolute bottom-0 left-0 rounded-md w-full transform-[translateY(100%)] z-5 text-(--color4)"
              style="display: none"
            >
              <div
                class="bg-(--color2) text-[#fff] px-2 rounded-md flex items-center justify-between"
              >
                <span>+60</span
                ><img src="/images/icon/check.png" class="size-3" alt="" />
              </div>
              <div class="px-2 rounded-md flex items-center justify-between">
                <span>+61</span
                ><!---->
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div data-v-6b3f7d7a="" class="box">
            <input
              data-v-6b3f7d7a=""
              class="w-full bg-(--bg8) rounded-md text-(--color4) border border-(--border4) h-[42px]"
              type="text"
              placeholder="Phone Number"
            /><!----><!---->
          </div>
          <!---->
        </div>
      </div>
    </div>
    <div class="mt-15 pb-5">
      <button
        type="button"
        class="van-button van-button--primary van-button--normal van-button--block van-button--square"
      >
        <div class="van-button__content">
          <!----><span class="van-button__text">Save Change</span
          ><!---->
        </div>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
