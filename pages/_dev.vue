<template>
    <section class="section">
        <div class="columns">
            <div class="column is-three-quarters">
            
      <!--       <pre>
                {{ params.dev }}

                {{articles}}
            </pre> -->
                <h1 v-if="articles[0].title" class="title is-size-2 has-text-black has-text-weight-bold">
                  Android:  {{ articles[0].title }}
                </h1>
                <h2 v-if="articles[0].subtitle" class="title is-size-4 has-text-black has-text-weight-bold">
                    {{ articles[0].subtitle }}
                </h2>
                <p>
                    <img  v-if="articles[0].image" class="imageContainer" :src="articles[0].image" :alt="articles[0].title">
                </p>
                <div  v-if="articles[0].intro" v-html=" articles[0].intro">
            
                </div>

                <p></p>
                <p></p>

                <h2 v-if="articles[0].secondTitle" class="subtitle mt-5 is-size-4 has-text-black has-text-weight-bold"> {{ articles[0].secondTitle }}</h2>

                <p v-html="articles[0].contentText"></p>
          
                 <p v-if="articles[0].textLink">
                    <a v-if="articles[0].link" :href="articles[0].link" :alt="articles[0].textLink">
                        {{ articles[0].textLink }}
                    </a>
                </p>

            </div>
            
            <div class="column is-one-quarters">
                <autority-component :params="params" /> 
            </div>
        </div>
    </section>
</template>


<script>

import axios from 'axios'
import cheerio from 'cheerio'
import AutorityComponent from '../components/AutorityComponent.vue'


export default {
    name: 'GamesPage',
    components: {
        AutorityComponent
    },  
    async asyncData({ params, error }) {
        const id = params.id
        const stage = params

        try {
            const { data } = await axios.get(
                `https://www.androidauthority.com/${params.dev}/`
            )
            const html = data
            const $ = cheerio.load(html)
            const articles = []
            const paragraf = []
            const h2titles = []
        

            $('main', html).each(function () {
                const title = $(html).find('h1').text()
                const subtitle = $(html).find('h1 + div').text()
                const image = $(html).find('img').attr('src')
                const intro = $(html).find('div > div > div > div:nth-child(2) > p').text()
                const secondTitle = $(html).find('div + hr + h2').text()
                const contentText = $(html).find('div > div > div > p').text()
                const linkshort = $(html).find('div > div > div > p > a:nth-child(2)').last().attr('href')
                const textLink = $(html).find('div > div > div > p > a:nth-child(2)').last().text()

                if (linkshort.includes('https://www.androidauthority.com/')) {
                   linkshort.slice(32)
                }

                const link = linkshort.slice(32)

                articles.push({
                    title,
                    subtitle,
                    image,
                    intro,
                    secondTitle,
                    contentText,
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
