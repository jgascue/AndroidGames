<template>
    <section class="section">
        <div class="columns is-multiline">
          GAmes
            <pre>
                {{ articles }}
            </pre>
            <div class="column is-three-quarters">
                <img :src="articles[0].img" :alt="articles[0].title">
                <h2 class="title is-size-4 is-2 has-text-black">
                    <b-icon icon="rocket" size="is-large" />
                    {{ articles[0].title }}
                </h2>
                <p class="subtitle has-text-primary">
                    {{ articles[0].subtitle }}
                </p>
                <pre>
                    <p>
                        {{ paragraf }}
                    </p>
                </pre>
                <div v-for="point in paragraf" :key="point">
                    {{ point }}
                </div>
            </div>
            
            <div class="column is-one-quarter">
            </div>
        </div>

        <h3 class="subtitle is-6 has-text-grey"></h3>
        <pre>
    <!--       {{ data }} -->
      </pre
        >
    </section>
</template>

<script>
import axios from 'axios'
import cheerio from 'cheerio'

export default {
    name: 'GamesPage',
    components: {},
    async asyncData({ params, error }) {
        try {
            const { data } = await axios.get(
                'https://www.pcmag.com/picks/the-best-android-games/'
                
            )
            const html = data
            const $ = cheerio.load(html)
            const articles = []
            const paragraf = []/* 
            const point = [] */

            $('.article-header', html).each(function () {
                const title = $(html).find('h1').text()
                const subtitle = $(html).find('p.leading-normal').text()
                articles.push({
                    title,
                    subtitle,
                })
            })

            const pages = $('div.rich-text p');

            return {
                data,
                articles,
                paragraf,
                pages,
            }
            
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    },
    data() {
        return {
          AllGames: []
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
