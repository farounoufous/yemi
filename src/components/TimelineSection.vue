<script setup>
import SectionLabel from './SectionLabel.vue'
import { timeline } from '../data/content'

// Un aplat par étape, avec un décalage asymétrique sur grand écran
const tones = [
  { card: 'bg-mint text-ink', badge: 'bg-ink text-mint', focus: 'text-ink/80', dot: 'bg-mint', offset: 'md:ml-0' },
  { card: 'bg-claret text-smoke', badge: 'bg-smoke text-claret', focus: 'text-smoke/85', dot: 'bg-claret', offset: 'md:ml-12' },
  { card: 'bg-ink text-smoke', badge: 'bg-mint text-ink', focus: 'text-smoke/80', dot: 'bg-ink', offset: 'md:ml-24' },
]
</script>

<template>
  <section id="parcours" class="bg-smoke text-ink">
    <div class="mx-auto grid max-w-6xl gap-14 px-6 py-28 md:grid-cols-12 md:px-10 md:py-40">
      <div class="md:sticky md:top-28 md:col-span-4 md:self-start">
        <SectionLabel v-reveal n="02" text="Parcours" tone="smoke" />
        <h2
          v-reveal="{ delay: 100 }"
          class="mt-6 text-4xl font-semibold leading-[1.02] tracking-tightest md:text-6xl"
        >
          Parcours <span class="text-claret">académique</span>
        </h2>
      </div>

      <ol class="relative md:col-span-8">
        <span
          v-reveal="{ variant: 'grow' }"
          class="absolute bottom-0 left-[8px] top-2 w-0.5 bg-ink"
          aria-hidden="true"
        />

        <li v-for="(step, i) in timeline" :key="step.period" class="relative pb-10 pl-12 last:pb-0">
          <span
            class="absolute left-0 top-[2.3rem] h-[18px] w-[18px] rotate-45 border-4 border-smoke"
            :class="tones[i].dot"
            aria-hidden="true"
          />
          <div
            v-reveal="{ variant: 'pop', delay: i * 120 }"
            class="rounded-3xl p-7 transition-transform duration-500 ease-premium hover:-translate-y-1 md:p-9"
            :class="[tones[i].card, tones[i].offset]"
          >
            <p
              class="inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]"
              :class="tones[i].badge"
            >
              {{ step.period }}
            </p>
            <h3 class="mt-5 max-w-2xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              {{ step.title }}
            </h3>
            <p class="mt-4 max-w-2xl leading-relaxed" :class="tones[i].focus">
              <span class="font-semibold">Focus — </span>{{ step.focus }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
