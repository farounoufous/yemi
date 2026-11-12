<template>
  <svg viewBox="0 0 200 200" role="img" aria-label="Avatar">
    <defs>
      <linearGradient id="av-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#e3e7ff" /><stop offset="1" stop-color="#f7e1ea" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#av-bg)" />

    <!-- cheveux afro (arrière) -->
    <g fill="#1f1530">
      <circle cx="100" cy="80" r="46" />
      <circle cx="100" cy="52" r="28" />
      <circle cx="72" cy="58" r="26" />
      <circle cx="128" cy="58" r="26" />
      <circle cx="58" cy="86" r="24" />
      <circle cx="142" cy="86" r="24" />
      <circle cx="56" cy="114" r="15" />
      <circle cx="144" cy="114" r="15" />
    </g>

    <!-- pull -->
    <path d="M30 200c2-30 22-46 54-50h32c32 4 52 20 54 50z" fill="#5b6ef5" />

    <!-- cou et visage -->
    <rect x="88" y="128" width="24" height="30" rx="10" fill="#7a4a30" />
    <ellipse cx="100" cy="102" rx="32" ry="37" fill="#8d5a3b" />

    <!-- ligne des cheveux -->
    <path d="M68 92c2-26 20-34 32-34s30 8 32 34c-10-12-20-20-32-20s-22 8-32 20z" fill="#1f1530" />

    <!-- sourcils, lunettes, yeux -->
    <g stroke="#1f1530" stroke-linecap="round">
      <path d="M74 93h18M108 93h18" stroke-width="3" />
      <g fill="none" stroke-width="3">
        <rect x="72" y="97" width="22" height="17" rx="6" /><rect x="106" y="97" width="22" height="17" rx="6" /><path d="M94 105h12" />
      </g>
    </g>
    <circle cx="83" cy="106" r="2.6" fill="#1f1530" /><circle cx="117" cy="106" r="2.6" fill="#1f1530" />

    <!-- joues, nez, sourire -->
    <ellipse cx="78" cy="120" rx="6" ry="4" fill="#d98a7a" opacity=".35" />
    <ellipse cx="122" cy="120" rx="6" ry="4" fill="#d98a7a" opacity=".35" />
    <path d="M97 116q3 3 6 0" stroke="#6b3d26" stroke-width="2" fill="none" stroke-linecap="round" />
    <path d="M89 126q11 9 22 0" stroke="#8a2f4a" stroke-width="3.5" fill="none" stroke-linecap="round" />

    <!-- casque -->
    <path d="M62 100C50 10 150 10 138 100" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" />
    <rect x="54" y="94" width="13" height="28" rx="6.5" fill="#b9a4e6" />
    <rect x="133" y="94" width="13" height="28" rx="6.5" fill="#b9a4e6" />

    <text x="100" y="186" text-anchor="middle" font-family="monospace" font-size="16" font-weight="700" fill="#fff">&lt;/&gt;</text>
  </svg>
</template>