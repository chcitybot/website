<template>
  <div class="relative inline-block text-left group mx-2">
    <button
      class="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 text-gray-700 hover:text-bot_dark_blue"
    >
      {{ locale.toLocaleUpperCase() }}
      <svg
        class="-mr-1 ml-1 h-4 w-4"
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
      class="invisible group-hover:visible absolute w-36 rounded-xl shadow-xl bg-white border border-gray-100 py-2 mt-1 transition-all duration-200"
      :class="align === 'left' ? 'origin-top-left left-0' : 'origin-top-right right-0'"
    >
      <button
        v-for="loc in [...locales].sort((a, b) => a.name.localeCompare(b.name))"
        :key="loc.code"
        @click="setLanguage(loc.code)"
        :class="[
          'block px-4 py-2 text-sm w-full text-left transition-colors duration-150',
          loc.code === locale ? 'bg-bot_dark_blue/5 text-bot_dark_blue font-medium' : 'text-gray-700 hover:bg-gray-50'
        ]"
      >
        {{ loc.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  scrolled: {
    type: Boolean,
    default: true
  },
  align: {
    type: String,
    default: 'right'
  }
})

const { locales, locale, setLocale } = useI18n()

const setLanguage = (code) => {
  setLocale(code)
}
</script>
