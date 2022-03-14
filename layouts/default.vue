<template>
  <div>
<!--     
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav> -->

    <AppHeader />

    <section class="main-content columns">
      <aside class="column is-2 section  is-hidden-mobile">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <NuxtLink :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>

    </section>
  </div>
</template>

<script>


import AppHeader from '../components/AppHeader.vue'

export default {
  name: 'DefaultLayout',
  components: { AppHeader },
  data() {
    return {
        items: [
                {
                    title: 'Home',
                    icon: 'home',
                    to: { name: 'index' },
                },
                {
                    title: 'Programs',
                    icon: 'file-table',
                    to: { name: 'programs_android' },
                },
                {
                    title: 'Games',
                    icon: 'nintendo-game-boy',
                    to: { name: 'games_android' },
                },
                {
                    title: 'Android',
                    icon: 'bug',
                    to: { name: 'android_info' },
                },
                {
                    title: 'Mobile',
                    icon: 'cellphone-nfc',
                    to: { name: 'mobile_android' },
                },
                
                {
                    title: 'Tech',
                    icon: 'video-input-antenna',
                    to: { name: 'tech_android' },
                },
                
                {
                    title: 'News',
                    icon: 'new-box',
                    to: { name: 'news_android' },
                },
            ],
      }
  },
}
</script>
