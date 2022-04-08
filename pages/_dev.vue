<template>
    <section class="section">
        <div class="columns">
            <div class="column is-three-quarters">
            
            <pre>
                {{ params.dev }}

                {{articles}}
            </pre>
                <h1 class="title is-size-2 has-text-black has-text-weight-bold">
                  Android:  {{ articles[0].title }}
                </h1>
                <h2 class="title is-size-4 has-text-black has-text-weight-bold">
                    {{ articles[0].subtitle }}
                </h2>
                <p>
                    <img class="imageContainer" :src="articles[0].image" :alt="articles[0].title">
                </p>
                 <div v-html=" articles[0].intro">
                
                </div>
                <p>
                    {{ articles[0].content }}
                </p>

                 <p>
                   
                    <a :href="articles[0].link" :alt="articles[0].textLink">
                        {{ articles[0].textLink }}
                    </a>
                </p>

               <!--  <autority-component /> -->

               <!--  <autority-page-component /> -->
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
/* import AutorityPageComponent from '../components/AutorityPageComponent.vue' */


export default {
    name: 'GamesPage',
    components: {
 /*        AutorityPageComponent */
    },  
    async asyncData({ params, error }) {
        const id = params.id
        const stage = params

        try {
            const { data } = await axios.get(
         /*        `https://www.androidauthority.com/google-pixel-self-repair-3151037/` */
                `https://www.androidauthority.com/${params.dev}/`
              /*   'https://www.cnet.com/reviews/samsung-galaxy-s20-ultra-5g-review/' */
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
                const intro = $(html).find('ul').html()
                const content = $(html).find('div > div').text()
                const link = $(html).find('div > div + div > p + p > a').attr('href')
                const textLink = $(html).find('div > div + div > p + p > a').text()
/*                const baseImage = $(html).find('img.object-contain').attr('src')
                
                const content = articleContent */


                articles.push({
                    title,
                    subtitle,
                    image,
                    intro,
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
