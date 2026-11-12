<script setup>
import { useI18n } from 'vue-i18n'
import Icon from './Icon.vue'
import { profile } from '../data/portfolio'

const { t } = useI18n()
const links = ['about', 'skills', 'projects', 'contact']
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-in">
      <div class="f-brand">
        <router-link class="logo" :to="{ name: 'home', hash: '#home' }">{{ t('nav.logo') }}</router-link>
        <p class="muted">{{ t('footer.tagline') }}</p>
        <div class="f-social">
          <a class="f-ico" :href="profile.links.github" target="_blank" rel="noopener" aria-label="GitHub"><Icon name="github" :size="18" /></a>
          <a class="f-ico" :href="profile.links.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon name="linkedin" :size="18" /></a>
          <a class="f-ico" :href="'mailto:' + profile.email" aria-label="E-mail"><Icon name="mail" :size="18" /></a>
        </div>
      </div>

      <nav class="f-col">
        <h4>{{ t('footer.nav') }}</h4>
        <router-link v-for="l in links" :key="l" :to="{ name: 'home', hash: '#' + l }">{{ t('nav.' + l) }}</router-link>
      </nav>

      <div class="f-col">
        <h4>{{ t('footer.contact') }}</h4>
        <a :href="'mailto:' + profile.email">{{ profile.email }}</a>
        <a :href="'tel:' + profile.phone.replace(/\s/g, '')">{{ profile.phone }}</a>
        <span>{{ t('about.locationValue') }}</span>
      </div>
    </div>

    <div class="container f-bottom">
      <p>{{ t('footer.rights', { year }) }}</p>
      <router-link class="f-top" :to="{ name: 'home', hash: '#home' }">
        {{ t('footer.top') }}<Icon name="arrow" :size="16" />
      </router-link>
    </div>
  </footer>
</template>