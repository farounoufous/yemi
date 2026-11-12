<script setup>
import { useI18n } from 'vue-i18n'
import Icon from './Icon.vue'
import Avatar from './Avatar.vue'
import { profile } from '../data/portfolio'
const { t } = useI18n()
</script>

<template>
  <section id="about" class="section about">
    <div class="container narrow">
      <h2 class="section-title">{{ t('about.title') }}</h2>
      <div class="card profile">
        <div class="avatar"><Avatar /></div>
        <p class="muted">{{ t('about.status') }}</p>
        <div class="row">
          <a class="pill sm" :href="profile.links.github" target="_blank" rel="noopener"><Icon name="github" :size="16" />GitHub</a>
          <a class="pill sm" :href="profile.links.linkedin" target="_blank" rel="noopener"><Icon name="linkedin" :size="16" />LinkedIn</a>
        </div>
      </div>
      <div class="card text-card"><p>{{ t('about.text') }}</p></div>
      <div class="info-grid">
        <div class="card info">
          <span class="ico"><Icon name="pin" :size="26" /></span>
          <h4>{{ t('about.location') }}</h4>
          <p class="muted">{{ t('about.locationValue') }}</p>
        </div>
        <div class="card info">
          <span class="ico"><Icon name="mail" :size="26" /></span>
          <h4>{{ t('about.email') }}</h4>
          <a :href="'mailto:' + profile.email">{{ profile.email }}</a>
        </div>
        <div class="card info">
          <span class="ico"><Icon name="phone" :size="26" /></span>
          <h4>{{ t('about.phone') }}</h4>
          <a :href="'tel:' + profile.phone.replace(/\s/g, '')">{{ profile.phone }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
