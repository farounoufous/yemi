<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from './Icon.vue'
import { profile } from '../data/portfolio'

const { t } = useI18n()
const f = reactive({ name: '', email: '', phone: '', subject: '', message: '' })

// Ouvre le client mail. Pour un envoi direct, remplacez par EmailJS ou votre API.
function submit() {
  const body = `${f.message}\n\n${f.name} - ${f.email} - ${f.phone}`
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container narrow center">
      <span class="badge-loc">{{ t('contact.badge') }}</span>
      <h2 class="section-title tight">{{ t('contact.title') }}</h2>
      <p class="muted sub">{{ t('contact.subtitle') }}</p>

      <div class="card info wide">
        <span class="ico"><Icon name="mail" :size="26" /></span>
        <h4>{{ t('contact.email') }}</h4>
        <a :href="'mailto:' + profile.email">{{ profile.email }}</a>
      </div>
      <div class="card info wide">
        <span class="ico"><Icon name="phone" :size="26" /></span>
        <h4>{{ t('contact.phone') }}</h4>
        <a :href="'tel:' + profile.phone.replace(/\s/g, '')">{{ profile.phone }}</a>
      </div>
      <div class="card info wide">
        <span class="ico"><Icon name="pin" :size="26" /></span>
        <h4>{{ t('about.location') }}</h4>
        <span class="link-like">{{ t('about.locationValue') }}</span>
      </div>

      <form class="card form" @submit.prevent="submit">
        <label>{{ t('contact.name') }}<input v-model="f.name" required :placeholder="t('contact.namePh')" /></label>
        <label>{{ t('contact.email') }}<input v-model="f.email" type="email" required placeholder="nom@exemple.com" /></label>
        <label>{{ t('contact.phone') }}<input v-model="f.phone" type="tel" :placeholder="t('contact.phonePh')" /></label>
        <label>{{ t('contact.subject') }}<input v-model="f.subject" required :placeholder="t('contact.subjectPh')" /></label>
        <label>{{ t('contact.message') }}<textarea v-model="f.message" rows="5" required :placeholder="t('contact.messagePh')"></textarea></label>
        <button class="btn btn-dark" type="submit"><Icon name="send" :size="18" />{{ t('contact.send') }}</button>
      </form>
    </div>
  </section>
</template>
