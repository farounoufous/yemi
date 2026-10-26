<script setup>
import { ref } from 'vue'
import MagneticButton from './MagneticButton.vue'
import { hero, profile } from '../data/content'

const shapes = ref(null)

// Parallaxe douce : chaque forme se déplace selon sa profondeur (--d)
function onMove(e) {
  const el = shapes.value
  if (!el) return
  const r = e.currentTarget.getBoundingClientRect()
  el.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
  el.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
}
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-ink" @pointermove="onMove">
    <!-- Composition de formes plates (aplats, sans dégradé ni halo) -->
    <div
      ref="shapes"
      class="fade-in pointer-events-none absolute right-6 top-24 aspect-square w-[44vw] max-w-[400px] md:right-12 lg:w-[24vw]"
      style="--delay: 500ms"
      aria-hidden="true"
    >
      <div class="parallax absolute right-0 top-0 w-[66%]" style="--d: 30">
        <div class="aspect-square w-full animate-float rounded-full bg-mint motion-reduce:animate-none" />
      </div>
      <div class="parallax absolute bottom-[2%] left-0 w-[46%]" style="--d: -22">
        <div class="aspect-square w-full animate-spin-slow rounded-[26%] bg-claret motion-reduce:animate-none" />
      </div>
      <div class="parallax absolute bottom-[6%] right-[4%] w-[30%]" style="--d: 40">
        <div class="aspect-square w-full animate-float-slow rounded-full border-[5px] border-smoke motion-reduce:animate-none" />
      </div>
      <div class="parallax absolute left-[12%] top-[6%] w-[10%]" style="--d: -50">
        <div class="aspect-square w-full animate-float rounded-full bg-smoke motion-reduce:animate-none" />
      </div>
    </div>

    <div
      class="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24"
    >
      <p
        class="fade-in mb-8 inline-flex w-fit items-center gap-3 rounded-full bg-claret px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-smoke"
        style="--delay: 100ms"
      >
        <span class="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
        {{ profile.title }}
      </p>

      <h1
        class="text-[clamp(2.75rem,9vw,8rem)] font-semibold leading-[0.95] tracking-tightest"
        aria-label="Hi, Je suis FAROU Noufous"
      >
        <span v-for="(line, i) in hero.headline" :key="line" class="line-mask" aria-hidden="true">
          <span
            class="line-rise"
            :class="i === hero.headline.length - 1 ? 'text-mint' : 'text-smoke'"
            :style="{ '--delay': `${250 + i * 140}ms` }"
          >
            {{ line }}
          </span>
        </span>
      </h1>

      <div class="fade-in mt-12 flex flex-wrap items-center gap-4" style="--delay: 900ms">
        <MagneticButton :href="profile.linkedin" variant="smoke">LinkedIn</MagneticButton>
        <MagneticButton :href="profile.github" variant="outline">GitHub</MagneticButton>
      </div>
    </div>
  </section>
</template>
