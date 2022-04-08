<template>
    <section class="section">
        <div class="columns">
            <div class="column is-three-quarters">
       <!--          <pre>
                    {{ articles }}
                </pre> -->
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

                <img class="imageContainer" :src="articles[1].img" :alt="articles[0].title">

                <div class="body-page" v-for="(list, i) in filterlist" :key="i" >

                <!--     <p v-for="(element) in filterlist[i]" :key="element"> -->
                     <div v-html="list[i]"></div>
                   <!--  </p> -->

                </div>

                           
                <div v-if="articles[1].nextTitleLink">
                    <a :href="articles[1].nextTitleLink">{{ articles[1].nextTitle }}</a>
                </div>
                <div v-if="articles[1].nextTitleLink2">
                    <a :href="articles[1].nextTitleLink2">{{ articles[1].nextTitle2 }}</a>
                </div>

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
    name: 'ProgramsPage',
    components: {},
    
    async asyncData({ params, error }) {
        const id = params.id
        const stage = params

        try {
            const { data } = await axios.get(
                `https://www.cnet.com/reviews/${stage.year}/${id}`
            )
            const html = data
            const $ = cheerio.load(html)
            const articles = []
            const paragraf = []
            const h2titles = []

            $('.c-reviewHeader', html).each(function () {
                const title = $(html).find('h1').text()
                const subtitle = $(html).find('.speakableTextDek').text()

                articles.push({
                    title,
                    subtitle,
                })
            })

/*             $('.c-pageReviewContent_body', html).each(function () {
                
                const url = $(html).find('a').attr('href')
                const img = $('.imageContainer').find('img').attr('src')
                const time = $(html).find('.assetTime').text()
                const text = $(html).find('.article-main-body').html()
                const nextTitle = $(html).find('.speakableTextP1').first().find('a').first().text()
                const nextTitleLink = $(html).find('.speakableTextP1').first().find('a').first().attr('href')
                const nextTitle2 = $(html).find('.speakableTextP2').first().find('a').first().text()
                const nextTitleLink2 = $(html).find('.speakableTextP2').first().find('a').first().attr('href')

                articles.push({
                    img,  
                    url,
                    time,
                    text,
                    nextTitle,
                    nextTitleLink,
                    nextTitle2,
                    nextTitleLink2,
                })
            }) */

            const subtitles = []
            const elements = []
            const filterlist = []
/* 
            $('.c-pageReviewContent_body', html).find('p').siblings().each(function (index, element) {
                const text = elements.push($(element).text())
            
                elements.push(text);

                const filtered = elements.filter(function(el, index) {
                    return index % 2 === 0;
                });

                filterlist.push(filtered)
            }) */

            return {
                data,
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
    mounted () { 
        const imatges = this.$el.querySelector('img');
        imatges.classList.add('imatges-cool');
    }
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
