<template>
  <svg viewBox="0 0 200 200" role="img" aria-label="Avatar">
    <defs>
      <linearGradient id="av-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#e3e7ff" /><stop offset="1" stop-color="#f7e1ea" />
      </linearGradient>
      <radialGradient id="av-skin" cx="50%" cy="42%" r="65%">
        <stop offset="0" stop-color="#a56d49" /><stop offset="1" stop-color="#8a5535" />
      </radialGradient>
      <radialGradient id="av-hair" cx="50%" cy="40%" r="70%">
        <stop offset="0" stop-color="#3d2a47" /><stop offset="1" stop-color="#1b1226" />
      </radialGradient>
    </defs>

    <rect width="200" height="200" fill="url(#av-bg)" />
    <circle cx="164" cy="38" r="22" fill="#fff" opacity=".35" />
    <circle cx="32" cy="168" r="30" fill="#b9a4e6" opacity=".18" />

    <!-- cheveux afro (arrière) -->
    <g fill="url(#av-hair)">
      <circle cx="100" cy="62" r="44" />
      <circle cx="62" cy="72" r="30" />
      <circle cx="138" cy="72" r="30" />
      <circle cx="76" cy="42" r="26" />
      <circle cx="124" cy="42" r="26" />
      <circle cx="100" cy="32" r="26" />
      <circle cx="50" cy="100" r="22" />
      <circle cx="150" cy="100" r="22" />
      <circle cx="56" cy="126" r="13" />
      <circle cx="144" cy="126" r="13" />
    </g>

    <!-- cou -->
    <rect x="89" y="130" width="22" height="42" rx="9" fill="#7d4d32" />
    <ellipse cx="100" cy="146" rx="20" ry="8" fill="#5f3721" opacity=".4" />

    <!-- haut bleu -->
    <path d="M24 200C26 166 50 150 84 147L100 168L116 147C150 150 174 166 176 200Z" fill="#5b6ef5" />
    <path d="M84 147L100 168L116 147" fill="none" stroke="#4656d8" stroke-width="2" stroke-linejoin="round" />
    <path d="M89 151Q100 163 111 151" fill="none" stroke="#b9a4e6" stroke-width="1.4" />
    <circle cx="100" cy="162" r="2.6" fill="#b9a4e6" />

    <!-- oreilles et visage -->
    <ellipse cx="69" cy="106" rx="5" ry="8" fill="#8a5535" />
    <ellipse cx="131" cy="106" rx="5" ry="8" fill="#8a5535" />
    <path d="M70 94C70 72 84 60 100 60C116 60 130 72 130 94C130 120 118 142 100 144C82 142 70 120 70 94Z" fill="url(#av-skin)" />
    <ellipse cx="100" cy="78" rx="18" ry="7" fill="#fff" opacity=".1" />

    <!-- joues -->
    <ellipse cx="79" cy="118" rx="7" ry="4.5" fill="#e07a8a" opacity=".28" />
    <ellipse cx="121" cy="118" rx="7" ry="4.5" fill="#e07a8a" opacity=".28" />

    <!-- sourcils -->
    <g fill="none" stroke="#2a1a2e" stroke-width="3" stroke-linecap="round">
      <path d="M76 92Q86 86 96 91" /><path d="M104 91Q114 86 124 92" />
    </g>

    <!-- yeux -->
    <path d="M78 105Q86 99 94 105Q86 110 78 105Z" fill="#fff" />
    <path d="M106 105Q114 99 122 105Q114 110 106 105Z" fill="#fff" />
    <circle cx="86" cy="104.2" r="3.5" fill="#3a2318" /><circle cx="114" cy="104.2" r="3.5" fill="#3a2318" />
    <circle cx="87.2" cy="103" r="1.1" fill="#fff" /><circle cx="115.2" cy="103" r="1.1" fill="#fff" />
    <g fill="none" stroke="#1b1226" stroke-width="2.6" stroke-linecap="round">
      <path d="M77.5 104.5Q86 96 94.5 104" /><path d="M77.5 104.5L74.5 102.5" />
      <path d="M105.5 104Q114 96 122.5 104.5" /><path d="M122.5 104.5L125.5 102.5" />
    </g>

    <!-- nez et bouche -->
    <path d="M96 116Q100 120 104 116" fill="none" stroke="#6a3f28" stroke-width="2" stroke-linecap="round" />
    <path d="M91 126Q96 122 100 124Q104 122 109 126Q100 134 91 126Z" fill="#b04a68" />
    <path d="M91 126Q100 129 109 126" fill="none" stroke="#8f2f47" stroke-width="1.2" stroke-linecap="round" />
    <ellipse cx="100" cy="130" rx="4" ry="1.3" fill="#fff" opacity=".35" />

    <!-- ligne des cheveux -->
    <path d="M69 96C66 66 84 52 100 52C116 52 134 66 131 96C126 80 118 70 100 70C82 70 74 80 69 96Z" fill="url(#av-hair)" />

    <!-- boucles d'oreilles -->
    <circle cx="69" cy="117" r="3.6" fill="#b9a4e6" /><circle cx="131" cy="117" r="3.6" fill="#b9a4e6" />

    <!-- ordinateur portable -->
    <rect x="64" y="174" width="72" height="40" rx="7" fill="#f4f5ff" stroke="#cfd5ff" stroke-width="2" />
    <text x="100" y="193" text-anchor="middle" font-family="monospace" font-size="14" font-weight="700" fill="#5b6ef5">&lt;/&gt;</text>
  </svg>
</template>