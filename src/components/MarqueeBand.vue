<script setup>
import { marquee } from '../data/content'
</script>

<template>
  <div class="overflow-hidden bg-mint py-5 text-ink md:py-7" role="group" aria-label="Technologies utilisées">
    <div class="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
      <ul
        v-for="n in 2"
        :key="n"
        class="flex shrink-0 items-center"
        :aria-hidden="n === 2 ? 'true' : undefined"
      >
        <li v-for="tech in marquee" :key="`${n}-${tech}`" class="flex items-center">
          <span class="px-6 text-2xl font-semibold tracking-tight md:px-9 md:text-4xl">{{ tech }}</span>
          <span class="h-2.5 w-2.5 rotate-45 bg-claret" aria-hidden="true" />
        </li>
      </ul>
    </div>
  </div>
</template>
