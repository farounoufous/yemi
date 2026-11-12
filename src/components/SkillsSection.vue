<script setup>
import { useI18n } from 'vue-i18n'
import { skills } from '../data/portfolio'
const { t } = useI18n()
const pct = { advanced: 83, intermediate: 67 }
</script>

<template>
  <section id="skills" class="section">
    <div class="container narrow">
      <h2 class="section-title">{{ t('skills.title') }}</h2>
      <h3 class="skills-group">{{ t('skills.tech') }}</h3>
      <div v-for="s in skills" :key="s.name" class="skill">
        <div class="skill-head"><span>{{ s.name }}</span><small>{{ t('skills.' + s.level) }}</small></div>
        <div class="bar"><i :style="{ width: pct[s.level] + '%' }"></i></div>
      </div>
    </div>
  </section>
</template>
