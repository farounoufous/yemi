<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/portfolio'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterBar from '../components/FooterBar.vue'
import ProjectModal from '../components/ProjectModal.vue'

const route = useRoute()
const project = computed(() => projects.find((p) => p.id === route.params.id))
</script>

<template>
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <FooterBar />
  <ProjectModal v-if="project" :key="project.id" :project="project" />
</template>