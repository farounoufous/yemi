<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Icon from './Icon.vue'
import Shot from './Shot.vue'
import { slidesOf } from '../data/portfolio'

const props = defineProps({ project: Object })
const router = useRouter()
const { t } = useI18n()
const slides = slidesOf(props.project)
const idx = ref(0)
const title = () => t(`projects.items.${props.project.id}.title`)
const close = () => router.push({ name: 'home', hash: '#projects' })
const onKey = (e) => e.key === 'Escape' && close()

onMounted(() => { document.body.style.overflow = 'hidden'; window.addEventListener('keydown', onKey) })
onUnmounted(() => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) })
</script>

<template>
  <Teleport to="body">
    <div class="overlay" @click.self="close">
      <div class="modal" role="dialog" aria-modal="true" :aria-label="title()">
        <div class="m-top">
          <button class="close" :aria-label="t('projects.close')" @click="close"><Icon name="x" :size="18" /></button>
        </div>
        <div class="stage">
          <Shot :project="project" :slide="slides[idx]" :title="title()" />
          <span class="badge-dev">
            <Icon :name="slides[idx].device === 'mobile' ? 'smartphone' : 'monitor'" :size="18" />{{ t('devices.' + slides[idx].device) }}
          </span>
        </div>
        <div class="thumbs">
          <button v-for="(s, i) in slides" :key="i" :class="['thumb', { on: i === idx }]" @click="idx = i">
            <Shot :project="project" :slide="s" :title="title()" />
          </button>
        </div>
        <h2>{{ title() }}</h2>
        <p class="muted">{{ t(`projects.items.${project.id}.desc`) }}</p>
        <h3>{{ t('projects.tech') }}</h3>
        <div class="tags"><span v-for="tag in project.tags" :key="tag" class="tag grey">{{ tag }}</span></div>
        <template v-if="project.links.length">
          <h3>{{ t('projects.links') }}</h3>
          <div class="tags">
            <a v-for="l in project.links" :key="l.label" class="pill sm" :href="l.url" target="_blank" rel="noopener"><Icon name="link" :size="16" />{{ l.label }}</a>
          </div>
        </template>
      </div>
    </div>
  </Teleport>
</template>
