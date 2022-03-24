<template>
    <section>
        <b-sidebar
            v-model="open"
            :fullheight="fullheight"
            :fullwidth="fullwidth"
            :overlay="overlay"
            :right="false"
        >
            <div class="p-1">
                
                <b-menu v-for="(item, key) of items" :key="key" class="is-custom-mobile" 
                >
                    <b-menu-list>
                        <b-menu-item :icon="item.icon" :label="item.title" tag="router-link" :to="item.to"></b-menu-item>
                    </b-menu-list>
            
                </b-menu>

            </div>
        </b-sidebar>

        <div class="header">

            <span class="has-text-centered" href="/">
                <AppLogo />
            </span>

            <nav
                class="navbar has-background-success has-shadow is-flex"
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

                    <div class="navbar-burger"  @click="open = !open">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                
                </div>
            </nav>
        </div>
    </section>
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
            open: false,
            overlay: true,
            fullheight: true,
            fullwidth: false,
            right: true,
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
        background-color: rgb(26, 1, 29);
        color: white;
    }
/*     .b-sidebar {
        position:absolute;
        top: 230px;
        width: 250px;
        z-index: 111; 
        background: rgb(228, 253, 211);
    } */
    .p-1 {
        padding: 1em;
    }
    .menu-list {
        line-height: 2.2em;
    }
</style>
