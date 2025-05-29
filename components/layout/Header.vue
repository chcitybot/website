<template>
  <header class="bg-transparent text-white p-4 flex fixed top-0 z-20 w-full">
    <div
      class="flex w-full justify-between max-w-7xl mx-auto rounded-lg border px-4 bg-bot_dark_blue"
    >
      <NuxtLink class="hover:text-white" to="/">
        <!-- <svgLogoTextBanner class="w-[180px] md:w-[220px] lg:w-[350px]" /> -->
        <SvgBot />
      </NuxtLink>

      <div class="flex items-center">
        <div
          class="hidden md:block text-lg ml-10 text-white items-center text-center font-main font-extrabold"
        >
          <NuxtLink
            @click="scrollToSection('section2')"
            class="hover:cursor-pointer hover:text-bot_pink font-bold"
            >Funktionen
          </NuxtLink>
          <NuxtLink
            class="ml-4 hover:cursor-pointer hover:text-bot_pink font-bold"
            :to="'/team'"
            >Team
          </NuxtLink>
          <NuxtLink
            class="ml-4 hover:cursor-pointer hover:text-bot_pink font-bold"
            :to="'/blog'"
            >Einblicke
          </NuxtLink>
          <NuxtLink
            class="ml-4 hover:cursor-pointer hover:text-bot_pink font-bold"
            :to="'/contact'"
            >Kontakt
          </NuxtLink>
          <LayoutLanguageSwitcher />
        </div>

        <!-- <LayoutLanguageSwitcher :class="isMenuOpen ? 'hidden' : 'block'" /> -->
        <!-- Hamburger Menu Button -->
        <div
          class="ml-2 -my-2 md:hidden"
          :class="isMenuOpen ? 'hidden' : 'block'"
        >
          <button
            @click="toggleMenu"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        v-if="isMenuOpen"
        class="absolute top-0 inset-x-0 p-4 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg pb-4 shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 font-main"
        >
          <div class="pb-6 px-4">
            <div class="flex items-center justify-between">
              <svgBot />
              <div class="-mr-2 flex items-center">
                <!-- <LayoutLanguageSwitcher class="text-black" /> -->
                <button
                  @click="toggleMenu"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="py-6 px-4 text-black font-bold">
              <NuxtLink @click.prevent="scrollToSection('section2')"
                >Funktionen</NuxtLink
              >
            </div>
            <div class="py-6 px-4 text-black font-bold">
              <NuxtLink @click.prevent="toggleMenu" :to="'/team'"
                >Team</NuxtLink
              >
            </div>
            <div class="py-6 px-4 text-black font-bold">
              <NuxtLink @click.prevent="toggleMenu" :to="'/contact'"
                >Kontakt</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const router = useRouter();
const isMenuOpen = ref(false);
const { locales, setLocale } = useI18n();
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function scrollToSection(sectionId) {
  const isHomePage = router.currentRoute.value.path === "/";
  if (isHomePage) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset =
        -window.innerHeight / 2 + element.getBoundingClientRect().height / 2;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  } else {
    router.push("/").then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset =
            -window.innerHeight / 2 +
            element.getBoundingClientRect().height / 2;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    });
  }
  isMenuOpen.value = false;
}
</script>
