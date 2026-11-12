<script setup>
defineProps({ project: Object, slide: Object, title: String })
</script>

<template>
  <img v-if="slide.src" class="shot" :src="slide.src" :alt="title" loading="lazy" />
  <div v-else class="shot ph" :style="{ background: `linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]})` }">
    <span>{{ title }}</span>
  </div>
</template>
