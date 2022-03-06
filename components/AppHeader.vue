<template>
  <div>
    <a class="navbar-item has-text-centered" href="/">
      <AppLogo />
    </a>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand has-text-centered">
        <div class="navbar-burger">
          <!--            <span v-for="(item, key) of items" :key="key">
            <NuxtLink :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </span> -->
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import AppLogo from './AppLogo.vue'

export default {
  Components: {
    AppLogo,
  },
  name: 'AppHeader',
  props: {},
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
