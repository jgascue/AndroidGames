<template>
    <section class="section reviews">
        <div class="columns">
            <div class="column is-three-quarters">
                <h1 class="title is-size-2 has-text-black has-text-weight-bold">
                    {{ articles[0].title }}
                </h1>
                <h2 class="subtitle is-size-5">
                    {{ articles[0].subtitle }}
                </h2>

                <p>
                    <img :src="articles[1].img" :alt="articles[0].title" />
                    <!-- <strong> {{ stage.year }} </strong> -->
                </p>

                <p v-html="articles[1].body"></p>
                <p v-html="articles[1].body2"></p>
                <p v-if="articles[1].body3" v-html="articles[1].body3"></p>
                <p v-if="articles[1].body4" v-html="articles[1].body4"></p>
                <p></p>
                <p></p>
                <p v-if="articles[1].body5" v-html="articles[1].body5"></p>
                <p v-if="articles[1].body6" v-html="articles[1].body6"></p>
                <p v-if="articles[1].body7" v-html="articles[1].body7"></p>
                <p v-if="articles[1].body8" v-html="articles[1].body8"></p>

                <p></p>
                <p></p>
                <p v-if="articles[1].body9" v-html="articles[1].body9"></p>
                <p v-if="articles[1].body10" v-html="articles[1].body10"></p>
                <p v-if="articles[1].body11" v-html="articles[1].body11"></p>
                <p v-if="articles[1].body12" v-html="articles[1].body12"></p>
                <p>
                    Next Review:
                    <a v-if="articles[1].link" :href="articles[1].link">
                        {{ articles[1].linktext }}</a
                    >
                </p>
            </div>

            <div class="column is-one-quarters"></div>
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

            const subtitle = $(html).find('p.leading-normal').text()

            articles.push({
                title,
                subtitle,
            })

            $('#article', html).each(function () {
                const titleGame = $(html).find('h2').text()
                const img = $(html).find('.object-contain').attr('src')
                const text = $(html).find('.content-body').text()
                const body = $(html).find('p:first-child').text()
                const body2 = $(html).find('p:nth-child(2)').text()
                const body3 = $(html).find('p:nth-child(3)').text()
                const body4 = $(html).find('p:nth-child(4)').text()
                const body5 = $(html).find('p:nth-child(5)').text()
                const body6 = $(html).find('p:nth-child(6)').text()
                const body7 = $(html).find('p:nth-child(7)').text()
                const body8 = $(html).find('p:nth-child(8)').text()
                const body9 = $(html).find('p:nth-child(9)').text()
                const body10 = $(html).find('p:nth-child(10)').text()
                const body11 = $(html).find('p:nth-child(11)').text()
                const body12 = $(html).find('p:nth-child(12)').text()
                const link = $(html)
                    .find('.leading-loose:first-child a')
                    .attr('href')
                const linktext = $(html)
                    .find('.leading-loose:first-child a')
                    .text()
                articles.push({
                    titleGame,
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
                    body9,
                    body10,
                    body11,
                    body12,
                    link,
                    linktext,
                })
            })

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
            title: `Android Games: ${this.articles[0].title}. - Programs & Games Android`,
            meta: [
                {
                    hid: `Android Games: ${this.articles[0].title}`,
                    name: `Android Games: ${this.articles[0].title}`,
                    content: `Android Games: ${this.articles[0].title}`,
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
