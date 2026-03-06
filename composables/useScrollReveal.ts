export function useScrollReveal() {
  onMounted(() => {
    function revealVisible() {
      document.querySelectorAll('.reveal:not(.is-visible), .reveal-slide-left:not(.is-visible), .reveal-slide-right:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 1.1 && rect.bottom > 0) {
          el.classList.add('is-visible')
        }
      })
    }

    // Scroll listener as primary mechanism — simple and reliable
    let ticking = false
    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          revealVisible()
          ticking = false
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    // Initial check
    revealVisible()

    // Re-check on route change (covers client-side navigation)
    const router = useRouter()
    router.afterEach(() => {
      // Multiple checks to handle DOM rendering + scrollToSection delays
      nextTick(() => revealVisible())
      setTimeout(() => revealVisible(), 100)
      setTimeout(() => revealVisible(), 400)
      setTimeout(() => revealVisible(), 800)
    })

    // Watch for dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      revealVisible()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })
}
