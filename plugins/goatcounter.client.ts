// count.js only counts the initial page load; Nuxt navigates client-side after
// that, so count route changes manually. First afterEach (hydration) is skipped
// to avoid double-counting the landing page.
export default defineNuxtPlugin(() => {
  const router = useRouter()
  let first = true
  router.afterEach((to) => {
    if (first) {
      first = false
      return
    }
    const gc = (window as any).goatcounter
    // filter() returns a truthy reason (bot, skipgc localStorage flag, ...) when
    // the visit should not be counted — manual count() bypasses it otherwise
    if (!gc?.count || (gc.filter && gc.filter())) return
    gc.count({ path: to.fullPath })
  })
})
