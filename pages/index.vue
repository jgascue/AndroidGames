<template>
    <section class="section">
        <div class="columns is-mobile"></div>
<!--            <pre>
                {{ data }}
            </pre> -->
            <h1 class="is-size-2 has-text-weight-bold">Android Programs Games and much more</h1>
                <div >
                    <div v-for="article of data" :key="article.id" class="my-4 columns" >

                            <div class="column is-one-quarter">
                                <a :href="article.url">
                                    <img :src="article.img" :alt="article.title" />
                                </a>
                            </div>
                            <div class="column is-two-quarters">
                                <a :href="article.url">
                                    <h2 class="title is-4 is-family-sans-serif has-text-dark">
                                        <strong>
                                            {{ article.title}}
                                        </strong>  
                                    </h2>
                                </a>
                                <p class="subtitle" >{{ article.subtitle }}</p>
                                <p>
                                    <small> Description: {{ article.title }} </small>
                                </p>
                                <p>
                                    <small>
                                        Date: {{ article.time }}
                                    </small>
                                </p>
                                <p>
                                    {{ article.subtitle }}
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
                'https://programsgamesandroid.com/api/'
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
    }
}
</script>