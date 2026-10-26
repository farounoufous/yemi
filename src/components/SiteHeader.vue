<script setup>
const links = [
  { label: 'À propos', href: '#apropos' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Projets', href: '#projets' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-smoke/15 bg-ink">
    <nav
      class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10"
      aria-label="Navigation principale"
    >
      <a
        href="#top"
        class="flex h-9 w-9 items-center justify-center rounded-lg bg-mint text-sm font-bold text-ink transition-colors duration-300 hover:bg-claret hover:text-smoke"
        aria-label="Retour en haut"
      >
        FN
      </a>
      <ul class="flex items-center gap-5 text-sm font-medium text-smoke md:gap-9">
        <li v-for="l in links" :key="l.href">
          <a
            :href="l.href"
            class="relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-mint after:transition-transform after:duration-300 after:ease-premium hover:after:scale-x-100"
          >
            {{ l.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
