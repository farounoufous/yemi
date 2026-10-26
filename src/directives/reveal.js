/**
 * v-reveal — apparition progressive au scroll.
 *
 * Usage :
 *   <div v-reveal>…</div>
 *   <div v-reveal="{ delay: 120 }">…</div>            → entrées échelonnées (staggered)
 *   <div v-reveal="{ variant: 'grow' }">…</div>       → trait qui se dessine
 *   <div v-reveal="{ variant: 'pop' }">…</div>        → bloc de couleur qui s'installe
 *
 * Seuls opacity et transform sont animés (compositing GPU, 60 FPS).
 */
const observer =
  typeof IntersectionObserver === 'undefined'
    ? null
    : new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )

export const reveal = {
  mounted(el, binding) {
    const { delay = 0, variant = null } = binding.value ?? {}
    el.classList.add('reveal')
    if (variant) el.classList.add(`reveal--${variant}`)
    el.style.setProperty('--reveal-delay', `${delay}ms`)

    if (!observer) {
      el.classList.add('is-visible')
      return
    }
    observer.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
