<script setup>
import { useI18n } from 'vue-i18n'
import Icon from './Icon.vue'
import { profile } from '../data/portfolio'
const { t } = useI18n()
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-in">
      <span class="badge-loc"><Icon name="pin" :size="14" />{{ t('hero.location') }}</span>
      <h1>{{ t('hero.title') }}</h1>
      <p class="hero-desc">{{ t('hero.desc') }}</p>
      <div class="row">
        <router-link class="btn btn-dark" :to="{ name: 'home', hash: '#projects' }">{{ t('hero.work') }}<Icon name="arrow" :size="18" /></router-link>
        <router-link class="btn" :to="{ name: 'home', hash: '#contact' }">{{ t('hero.contact') }}</router-link>
        <a class="btn" :href="profile.cv" download><Icon name="download" :size="18" />{{ t('hero.cv') }}</a>
      </div>
      <div class="row">
        <a class="pill" :href="profile.links.github" target="_blank" rel="noopener"><Icon name="github" :size="18" />{{ t('hero.github') }}</a>
        <a class="pill" :href="profile.links.linkedin" target="_blank" rel="noopener"><Icon name="linkedin" :size="18" />{{ t('hero.linkedin') }}</a>
      </div>
    </div>
  </section>
</template>
