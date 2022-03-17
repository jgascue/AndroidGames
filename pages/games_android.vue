<template>
    <section class="section">
        <div class="columns is-multiline">
<!--       <pre>
                {{ articles }}
            </pre>  -->
            <div class="column is-three-quarters">
                <img :src="articles[0].img" :alt="articles[0].title">
                <h2 class="title is-size-4 is-2 has-text-black">
                    <b-icon icon="rocket" size="is-large" />
                    {{ articles[0].title }}
                </h2>
                <p class="subtitle has-text-primary">
                    {{ articles[0].subtitle }}
                </p>

                <div v-for="(article, index) in articles" :key="index">
                    <h2 class="subtitle has-text-primary">
                        {{ article.innertitles }}
                    </h2>
                <!--      <p class="subtitle has-text-primary">
                        {{ article[index].innertext }}
                    </p> -->
                </div>
              <!--   <h2 class="subtitle has-text-primary" v-for=" item in  articles[0].innertitles" :key="item">
                    {{ item }}
                </h2> -->
              <!--   <p class="subtitle has-text-primary" v-for=" text in  articles[0].innertext" :key="text">
                    {{ text }}
                </p -->
                
                <!-- <p class="subtitle has-text-primary" v-for="video in  articles[0].videos" :key="video">
           
                </p> -->

         <!--        <pre>
                    <p>lalal
                        {{ articles }}
                    </p>
                </pre> -->
         <!--        <div v-for="point in paragraf" :key="point">
                    {{ point }}
                </div> -->
             <!--    <p v-html="articles[0].text"></p> -->
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
                'https://www.androidauthority.com/best-android-games-316202/'
                
            )
            const html = data
            const $ = cheerio.load(html)
            const articles = []
            const paragraf = []/* 
            const point = [] */

            $('.news-article', html).each(function () {
                const title = $(html).find('h1').text()
                const subtitle = $(html).find('p.strapline').text()
                const img = $(html).find('img.hero-image').attr('src')
                const text = $(html).find('.bodyCopy').text()
                const innertitles = $(html).find('h2').toArray().map(function(x){ return $(x).html()})
                const innertext = $(html).find('p').toArray().map(function(x){ return $(x).text()})
                const videos = $(html).find('img').toArray().map(function(x){ return $(x).attr('src')})

                articles.push({
                    title,
                    subtitle,
                    text,
                    innertitles,
                    innertext,
                    videos,  
                    img
                })
            })
/* 
            const pages = $('div.rich-text p'); */

            return {
                data,
                articles,
                paragraf,
               /*  pages, */
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
            title: 'Android Games Android',
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

<style  lang="scss">
    h1 {
        
        font-family: 'Fredoka', sans-serif;
    }
    h2,
    h2.font-bold {
        font-size: 2.5em;
        font-weight: bold;
        color:rgb(3, 72, 163);
        font-family: 'Fredoka', sans-serif;
    }
    a.group, .hawk-link-parsed, strong {
        display: none;
    }
 /*    .vanilla-image-block, .van-image-figure  {
        display: none;

    } */
</style>