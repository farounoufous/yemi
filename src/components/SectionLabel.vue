<script setup>
defineProps({
  n: { type: String, required: true },
  text: { type: String, required: true },
  tone: { type: String, default: 'ink' }, // fond de la section : ink | claret | smoke | mint
})

const tones = {
  ink: { dot: 'bg-mint', text: 'text-smoke/70' },
  claret: { dot: 'bg-mint', text: 'text-smoke/85' },
  smoke: { dot: 'bg-claret', text: 'text-ink/70' },
  mint: { dot: 'bg-claret', text: 'text-ink/80' },
}
</script>

<template>
  <p
    class="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em]"
    :class="tones[tone].text"
  >
    <span class="h-2 w-2 rotate-45" :class="tones[tone].dot" aria-hidden="true" />
    <span class="font-mono">{{ n }}</span>
    <span>{{ text }}</span>
  </p>
</template>
