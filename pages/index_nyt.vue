<template>
    <section class="section">
        <div class="columns is-mobile"></div>
        <ul>
            <li v-for="game of AllGames" :key="game.id" class="m-4">
                <div class="box">
                    <div class="columns">
                        <div class="column">
                            <a :href="game.web_url">
                                <h2 class="is-size-2 ">
                                    {{ game.snippet }}
                                </h2>
                            </a>
                            <a :href="game.web_url">
                                <img :src="`https://www.nytimes.com/${game.multimedia[0].url}`" :alt="game.snippet" />
                            </a>
                            <p >{{ game.lead_paragraph }}</p>
                            <p>
                                <small> Category: {{ game.section_name }} </small>
                            </p>
                            <p>
                                <small>
                                    Date: {{ game.pub_date }}
                                </small>
                            </p>
                            <p>Genre: {{ game.genre }} </p>
                            <p>Platform: {{ game.platform }}</p>
                            <p>
                                {{ game.short_description }}
                            </p>
                            <a :href="`/programs/${game.web_url.slice(24, )}`" >link</a>

                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>

import axios from 'axios'

/* import {
    defineComponent,
    useFetch,
    useContext,
    ref,
} from '@nuxtjs/composition-api'
*/

export default {
    name: 'IndexPage',
    components: {},
    
/*     middleware: 'api', */
/* 
    async asyncData({ params, error }) {
        try {
            const { data } = await axios.get(
                'http://localhost:3000/middleware/articles'
            )
            return {
                AllGames: data,
            }
            
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    }, */
    async asyncData({ params, error }) {
        try {
            const { data } = await axios.get(
                'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=android&api-key=EBJf2GTBMYvsdIEiRwdABGEqQ7CrY45p'
            )
            return {
                AllGames: data.response.docs,
            }
            
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
        
    }, 
    data() {
        
        return {
            AllGames: [],
            articles: [],
            
        }
    },
/*     async fetch() {
        this.data = await fetch(
            'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=android&api-key=EBJf2GTBMYvsdIEiRwdABGEqQ7CrY45p'
        ).then(res=> res.json())
        console.log(this.data);
    }, */
    head() {
        return {
            title: 'Android Games',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'all games free to play',
                },
            ],
        }
        
    },
    
}
</script>