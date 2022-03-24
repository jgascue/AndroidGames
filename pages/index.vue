<template>
    <section class="section">
        <div class="columns is-mobile"></div>

            <h1 class="is-size-2 title has-text-weight-bold">Android Programs Games and much more</h1>
                <div >
                    <div v-for="article of data" :key="article.id" class="my-4 columns" >
                            <div class="column is-one-quarter has-background-link">
                                <a :href="article.url" :alt="article.title">
                                    <img :src="article.img" :alt="article.title" class="is-rounded box p-1" />
                                </a>
                            </div>
                            <div class="column is-two-quarters">
                                <a :href="article.url" :alt="article.title">
                                    <h2 class="title is-4 is-family-sans-serif has-text-dark">
                                        <strong>
                                            {{ article.title}}
                                        </strong>  
                                    </h2>
                                </a>
                                <p class="subtitle" >{{ article.subtitle }}</p>
                                <p class="mb-1">
                                    <small class="mb-3"> Description: <strong>
                                        {{ article.title }}</strong> </small>
                                </p>
                                <p class="mb-3">
                                    <small>
                                        Date: {{ article.time.slice(0,20) }}
                                    </small>
                                </p>
                                <p class="final-text">
                                    <a :href="article.url" :alt="article.subtitle" class="has-text-info">
                                        {{ article.subtitle }}
                                    </a>
                                </p>
                            </div>
                            <div class="column column is-one-quarter">
                                   ...
                            </div>
                            
                        </div>
                    
                </div>
  
    </section>
</template>

<script>

import axios from 'axios'

export default {
    name: 'IndexPage',
    components: {},
    async asyncData({ params, error }) {
        try {
            const { data } = await axios.get(
                'https://www.programsgamesandroid.com/api/'
            )
            return {
                data
            }
            
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    },
    data() {
        
        return {
            AllGames: [],
        }
    },
    head() {
        return {
            title: 'Programs Games Android',
            meta: [
                {
                    hid: 'Programs and Games Android News. Play for free Games',
                    name: 'Programs Games Android',
                    content: 'Programs and Games Android, mobiles, Tech, PC, News, and much more . Play for free Games',
                },
            ],
        }
    }
}
</script>


<style scoped lang="scss">
    img {
        width: 100%;
    }
    .final-text {
        font-size: 14px;
        font-family: 'Rubik', sans-serif;
    }
</style>