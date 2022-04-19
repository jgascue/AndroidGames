<template>
    <section class="section">
        <div class="columns">
            <div class="column is-three-quarters">


                <h1 class="title is-size-2 has-text-black has-text-weight-bold">
                  Games:  {{ articles[0].title }}
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
                    <img class="imageContainer" :src="articles[0].baseImage" :alt="articles[0].title">
                </p>
                <p>
                    {{ articles[0].intro }}
                </p>
                <p>
                    {{ articles[0].content }}
                </p>

                 <p>
                   
                    <a :href="articles[0].link" :alt="articles[0].textLink">
                        {{ articles[0].textLink }}
                    </a>
                </p>
            </div>
            
            <div class="column is-one-quarters">
                ...  
            </div>
        </div>
    </section>
</template>


<script>
import axios from 'axios'
import cheerio from 'cheerio'

export default {
    name: 'GamesPage',
    components: {},
    
    async asyncData({ params, error }) {
        const id = params.id
        const stage = params

        try {
            const { data } = await axios.get(
                `https://www.pcmag.com/reviews/${params.games}`
              /*   'https://www.cnet.com/reviews/samsung-galaxy-s20-ultra-5g-review/' */
            )
            const html = data
            const $ = cheerio.load(html)
            const articles = []
            const paragraf = []
            const h2titles = []

            $('.article-header', html).each(function () {
                const title = $(html).find('h1').text()
                const subtitle = $(html).find('header .leading-normal').text()
                const intro = $(html).find('article > p:first-child').text()
                const baseImage = $(html).find('img.object-contain').attr('src')
                const textLink = $(html).find('ul.leading-loose > li:first-child').text()
                const link = $(html).find('ul.leading-loose > li:first-child > a').attr('href')
                const articleContent = $(html).find('article').text()
                const content = articleContent


                articles.push({
                    title,
                    subtitle,
                    intro,
                    baseImage,
                    content,
                    textLink,
                    link
                })
            })

            const subtitles = []
            const elements = []
            const filterlist = []

            return {
                params,
                stage,
                articles,
                h2titles,
                subtitles,
                elements,
                filterlist,
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
            articles: [],
        }
    },
  /*   head() {
        return {
            title: 'Programs Games Android' + ' | '/*  + this.articles[0].title 
            meta: [
                {
                    hid: this.articles[0].title,
                    name: this.articles[0].subtitle,
                    content: this.articles[0].title,
                },
            ],
        }
    }, */
    
    computed: { 

    },
/*     mounted () { 
        const imatges = this.$el.querySelector('img');
        imatges.classList.add('imatges-cool');
    } */
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

div {
    margin-bottom:20px;
}
h1,
h2,
h3 {
    font-weight: bold;
    font-family: 'Fredoka', sans-serif;
}

.body-page img {
    display: block;
    height: 355px !important;
    width: auto !important;
    border-radius: 10px 30px;
    float: left;
    margin-right: 40px;
    margin-bottom: 20px;
}

</style>
