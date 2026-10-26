<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const bar = ref(null)
let frame = 0

function update() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0
    if (bar.value) bar.value.style.transform = `scaleX(${ratio})`
  })
}

onMounted(() => {
  window.addEventListener('scroll', update, { passive: true })
  update()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', update)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden="true">
    <div ref="bar" class="h-full origin-left scale-x-0 bg-mint will-change-transform" />
  </div>
</template>
