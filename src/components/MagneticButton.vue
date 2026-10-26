<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'

const props = defineProps({
  href: { type: String, default: null },
  variant: { type: String, default: 'outline' }, // 'smoke' | 'outline' | 'ink'
  type: { type: String, default: 'button' },
  icon: { type: Boolean, default: true },
})

// base = état repos ; fill = aplat qui monte au survol
const variants = {
  smoke: {
    base: 'border-smoke bg-smoke text-ink hover:border-mint',
    fill: 'bg-mint',
  },
  outline: {
    base: 'border-smoke text-smoke hover:border-mint hover:text-ink',
    fill: 'bg-mint',
  },
  ink: {
    base: 'border-ink bg-ink text-smoke hover:border-claret',
    fill: 'bg-claret',
  },
}
const v = computed(() => variants[props.variant] ?? variants.outline)

const el = ref(null)
let frame = 0
const STRENGTH = 0.22

function onMove(e) {
  const node = el.value?.$el ?? el.value
  if (!node) return
  const r = node.getBoundingClientRect()
  const x = (e.clientX - (r.left + r.width / 2)) * STRENGTH
  const y = (e.clientY - (r.top + r.height / 2)) * STRENGTH
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`
  })
}

function onLeave() {
  cancelAnimationFrame(frame)
  const node = el.value?.$el ?? el.value
  if (node) node.style.transform = 'translate3d(0, 0, 0)'
}

onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    ref="el"
    :href="href || undefined"
    :type="href ? undefined : type"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border-2 px-7 py-3.5 text-sm font-semibold tracking-tight transition-[transform,color,border-color] duration-300 ease-premium will-change-transform"
    :class="v.base"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <span
      class="absolute inset-0 translate-y-full rounded-full transition-transform duration-500 ease-premium group-hover:translate-y-0"
      :class="v.fill"
      aria-hidden="true"
    />
    <span class="relative z-10"><slot /></span>
    <ArrowUpRight
      v-if="icon"
      :size="17"
      :stroke-width="2"
      class="relative z-10 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </component>
</template>
