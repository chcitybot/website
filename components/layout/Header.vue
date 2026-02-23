<template>
  <header
    :class="[
      'fixed top-0 z-50 w-full transition-all duration-500 font-main bg-white',
      scrolled
        ? 'border-b border-gray-200/60 shadow-sm'
        : '',
      headerVisible
        ? 'translate-y-0 opacity-100'
        : '-translate-y-full opacity-0'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20 relative">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 flex items-center gap-2">
          <SvgBot class="h-10 w-10" />
          <span class="font-heading text-xl font-semibold text-gray-900">CityBot</span>
        </NuxtLink>

        <!-- Desktop nav (centered) -->
        <nav class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a @click.prevent="goHome" :class="navLink('home')">
            {{ $t("home") }}
          </a>
          <a
            @click.prevent="scrollToSection('section2')"
            :class="navLink('howItWorks')"
          >{{ $t("functionalities") }}</a>
          <NuxtLink :to="localePath('/team')" :class="navLink('team')">
            {{ $t("team") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/blog')" :class="navLink('blog')">
            {{ $t("insights") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" :class="navLink('contact')">
            {{ $t("contact") }}
          </NuxtLink>
        </nav>

        <!-- Right side: download CTA + language -->
        <div class="hidden md:flex items-center gap-4">
          <NuxtLink
            to="/download"
            :class="[
              'inline-flex items-center px-5 py-2.5 rounded-full text-paragraph font-semibold transition-colors duration-200',
              activeNav === 'download'
                ? 'bg-bot_red text-white'
                : 'border-2 border-bot_red text-bot_red hover:bg-bot_red hover:text-white'
            ]"
          >
            {{ $t("download") }}
          </NuxtLink>
          <LayoutLanguageSwitcher :scrolled="scrolled" />
        </div>

        <!-- Mobile hamburger -->
        <button @click="toggleMenu" class="md:hidden p-2 -mr-2" aria-label="Menu">
          <svg class="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile overlay menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden absolute inset-x-0 top-full bg-white shadow-2xl border-t border-gray-100">
        <nav class="flex flex-col py-6 px-6 gap-1">
          <a @click.prevent="goHome" :class="mobileNavLink('home')">
            {{ $t("home") }}
          </a>
          <a
            @click.prevent="scrollToSection('section2')"
            :class="mobileNavLink('howItWorks')"
          >{{ $t("functionalities") }}</a>
          <NuxtLink :to="localePath('/team')" @click="toggleMenu" :class="mobileNavLink('team')">
            {{ $t("team") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/blog')" @click="toggleMenu" :class="mobileNavLink('blog')">
            {{ $t("insights") }}
          </NuxtLink>
          <NuxtLink to="/download" @click="toggleMenu" :class="mobileNavLink('download')">
            {{ $t("download") }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" @click="toggleMenu" :class="mobileNavLink('contact')">
            {{ $t("contact") }}
          </NuxtLink>
          <div class="pt-4 border-t border-gray-100 mt-2">
            <LayoutLanguageSwitcher :scrolled="true" />
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()

const isMenuOpen = ref(false)
const scrolled = ref(false)
const activeNav = ref('home')
const headerVisible = ref(true)

// Determine active nav item based on current page + scroll position
function getPageKey() {
  const path = route.path.replace(`/${locale.value}`, '').replace(/\/$/, '') || '/'
  if (path === '/' || path === '') return 'home'
  if (path === '/team') return 'team'
  if (path.startsWith('/blog')) return 'blog'
  if (path === '/contact') return 'contact'
  if (path === '/download') return 'download'
  return 'home'
}

// Scroll-spy: on homepage, detect which section is in view
function updateActiveFromScroll() {
  const pageKey = getPageKey()
  if (pageKey !== 'home') {
    activeNav.value = pageKey
    return
  }

  const sections = ['section6', 'section5', 'section4', 'section3', 'section2', 'section1']
  const offset = 150 // account for header height

  for (const id of sections) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= offset) {
      // section1 = home, section2+ = howItWorks
      if (id === 'section1') {
        activeNav.value = 'home'
      } else {
        activeNav.value = 'howItWorks'
      }
      return
    }
  }
  activeNav.value = 'home'
}

function isHomePage() {
  const pageKey = getPageKey()
  return pageKey === 'home'
}

function handleScroll() {
  scrolled.value = window.scrollY > 50
  // On homepage, hide navbar until user scrolls past the hero
  if (isHomePage()) {
    headerVisible.value = window.scrollY > 100
  } else {
    headerVisible.value = true
  }
  updateActiveFromScroll()
}

// Nav link classes with active state
function navLink(key) {
  const isActive = activeNav.value === key
  return [
    'text-paragraph font-medium transition-all duration-200 cursor-pointer relative pb-1',
    isActive
      ? 'text-bot_dark_blue after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-bot_dark_blue'
      : 'text-gray-700 hover:text-bot_dark_blue after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bot_dark_blue after:transition-all after:duration-300 hover:after:w-full',
  ]
}

function mobileNavLink(key) {
  const isActive = activeNav.value === key
  return [
    'py-3 text-lg font-medium transition-colors cursor-pointer',
    isActive
      ? 'text-bot_dark_blue border-l-2 border-bot_dark_blue pl-3'
      : 'text-gray-900 hover:text-bot_dark_blue',
  ]
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  updateActiveFromScroll()
  // Hide navbar initially on homepage
  headerVisible.value = !isHomePage() || window.scrollY > 100
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Update active nav and header visibility on route change
watch(() => route.path, () => {
  nextTick(() => {
    updateActiveFromScroll()
    headerVisible.value = !isHomePage() || window.scrollY > 100
  })
})

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function goHome() {
  const currentPath = router.currentRoute.value.path
  const isHomePage = currentPath === '/' || currentPath === `/${locale.value}` || currentPath === `/${locale.value}/`

  if (isHomePage) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push(localePath('/')).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }
  isMenuOpen.value = false
}

function scrollToSection(sectionId) {
  const currentPath = router.currentRoute.value.path
  const isHomePage = currentPath === '/' || currentPath === `/${locale.value}` || currentPath === `/${locale.value}/`

  if (isHomePage) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  } else {
    router.push(localePath('/')).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    })
  }
  isMenuOpen.value = false
}
</script>
