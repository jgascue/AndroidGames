<template>
    <section class="section">
        <div class="columns is-multiline">

            <div class="column is-three-quarters">
                
                <h1 class="title has-text-black">
                    {{ data[0].title }}
                </h1>

                <div v-for="(game, index) in data" :key="index">
                    <h2 class="title warning mp-3">
                        <a v-if="game.link" :href="game.link.slice(21, 100)" :alt="game.title" >
                            {{ game.titleGame }}
                        </a>
                        <p v-else>
                            {{ game.titleGame }}
                        </p>
                    </h2>
        
                    <p>
                        {{ game.subtitle }}
                    </p>
                    <p>
                        {{ game.body }}
                    </p>

                    <p v-if="game.img">
                        
                        <iframe
                            width="100%"
                            height="100%"
                            :src="game.img"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        >
                        </iframe>
                    
                    </p>
                </div>


            </div>

            <div class="column is-one-quarter"></div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'GamesPage',
    components: {},
   
    async asyncData({ params, error }) {
        
        try {
            const { data } = await axios.get('https://www.programsgamesandroid.com/api/games/')
            return {
                data
            }
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    },
    data() {
        return {
            articles: []
        }
    },
    head() {
        return {
            title: 'Games Android free, Best Android games in 2022',
            meta: [
                {
                    hid: 'Games Android free, Best Android games in 2022',
                    name: 'Games Android free, Best Android games in 2022',
                    content:
                        'Games Android free, Best Android games in 2022, all games free to play',
                },
            ],
        }
    },
    methods: {
    },
}
</script>

<style scoped lang="scss">

    h1 {
        font-size: 2em;
    }

    h2,
    h2.font-bold {
        font-size: 1.83em;
        font-weight: bold;
        margin-top: 40px;
        margin-bottom: 10px;
        font-family: 'Fredoka', sans-serif;
        color: rgb(0, 145, 89);
    }
    a.group,
    .hawk-link-parsed,
    .vanilla-image-block {
        display: none;
    }

    .js-content-entity-body.content-entity-body {
        overflow: hidden;
    }

    figure {
        text-align: start;
        position: relative;
        display: block ruby;
        padding: 8px;
        background: linear-gradient(90deg, yellow, #db05db);
        width: auto !important;
        margin: 10px 0;
        font-weight: bold;
        color: white;
    }

    iframe {
        min-height: 400px;
        margin: 20px 0;
    }
</style>