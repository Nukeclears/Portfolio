<template>
  <div class="h-full">
    <div class="w-full shadow stats">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Fanstastic projects</div>
        <div class="stat-value text-primary">6</div>
        <div class="stat-desc">↗︎ 1</div>
      </div>
      <div class="stat">
        <div class="stat-figure text-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Finished projects</div>
        <div class="stat-value text-info">none lmao</div>
        <div class="stat-desc text-error">0</div>
      </div>
      <div class="stat">
        <div class="stat-figure text-info">
          <div class="avatar online">
            <div class="w-16 h-16 p-1 mask mask-squircle bg-base-100">
              <img
                src="https://avatars.githubusercontent.com/u/6865010?v=4"
                alt="Avatar Tailwind CSS Component"
                class="mask mask-squircle"
              />
            </div>
          </div>
        </div>
        <div class="stat-value">40%</div>
        <div class="stat-title">Progress on this thing</div>
        <div class="stat-desc text-info">probably a lot to do</div>
      </div>
    </div>
    <div class="hero h-full bg-base-200">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Vue stuff</h1>
          <p class="mb-5">idk kinda works?</p>
        </div>
      </div>
    </div>
  </div>
</template>