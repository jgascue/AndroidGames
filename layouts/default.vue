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
      <aside class="column is-2 section">
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
          icon: 'lightbulb',
          to: { name: 'programs' },
        },
        {
          title: 'Games',
          icon: 'lightbulb',
          to: { name: 'games' },
        },
        {
          title: 'Android',
          icon: 'lightbulb',
          to: { name: 'android' },
        },
      ],
    }
  },
}
</script>
