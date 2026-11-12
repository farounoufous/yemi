<script setup>
import { useI18n } from 'vue-i18n'
import Icon from './Icon.vue'
import Shot from './Shot.vue'
import { projects, slidesOf } from '../data/portfolio'
const { t } = useI18n()
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">{{ t('projects.title') }}</h2>
      <div class="grid">
        <router-link v-for="p in projects" :key="p.id" class="card project" :to="{ name: 'project', params: { id: p.id } }">
          <div class="cover">
            <Shot :project="p" :slide="slidesOf(p)[0]" :title="t(`projects.items.${p.id}.title`)" />
            <span class="overlay-btn"><Icon name="eye" :size="18" />{{ t('projects.details') }}</span>
          </div>
          <div class="p-body">
            <h3>{{ t(`projects.items.${p.id}.title`) }}</h3>
            <div class="tags">
              <span v-for="tag in p.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
              <span v-if="p.tags.length > 3" class="more">{{ t('projects.more', { n: p.tags.length - 3 }) }}</span>
            </div>
            <p class="muted clamp">{{ t(`projects.items.${p.id}.desc`) }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
