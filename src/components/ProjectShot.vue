<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  shot: { type: Object, required: true }, // { src, alt, device, chrome, label, width, height }
  tone: { type: String, default: 'mint' },
})

// Couleur de la « feuille » décalée derrière l'appareil (aplat, sans ombre)
const layers = { mint: 'bg-mint', claret: 'bg-smoke', smoke: 'bg-mint' }
const layer = computed(() => layers[props.tone] ?? 'bg-mint')
const isPhone = computed(() => props.shot.device === 'phone')

// Inclinaison 3D qui suit le curseur (souris uniquement, jamais au toucher)
const tilt = ref(null)
let frame = 0

function onMove(e) {
  if (e.pointerType !== 'mouse' || !tilt.value) return
  const r = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - r.left) / r.width) * 2 - 1
  const y = ((e.clientY - r.top) / r.height) * 2 - 1
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    tilt.value?.style.setProperty('--rx', x.toFixed(3))
    tilt.value?.style.setProperty('--ry', y.toFixed(3))
  })
}
function onLeave() {
  cancelAnimationFrame(frame)
  tilt.value?.style.setProperty('--rx', '0')
  tilt.value?.style.setProperty('--ry', '0')
}
</script>

<template>
  <figure
    class="relative m-0 overflow-hidden rounded-3xl border border-smoke/15 bg-ink px-5 pb-12 pt-16 md:px-14 md:pb-20 md:pt-20"
    @pointermove="onMove"
    @pointerleave="onLeave"
  >
    <!-- étiquette -->
    <figcaption
      class="absolute left-5 top-5 flex items-center gap-2.5 rounded-full border border-smoke/20 px-3.5 py-1.5 text-xs font-medium text-smoke/80 md:left-8 md:top-7"
    >
      <span class="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
      Aperçu · {{ shot.label }}
    </figcaption>

    <!-- formes plates décoratives -->
    <span class="shot-deco absolute right-[8%] top-10 h-14 w-14 rounded-full border-2 border-smoke/35" aria-hidden="true" />
    <span class="shot-deco shot-deco--late absolute bottom-10 left-[6%] h-5 w-5 rotate-45 bg-mint" aria-hidden="true" />
    <span class="absolute bottom-0 right-0 h-24 w-24 translate-x-1/2 translate-y-1/2 rounded-full bg-smoke/10" aria-hidden="true" />

    <div class="shot-stage mx-auto" :class="isPhone ? 'max-w-[250px] md:max-w-[285px]' : 'max-w-4xl'">
      <div class="shot-bob">
        <div ref="tilt" class="shot-tilt">
          <div class="relative">
            <!-- feuille décalée -->
            <span
              class="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5"
              :class="[layer, isPhone ? 'rounded-[2.4rem]' : 'rounded-xl']"
              aria-hidden="true"
            />

            <!-- cadre téléphone -->
            <div
              v-if="isPhone"
              class="relative overflow-hidden rounded-[2.4rem] border-[7px] border-smoke bg-ink"
            >
              <span
                class="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-ink"
                aria-hidden="true"
              />
              <img
                :src="shot.src"
                :alt="shot.alt"
                :width="shot.width"
                :height="shot.height"
                loading="lazy"
                decoding="async"
                class="block h-auto w-full"
              />
            </div>

            <!-- cadre navigateur -->
            <div v-else class="relative overflow-hidden rounded-xl border-2 border-smoke bg-smoke">
              <div v-if="shot.chrome !== false" class="flex items-center gap-3 border-b border-smoke/25 bg-ink px-4 py-2.5">
                <span class="flex gap-1.5" aria-hidden="true">
                  <span class="h-2.5 w-2.5 rounded-full bg-mint" />
                  <span class="h-2.5 w-2.5 rounded-full bg-smoke" />
                  <span class="h-2.5 w-2.5 rounded-full bg-smoke/40" />
                </span>
                <span class="min-w-0 flex-1 truncate rounded-full border border-smoke/20 px-3 py-0.5 text-center text-[11px] text-smoke/60">
                  {{ shot.label }}
                </span>
              </div>
              <img
                :src="shot.src"
                :alt="shot.alt"
                :width="shot.width"
                :height="shot.height"
                loading="lazy"
                decoding="async"
                class="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.shot-stage {
  perspective: 1400px;
}
/* flottement lent, indépendant de l'inclinaison */
.shot-bob {
  animation: shot-bob 7s ease-in-out infinite;
}
.shot-tilt {
  --rx: 0;
  --ry: 0;
  transform: rotateX(calc(var(--ry) * -6deg)) rotateY(calc(var(--rx) * 8deg));
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}
.shot-deco {
  animation: shot-bob 9s ease-in-out infinite reverse;
}
.shot-deco--late {
  animation-duration: 6s;
}
@keyframes shot-bob {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -12px, 0);
  }
}
@media (prefers-reduced-motion: reduce) {
  .shot-bob,
  .shot-deco {
    animation: none;
  }
  .shot-tilt {
    transform: none;
    transition: none;
  }
}
</style>
