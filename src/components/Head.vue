<template>
  <header
    class="border-b border-(--border2) flex items-center justify-between p-4 py-2 relative head"
  >
    <img class="h-5.5 block" src="/logo.svg" alt="" />
    <div class="flex items-center gap-2">
      <!----><!---->
      <div class="flex items-center gap-1">
        <div>
          <img src="/images/icon/mail.png" class="size-6 block" alt="" />
        </div>
        <span class="text-(--border2)">|</span>
        <div class="">
          <img
            src="/images/image/tx.png"
            class="size-6 block rounded-full object-cover"
            alt=""
          />
        </div>
        <span class="text-(--border2)">|</span>
        <div
          class="text-(--color4) bg-(--bg11) rounded-[50px] p-1.5 pl-3 flex items-center gap-1"
          @click="myrShow = !myrShow"
        >
          <span class="text-[10px]">MYR</span><span class="text-sm">0.00</span>
          <i v-if="!myrShow" class="size-5"
            ><svg
              width=""
              height=""
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#DE3C2D"></rect>
              <path
                d="M24 17.1429V14.8571H17.1429V8L14.8571 8L14.8571 14.8571L8 14.8571V17.1429L14.8571 17.1429L14.8571 24H17.1429L17.1429 17.1429H24Z"
                fill="#EDEDEE"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
              <path
                d="M24 14.8571H24.5V14.3571H24V14.8571ZM24 17.1429V17.6429H24.5V17.1429H24ZM17.1429 14.8571L16.6429 14.8571V15.3571L17.1429 15.3571V14.8571ZM17.1429 8H17.6429V7.5H17.1429V8ZM14.8571 8V7.5H14.3571V8H14.8571ZM14.8571 14.8571V15.3571H15.3571V14.8571H14.8571ZM8 14.8571V14.3571H7.5V14.8571H8ZM8 17.1429H7.5V17.6429H8V17.1429ZM14.8571 17.1429H15.3571V16.6429H14.8571V17.1429ZM14.8571 24H14.3571V24.5H14.8571V24ZM17.1429 24V24.5H17.6429V24H17.1429ZM17.1429 17.1429V16.6429H16.6429V17.1429H17.1429ZM23.5 14.8571V17.1429H24.5V14.8571H23.5ZM17.1429 15.3571H24V14.3571H17.1429V15.3571ZM16.6429 8V14.8571L17.6429 14.8571V8L16.6429 8ZM14.8571 8.5H17.1429V7.5L14.8571 7.5V8.5ZM15.3571 14.8571L15.3571 8H14.3571L14.3571 14.8571H15.3571ZM8 15.3571L14.8571 15.3571V14.3571L8 14.3571V15.3571ZM8.5 17.1429V14.8571H7.5V17.1429H8.5ZM14.8571 16.6429L8 16.6429V17.6429L14.8571 17.6429V16.6429ZM15.3571 24L15.3571 17.1429H14.3571L14.3571 24H15.3571ZM17.1429 23.5H14.8571V24.5H17.1429V23.5ZM16.6429 17.1429L16.6429 24H17.6429L17.6429 17.1429H16.6429ZM24 16.6429H17.1429V17.6429H24V16.6429Z"
                fill="#EDEDEE"
              ></path>
            </svg>
          </i>
          <i v-else class="size-5"
            ><svg
              width=""
              height=""
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="white"></rect>
              <path d="M23 15V17L9 17V15L23 15Z" fill="#DE3C2D"></path>
              <path
                d="M23 15H23.5V14.5H23V15ZM23 17V17.5H23.5V17H23ZM9 17H8.5V17.5H9V17ZM9 15V14.5L8.5 14.5V15H9ZM22.5 15V17H23.5V15H22.5ZM23 16.5L9 16.5V17.5L23 17.5V16.5ZM9.5 17V15H8.5V17H9.5ZM9 15.5L23 15.5V14.5L9 14.5V15.5Z"
                fill="#DE3C2D"
              ></path>
            </svg>
          </i>
        </div>
      </div>
      <div
        class="bg-(--bg4) rounded-2xl flex items-center p-2 py-1 gap-1.5"
        @click="languageShow = !languageShow"
      >
        <img
          class="blick rounded-full size-5"
          src="/images/svg/language.svg"
          alt=""
        /><img
          class="blick rounded-full size-3"
          src="/images/icon/below.png"
          alt=""
        />
      </div>
    </div>

    <!-- 多语言 -->
    <div
      class="px-3 text-nowrap language absolute bottom-0 right-4 translate-y-full text-(--color3) text-sm bg-(--bg5) flex items-center gap-2 p-4 py-2 z-2"
      v-if="languageShow"
    >
      <img
        class="blick rounded-full size-5"
        src="/images/svg/language.svg"
        alt=""
      />
      <span
        v-for="(item, idx) in languageList"
        :key="idx"
        :class="{ 'text-(--color2)': language == item.name }"
        @click="clickLanguage(item)"
        >{{ item.name }}</span
      >
    </div>

    <!-- MYR -->
    <div
      class="absolute top-0 left-0 translate-y-full w-full h-full"
      v-if="myrShow"
    >
      <!---->
      <div class="p-4 bg-(--bg5)">
        <div class="text-(--color5) grid gap-1 balance">
          <div
            class="flex items-center justify-between p-2 py-1.5 pr-3 rounded-xl text-white"
          >
            <span>主钱包</span>
            <div class="flex gap-2">
              <span class="text-(--color4)">0.00</span
              ><svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.99132 9.67875H0.506653L0.531986 7.96375H5.99132V9.67875ZM18.7467 7.9625C18.2881 3.6325 14.3893 0.25 9.64945 0.25C4.90832 0.25 1.01079 3.6325 0.552253 7.96375H2.39145C2.84239 4.58125 5.91912 1.96375 9.64945 1.96375C13.3785 1.96375 16.4565 4.58125 16.9075 7.96375L18.7467 7.9625ZM13.262 10.32H18.7467L18.7213 12.0338H13.262V10.3212V10.32ZM0.506653 12.035C0.965186 16.3663 4.86399 19.75 9.60385 19.75C14.345 19.75 18.2425 16.3663 18.7011 12.035H16.8619C16.4122 15.4175 13.3342 18.035 9.60385 18.035C5.87479 18.035 2.79679 15.4175 2.34585 12.035H0.506653Z"
                  fill="#EDEDEE"
                ></path>
              </svg>
            </div>
          </div>
          <div v-for="(item, idx) in myrList" :key="idx">
            <div
              class="flex items-center justify-between p-2 py-1.5 rounded-xl t2"
            >
              <span>{{ item.name }}</span>
              <div class="flex gap-2 items-center" @click="clickMyr(item, idx)">
                <span class="text-(--color4)">{{ item.balance }}</span>
                <i v-if="cureentMyr != idx" class="size-5"
                  ><svg
                    width=""
                    height=""
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#DE3C2D"></rect>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24 17.1429V14.8571H17.1429V8L14.8571 8L14.8571 14.8571L8 14.8571V17.1429L14.8571 17.1429L14.8571 24H17.1429L17.1429 17.1429H24Z"
                      fill="#EDEDEE"
                    ></path>
                    <path
                      d="M24 14.8571H24.5V14.3571H24V14.8571ZM24 17.1429V17.6429H24.5V17.1429H24ZM17.1429 14.8571L16.6429 14.8571V15.3571L17.1429 15.3571V14.8571ZM17.1429 8H17.6429V7.5H17.1429V8ZM14.8571 8V7.5H14.3571V8H14.8571ZM14.8571 14.8571V15.3571H15.3571V14.8571H14.8571ZM8 14.8571V14.3571H7.5V14.8571H8ZM8 17.1429H7.5V17.6429H8V17.1429ZM14.8571 17.1429H15.3571V16.6429H14.8571V17.1429ZM14.8571 24H14.3571V24.5H14.8571V24ZM17.1429 24V24.5H17.6429V24H17.1429ZM17.1429 17.1429V16.6429H16.6429V17.1429H17.1429ZM23.5 14.8571V17.1429H24.5V14.8571H23.5ZM17.1429 15.3571H24V14.3571H17.1429V15.3571ZM16.6429 8V14.8571L17.6429 14.8571V8L16.6429 8ZM14.8571 8.5H17.1429V7.5L14.8571 7.5V8.5ZM15.3571 14.8571L15.3571 8H14.3571L14.3571 14.8571H15.3571ZM8 15.3571L14.8571 15.3571V14.3571L8 14.3571V15.3571ZM8.5 17.1429V14.8571H7.5V17.1429H8.5ZM14.8571 16.6429L8 16.6429V17.6429L14.8571 17.6429V16.6429ZM15.3571 24L15.3571 17.1429H14.3571L14.3571 24H15.3571ZM17.1429 23.5H14.8571V24.5H17.1429V23.5ZM16.6429 17.1429L16.6429 24H17.6429L17.6429 17.1429H16.6429ZM24 16.6429H17.1429V17.6429H24V16.6429Z"
                      fill="#EDEDEE"
                    ></path>
                  </svg>
                </i>
                <i v-else class="size-5"
                  ><svg
                    width=""
                    height=""
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="black"></rect>
                    <path d="M23 15V17L9 17V15L23 15Z" fill="#DE3C2D"></path>
                    <path
                      d="M23 15H23.5V14.5H23V15ZM23 17V17.5H23.5V17H23ZM9 17H8.5V17.5H9V17ZM9 15V14.5L8.5 14.5V15H9ZM22.5 15V17H23.5V15H22.5ZM23 16.5L9 16.5V17.5L23 17.5V16.5ZM9.5 17V15H8.5V17H9.5ZM9 15.5L23 15.5V14.5L9 14.5V15.5Z"
                      fill="#DE3C2D"
                    ></path>
                  </svg>
                </i>
              </div>
            </div>
            <div class="grid" v-if="cureentMyr == idx">
              <div
                class="flex items-center justify-between p-2 py-1.5 rounded-xl pr-9.5 t3"
                v-for="(item2, idx2) in item.list"
                :key="idx2"
              >
                <span>{{ item2.name }}</span
                ><span>{{ item2.balance }}</span>
              </div>
            </div>
          </div>
          <div class="text-right my-2">
            <button class="gbtn rounded-full">
              恢复
            </button>
          </div>
        </div>
      </div>
      <div class="flex text-(--color2) text-xs text-center bg-[#000] py-3">
        <div class="flex-1">存款</div>
        <div class="flex-1">提款</div>
        <div class="flex-1">转账</div>
        <div class="flex-1">历史</div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const language = ref("English");
const languageShow = ref(false);

const languageList = [
  {
    name: "English",
  },
  {
    name: "中文",
  },
  {
    name: "Malay",
  },
];

const clickLanguage = (item) => {
  if (language.value == item.name) return;
  language.value = item.name;
  languageShow.value = false;
};

const myrShow = ref(false);
const cureentMyr = ref(-1);
const myrList = [
  {
    name: "主钱包",
    balance: "0.00",
  },
  {
    name: "Live Casino",
    balance: "0.00",
    list: [
      {
        name: "SA Gaming",
        balance: "0.00",
      },
      {
        name: "SA Gaming",
        balance: "0.00",
      },
    ],
  },
  {
    name: "Live Casino",
    balance: "0.00",
    list: [
      {
        name: "SA Gaming",
        balance: "0.00",
      },
      {
        name: "SA Gaming",
        balance: "0.00",
      },
    ],
  },
];
const clickMyr = (item, idx) => {
  if (cureentMyr.value == idx) return (cureentMyr.value = -1);
  cureentMyr.value = idx;
};
</script>

<style scoped lang="scss">
.head {
  --bgs: linear-gradient(to right, #de3c2d, #830b00);
  --bgs2: linear-gradient(to right, #1d1a1a, #2a2727);
  --bgs3: #0f0f12;
}

.t {
  background: var(--bgs);
}

.t2 {
  background: var(--bgs2);
}

.t3 {
  background: var(--bgs3);
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 95%;
    transform: translate(-50%);
    border-bottom: 1px solid #2a2727;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
}
</style>
