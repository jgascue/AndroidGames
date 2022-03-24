<template>
    <footer class="footer">
        <div class="columns">
            
            <div class="column is-flex is-flex-direction-column is-3 p">
                <div>
                    <p class="bd-footer-link-title">
                        <nuxt-link to="https://www.android.com" target="_blank" rel="nofollow" class="">Android Oficial</nuxt-link>
                    </p>
                    <p class="bd-footer-link-title">
                        <nuxt-link to="https://android-developers.googleblog.com/" target="_blank" rel="nofollow" class="">Android Oficial Blog</nuxt-link>
                    </p>
                    <p class="bd-footer-link-title">
                        <nuxt-link to="https://developer.android.com/" rel="nofollow" target="_blank" class="">Android for Developers</nuxt-link>
                    </p>                                
                    <p class="bd-footer-link-title">
                        <nuxt-link to="https://android-developers.googleblog.com/" target="_blank" rel="nofollow" class="">Android developer Console</nuxt-link>
                    </p>
                </div>
            </div>

            <div class="column is-flex is-flex-direction-column is-3">
                <div>
                    <p class="bd-footer-link-title">  <nuxt-link to="/" target="_blank" rel="nofollow" class="">Android Programs </nuxt-link> </p>
                    <p class="bd-footer-link-title">  <nuxt-link to="/" target="_blank" rel="nofollow" class="">Android News </nuxt-link></p>
                    <p class="bd-footer-link-title">  <nuxt-link to="/" target="_blank" rel="nofollow" class="">Android Tech </nuxt-link></p>
                    <p class="bd-footer-link-title">  <nuxt-link to="/" target="_blank" rel="nofollow" class="">Android Mobiles </nuxt-link></p>
                </div>
            </div>
            
            <div class="column is-flex is-flex-direction-column is-3">
                <div>
                    <p class="bd-footer-link-title"> Android News</p>
                </div>
            </div>
            
            <div class="column is-flex is-justify-content-center is-flex-direction-column is-3">
                <div>
                    <p class="bd-footer-link-title" v-for="n in 2" :key="n"> Android Reviews</p>
                    <p class="bd-footer-link-title">
                        <nuxt-link to="https://www.androidauthority.com" target="_blank" rel="nofollow" class="">Android Authority </nuxt-link>
                    </p>
                    <p class="bd-footer-link-title">
                        <nuxt-link to="https://www.androidcentral.com"  target="_blank" rel="nofollow" class="">Android Central Resources</nuxt-link>
                    </p>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
import AppLogo from './AppLogo.vue'

export default {
    Components: {
        AppLogo,
    },
    name: 'AppFooter',
    props: {},
    data() {
        return {

        }
    },
}
</script>
