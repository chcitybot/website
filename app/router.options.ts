import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // Jump to top instantly (no animation) when navigating to a blog post
    if (to.path.includes('/blog/')) {
      return { top: 0, behavior: 'instant' }
    }
    return { top: 0 }
  }
}
