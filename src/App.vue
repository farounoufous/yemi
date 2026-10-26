<script setup>
import ScrollProgress from './components/ScrollProgress.vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeBand from './components/MarqueeBand.vue'
import BioSection from './components/BioSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactFooter from './components/ContactFooter.vue'
</script>

<template>
  <ScrollProgress />
  <SiteHeader />
  <main>
    <HeroSection />
    <MarqueeBand />
    <BioSection />
    <TimelineSection />
    <ProjectsSection />
  </main>
  <ContactFooter />
</template>
