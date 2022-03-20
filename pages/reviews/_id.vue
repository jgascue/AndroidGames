<template>
    <section class="section">
        <div class="columns">
            <div class="column is-three-quarters">

                <h1 class="title is-size-2 has-text-black has-text-weight-bold">
                    {{ articles[0].title }} 
                </h1>
               <!--  <pre>
                    {{ stage }}
                </pre> -->
                <p
                    class="
                        subtitle
                        is-size-4
                        has-text-black has-text-weight-semibold
                    "
                >
                <!--     {{ articles[0].subtitle }} -->
                </p>

                <p>
                    Category:

                    <!-- <strong> {{ stage.year }} </strong> -->
                </p>

                <h3 class="subtitle is-6 has-text-grey">Author: pcmag.com</h3>
                <!--         <img :src="articles[1].img" :alt="articles[0].title "/> -->

                <div v-html="articles[1].body"></div>
                    <p v-html="articles[1].body2"></p>
                    <p v-html="articles[1].body3"></p>
                    <p v-html="articles[1].body4"></p>
                    <p v-html="articles[1].body5"></p>
                    <p v-html="articles[1].body6"></p>
                    <p v-html="articles[1].body7"></p>
                    <p v-if="articles[1].body8" v-html="articles[1].body8"></p>
                    <p>
                        <a :href="articles[1].link"> Best  tech product 2022</a>
                    </p>
            </div>
            
            <div class="column is-one-quarters">
            </div>
        </div>
    </section>
</template>


<script>
import axios from 'axios'
import cheerio from 'cheerio'

export default {
    name: 'ProgramsPage',
    components: {},
    async asyncData({ params, error }) {
        const id = params.id
        const stage = params

        try {
            const { data } = await axios.get(
                `https://www.pcmag.com/reviews/${stage.id}`
            )
            const html = data
            const $ = cheerio.load(html)

            const articles = []
            const title = $(html).find('h1').text()

            articles.push({
                title,
            })

            $('#article', html).each(function () {
                const titleGame = $(html).find('h2').text()
                const subtitle = $(html).find('h3').text()
                const img = $(html).find('img').attr('src')
                const text = $(html).find('.content-body').text()
                const body = $(html).find('p:first-child').text()
                const body2 = $(html).find('p:nth-child(2)').text()
                const body3 = $(html).find('p:nth-child(3)').text()
                const body4 = $(html).find('p:nth-child(4)').text()
                const body5 = $(html).find('p:nth-child(5)').text()
                const body6 = $(html).find('p:nth-child(6)').text()
                const body7 = $(html).find('p:nth-child(7)').text()
                const body8 = $(html).find('p:nth-child(8)').text()
                const link = $(html).find('.rich-text a').attr('href')
                articles.push({
                    titleGame,
                    subtitle,
                    text,
                    img,
                    body,
                    body2,
                    body3,
                    body4,
                    body5,
                    body6,
                    body7,
                    body8,
                    link
                })
            })

/*             $('.article-main-body', html).each(function () {
                const url = $(html).find('a').attr('href')
                const img = $('.imageContainer').find('img').attr('src')
                const time = $(html).find('.assetTime').text()
                const code = $(html).remove($('.videoContainer'))

                const codeclean = $(code).find('.article-main-body')

                const text = codeclean.html()

                articles.push({
                    url,
                    time,
                    img,
                    text,
                })
            }) */

            return {
                data,
                stage,
                articles,
                id,
            }
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    },
    data() {
        return {
            articles: [],
        }
    },
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

<style>
html {
    font-family: 'Fredoka', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Fredoka', sans-serif;
}

p {
    margin: 10px 0;
}

h1,
h2,
h3 {
    font-weight: bold;
    font-family: 'Fredoka', sans-serif;
}
</style>
