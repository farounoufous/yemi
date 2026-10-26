<script setup>
import ProjectCard from './ProjectCard.vue'
import SectionLabel from './SectionLabel.vue'
import { projects } from '../data/content'

// Répartition des couleurs sur les quatre études de cas
const tones = ['mint', 'claret', 'smoke', 'mint']
</script>

<template>
  <section id="projets" class="bg-ink text-smoke">
    <div class="mx-auto max-w-6xl px-6 pb-28 pt-28 md:px-10 md:pb-40 md:pt-40">
      <SectionLabel v-reveal n="03" text="Projets sélectionnés" tone="ink" />
      <h2
        v-reveal="{ delay: 100 }"
        class="mt-8 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tightest md:text-6xl"
      >
        Quatre études de cas, <span class="text-mint">de la contrainte à la solution.</span>
      </h2>

      <div class="mt-16 md:mt-24">
        <!-- Sur grand écran, chaque carte vient recouvrir la précédente (sticky) -->
        <div
          v-for="(p, i) in projects"
          :key="p.index"
          class="stack-card mb-8 last:mb-0 lg:mb-[12vh] lg:last:mb-0"
          :style="{ '--i': i }"
        >
          <div v-reveal="{ variant: 'pop' }">
            <ProjectCard :project="p" :tone="tones[i]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
