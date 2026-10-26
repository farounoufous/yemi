<script setup>
import { computed } from 'vue'
import ProjectShot from './ProjectShot.vue'

const props = defineProps({
  project: { type: Object, required: true },
  tone: { type: String, default: 'mint' },
})

const tones = {
  mint: {
    card: 'bg-mint text-ink',
    muted: 'text-ink/75',
    chip: 'border-ink text-ink hover:bg-ink hover:text-mint',
    impact: 'bg-ink text-smoke',
    impactLabel: 'text-mint',
    marker: 'bg-mint',
  },
  claret: {
    card: 'bg-claret text-smoke',
    muted: 'text-smoke/80',
    chip: 'border-smoke text-smoke hover:bg-smoke hover:text-claret',
    impact: 'bg-smoke text-ink',
    impactLabel: 'text-claret',
    marker: 'bg-claret',
  },
  smoke: {
    card: 'bg-smoke text-ink',
    muted: 'text-ink/75',
    chip: 'border-ink text-ink hover:bg-ink hover:text-smoke',
    impact: 'bg-claret text-smoke',
    impactLabel: 'text-smoke/80',
    marker: 'bg-mint',
  },
}
const t = computed(() => tones[props.tone] ?? tones.mint)
</script>

<template>
  <article
    class="rounded-[2rem] p-7 transition-transform duration-500 ease-premium hover:-translate-y-1 md:p-12"
    :class="t.card"
  >
    <header class="flex items-start justify-between gap-6">
      <div>
        <p class="text-sm font-medium" :class="t.muted">{{ project.role }}</p>
        <h3 class="mt-3 text-4xl font-semibold tracking-tightest md:text-6xl">{{ project.name }}</h3>
      </div>
      <span class="font-mono text-5xl font-semibold leading-none tracking-tightest md:text-7xl" aria-hidden="true">
        {{ project.index }}
      </span>
    </header>

    <ul class="mt-6 flex flex-wrap gap-2" aria-label="Stack technique">
      <li
        v-for="tech in project.stack"
        :key="tech"
        class="rounded-full border-2 px-3.5 py-1 text-xs font-semibold transition-colors duration-300"
        :class="t.chip"
      >
        {{ tech }}
      </li>
    </ul>

    <ProjectShot
      v-if="project.shot"
      v-reveal="{ variant: 'pop', delay: 100 }"
      :shot="project.shot"
      :tone="tone"
      class="mt-9"
    />

    <div class="mt-9 grid gap-8 md:grid-cols-2 md:gap-12">
      <section>
        <h4 class="text-xs font-semibold uppercase tracking-[0.18em]" :class="t.muted">Problématique</h4>
        <p class="mt-3 leading-relaxed">{{ project.problem }}</p>
      </section>
      <section>
        <h4 class="text-xs font-semibold uppercase tracking-[0.18em]" :class="t.muted">Solution technique</h4>
        <p class="mt-3 leading-relaxed">{{ project.solution }}</p>
      </section>
    </div>

    <section class="mt-9 flex items-center gap-4 rounded-2xl px-6 py-5" :class="t.impact">
      <span class="h-3 w-3 shrink-0 rotate-45" :class="t.marker" aria-hidden="true" />
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-[0.18em]" :class="t.impactLabel">
          Indicateur d'impact
        </h4>
        <p class="mt-1 font-semibold">{{ project.impact }}</p>
      </div>
    </section>
  </article>
</template>
