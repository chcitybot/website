<template>
  <div class="relative inline-block text-left group mx-2">
    <button
      @click="toggleDropdown"
      class="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium rounded-md group-hover:bg-gray-50 group-hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {{ locale.toLocaleUpperCase() }}
      <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      class="origin-top-right invisible group-hover:visible absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="py-1">
        <button
          v-for="locale in locales"
          :key="locale.code"
          @click="setLocale(locale.code)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
        >
          {{ locale.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locales, locale } = useI18n();
const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const setLocale = (code) => {
  locale.value = code;
  dropdownOpen.value = false;
};
</script>

<style scoped>
/* Tailwind CSS classes will handle most of the styling */
</style>
