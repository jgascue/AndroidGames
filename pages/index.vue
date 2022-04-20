<template>
    <section class="section">
            <div class="is-mobile"></div>

            <h1 class="is-size-2 title has-text-weight-bold">Android Programs, all about Games and much more</h1>

            <h2 class="is-size-4 title has-text-weight-bold has-text-primary">Know the last news about it</h2>
            
            <div class="columns">
                <div class="column is-one-quarter">
                    <div v-for="article of data" :key="article.id" class="my-4">
                        <div class="">
                            <div class="">
                                <a :href="article.url" :alt="article.title">
                                    <img :src="article.img" :alt="article.title" class="is-rounded box p-1" />
                                </a>
                            </div>
                            <div class="">
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
                            <div class="column is-one-quarter">
                            ...
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-half">
                    <autority-component :params="params" />
                </div>
                
            </div>
  
    </section>
</template>

<script>

import axios from 'axios'
import AutorityComponent from '../components/AutorityComponent.vue'

export default {
    name: 'IndexPage',
    components: {
        AutorityComponent
    },
    async asyncData({ params, error }) {
        try {
            const { data } = await axios.get(
                'http://localhost:3000/api/'
            )
            return {
                data,
                params
            }
            
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    },
    head() {
        return {
            title: 'Programs and Games Android, News, last trends reviews and best products',
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