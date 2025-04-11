<template>
  <div class="flex gap-6">
    <img src="/tx.png" class="size-15 object-cover rounded-full" alt="" />
    <div class="text-sm">
      <div class="text-(--color6)">Profile Picture</div>
      <div class="text-(--color11)">Max 1MB. JPEG, JPG, PNG</div>
      <div class="mt-1">
        <button class="gbtn text-xs px-2">Select image</button>
      </div>
    </div>
  </div>
  <div class="grid gap-2 mt-3">
    <div class="mb-2">
      <p class="text-(--color6) mb-2">Full Name</p>
      <div>
        <uInput placeholder="setteset" />
      </div>
    </div>
    <div class="mb-2">
      <p class="text-(--color6) mb-2">Date of Birth</p>
      <div>
        <uInput placeholder="15 Dec 1998" />
      </div>
    </div>
    <div class="mb-2">
      <p class="text-(--color6) mb-2">Username</p>
      <div>
        <uInput placeholder="Username" />
      </div>
    </div>
    <div class="mb-2">
      <p class="text-(--color6) mb-2">Email</p>
      <div>
        <uInput placeholder="Email" />
        <!---->
      </div>
    </div>
    <div class="mb-2">
      <div class="text-(--color6) mb-2 flex items-center justify-between">
        <div>Phone Number <span class="text-(--color2)">*</span></div>
        <div>
          <button type="button" class="gbtn mini">Verify Phone Number</button>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-20">
          <uSelect placeholder="+60" />
        </div>
        <div class="flex-1">
          <uInput placeholder="Phone Number" />
          <!---->
        </div>
      </div>
    </div>
    <div class="mt-15 pb-5">
      <button class="gbtn xl">Save Change</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
