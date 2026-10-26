<script setup>
import SectionLabel from './SectionLabel.vue'
import { bio, skills } from '../data/content'
</script>

<template>
  <section id="apropos" class="bg-claret text-smoke">
    <div class="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-12 md:px-10 md:py-40">
      <div class="md:sticky md:top-28 md:col-span-4 md:self-start">
        <SectionLabel v-reveal n="01" text="À propos" tone="claret" />
        <!-- formes plates animées -->
        <div v-reveal="{ variant: 'pop', delay: 150 }" class="mt-10 flex items-end gap-5" aria-hidden="true">
          <div class="h-20 w-20 animate-spin-medium rounded-2xl bg-mint motion-reduce:animate-none md:h-28 md:w-28" />
          <div class="h-12 w-12 animate-float rounded-full bg-smoke motion-reduce:animate-none md:h-16 md:w-16" />
        </div>
      </div>

      <div class="md:col-span-8">
        <p
          v-reveal="{ delay: 100 }"
          class="text-xl font-light leading-relaxed md:text-[1.7rem] md:leading-[1.55]"
        >
          {{ bio }}
        </p>
        <ul class="mt-12 flex flex-wrap gap-3" aria-label="Compétences clés">
          <li
            v-for="(s, i) in skills"
            :key="s"
            v-reveal="{ delay: 200 + i * 70 }"
            class="rounded-full bg-mint px-5 py-2 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-smoke"
          >
            {{ s }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
