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
                        has-text-grey-dark has-text-weight-semibold
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
                const imgdata = $('.imageContainer').find('img').attr('data-original')
                const text = $(html).find('.article-main-body').html()

                $('p', text).each(function () {

                    const point = $(text).find('p').text()
                    paragraf.push({
                        point
                    })
                })

                articles.push({
                    url,
                    time,
                    img,
                    imgdata,
                    text,
                })
            })

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
            slug: this.$route.params.slug,
            AllGames: [],
            articles: [],
        }
    },
    head() {
        return {
            title: 'Programs Games Android' + ' | ' + this.articles[0].title ,
            meta: [
                {
                    hid: this.articles[0].title,
                    name: this.articles[0].subtitle,
                    content: this.articles[0].title,
                },
            ],
        }
    },
    
    computed: { 

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
