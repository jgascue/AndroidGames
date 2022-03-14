<template>
    <div class="header">
        <span class="has-text-centered" href="/">
            <AppLogo />
        </span>
        <nav
            class="navbar header has-background-success has-shadow is-flex"
            role="navigation"
            aria-label="main navigation "
        >
            <div class="container is-flex is-align-items-center is-hidden-mobile">

              <div 
                v-for="(item, key) of items" :key="key"
                  class="menu-list is-align-items-flex-start "
                >
                  <NuxtLink :to="item.to" exact-active-class="is-active" class="has-text-primary">
                      <b-icon :icon="item.icon" /> {{ item.title }} 
                  </NuxtLink>
              </div>
            </div>
            <div class="navbar-brand has-text-centered">
              
                <div class="navbar-burger">
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


<style scoped>
.header {
    background-color: black;
    color: white;
}

.menu-list {
  line-height: 2.2em;
}
</style>
