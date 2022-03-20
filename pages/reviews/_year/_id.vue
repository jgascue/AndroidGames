<template>
    <section class="section">
        <div class="columns">
            <div class="column is-three-quarters">

                <h1 class="title is-size-2 has-text-black has-text-weight-bold">
                    {{ articles[0].title }}
                </h1>
                <p
                    class="
                        subtitle
                        is-size-4
                        has-text-black has-text-weight-semibold
                    "
                >
                    {{ articles[0].subtitle }}
                </p>

                <p>
                    Category:

                    <strong> {{ stage.year }} </strong>
                </p>

                <h3 class="subtitle is-6 has-text-grey">Author: cnet.com</h3>
                <!--         <img :src="articles[1].img" :alt="articles[0].title "/> -->

                <p v-html="articles[1].text"></p>
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
                `https://www.cnet.com/tech/${stage.year}/${id}`
            )
            const html = data
            const $ = cheerio.load(html)
            const articles = []
            const paragraf = []

            $('.content-header', html).each(function () {
                const title = $(html).find('h1').text()
                const subtitle = $(html).find('.c-head_dek').text()

                articles.push({
                    title,
                    subtitle,
                })
            })

            $('.article-main-body', html).each(function () {
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
            })

            /*             $('.article-main-body p', html).each(function () {
    /*         const text =  $('p').text(); */
            /*         const text = $('p').wrapInner().text();
            const test = $('.article-main-body p', text).each(function () {
                    text.push({
                    /* text, 
                    test,
                })

            })

                paragraf.push({
                    /* text,
                    text,
                })

            }) */

            /*      $('.article-main-body p', html).each(function () {
            const text = $('.article-main-body p').text();
                articles.push({
                    text
                })
            }) */

            /*  console.log(articles); */

            return {
                data,
                stage,
                articles,
                paragraf,
                id,
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
