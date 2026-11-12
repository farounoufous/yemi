<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from './Icon.vue'
import { profile } from '../data/portfolio'

const { t, locale } = useI18n()
const open = ref(false)
const links = ['about', 'skills', 'projects', 'contact']

function toggleLang() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
  localStorage.setItem('lang', locale.value)
  document.documentElement.lang = locale.value
}
</script>

<template>
  <header class="nav">
    <div class="nav-in">
      <router-link class="logo" :to="{ name: 'home', hash: '#home' }">{{ t('nav.logo') }}</router-link>
      <nav :class="['nav-links', { open }]">
        <router-link v-for="l in links" :key="l" :to="{ name: 'home', hash: '#' + l }" @click="open = false">
          {{ t('nav.' + l) }}
        </router-link>
        <a class="btn-cv" :href="profile.cv" download><Icon name="download" :size="16" />{{ t('nav.cv') }}</a>
      </nav>
      <div class="nav-tools">
        <button class="lang" @click="toggleLang"><Icon name="globe" />{{ locale.toUpperCase() }}</button>
        <button class="burger" :aria-label="open ? 'Fermer' : 'Menu'" @click="open = !open">
          <Icon :name="open ? 'x' : 'menu'" />
        </button>
      </div>
    </div>
  </header>
</template>
