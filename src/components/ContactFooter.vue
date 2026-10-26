<script setup>
import { reactive, ref } from 'vue'
import MagneticButton from './MagneticButton.vue'
import SectionLabel from './SectionLabel.vue'
import { profile } from '../data/content'

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

// Sans backend : ouvre le client mail avec le message pré-rempli.
// Pour un envoi direct, remplacer par un POST vers Formspree / une API Laravel.
function submit() {
  const subject = encodeURIComponent(`Contact portfolio — ${form.name}`)
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  sent.value = true
}

const fieldClass =
  'peer w-full border-0 border-b-2 border-ink/40 bg-transparent py-3 text-lg text-ink placeholder-transparent outline-none transition-colors duration-300 focus:border-claret'
const labelClass =
  'pointer-events-none absolute left-0 top-3 origin-left text-lg font-medium text-ink/70 transition-all duration-300 ease-premium peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-claret peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75'
</script>

<template>
  <footer id="contact">
    <div class="theme-mint bg-mint text-ink">
      <div class="mx-auto grid max-w-6xl gap-16 px-6 pb-28 pt-28 md:grid-cols-12 md:px-10 md:pb-36 md:pt-40">
        <div class="md:col-span-5">
          <SectionLabel v-reveal n="04" text="Contact" tone="mint" />
          <p
            v-reveal="{ delay: 100 }"
            class="mt-8 text-4xl font-semibold leading-[1.05] tracking-tightest md:text-6xl"
          >
            Construisons quelque chose de <span class="text-claret">solide.</span>
          </p>
          <div v-reveal="{ variant: 'pop', delay: 200 }" class="mt-12 flex items-center gap-4" aria-hidden="true">
            <div class="h-14 w-14 animate-spin-medium rounded-xl bg-claret motion-reduce:animate-none" />
            <div class="h-8 w-8 animate-float rounded-full bg-ink motion-reduce:animate-none" />
          </div>
        </div>

        <form
          v-reveal="{ delay: 140 }"
          class="space-y-10 md:col-span-6 md:col-start-7 md:pt-14"
          @submit.prevent="submit"
        >
          <div class="relative">
            <input id="name" v-model.trim="form.name" :class="fieldClass" type="text" name="name" placeholder="Nom" autocomplete="name" required />
            <label for="name" :class="labelClass">Nom</label>
          </div>
          <div class="relative">
            <input id="email" v-model.trim="form.email" :class="fieldClass" type="email" name="email" placeholder="Email" autocomplete="email" required />
            <label for="email" :class="labelClass">Email</label>
          </div>
          <div class="relative">
            <textarea id="message" v-model.trim="form.message" :class="[fieldClass, 'resize-none']" name="message" rows="4" placeholder="Message" required />
            <label for="message" :class="labelClass">Message</label>
          </div>

          <div class="flex items-center gap-5 pt-2">
            <MagneticButton type="submit" variant="ink">Envoyer</MagneticButton>
            <p v-if="sent" class="text-sm font-semibold" role="status">Votre messagerie s'ouvre…</p>
          </div>
        </form>
      </div>
    </div>

    <div class="bg-ink text-smoke">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-10"
      >
        <p class="text-smoke/70">© {{ new Date().getFullYear() }} {{ profile.name }}</p>
        <ul class="flex flex-wrap gap-x-8 gap-y-2 font-medium">
          <li><a :href="`mailto:${profile.email}`" class="transition-colors duration-300 hover:text-mint">{{ profile.email }}</a></li>
          <li><a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="transition-colors duration-300 hover:text-mint">LinkedIn</a></li>
          <li><a :href="profile.github" target="_blank" rel="noopener noreferrer" class="transition-colors duration-300 hover:text-mint">GitHub</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
