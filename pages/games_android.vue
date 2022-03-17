<template>
    <section class="section">
        <div class="columns is-multiline">
<!--       <pre>
                {{ articles }}
            </pre>  -->
            <div class="column is-three-quarters">
             <!--    <h2 class="title is-size-4 is-2 has-text-black">
                    <b-icon icon="rocket" size="is-large" />
                    {{ articles[0].title }}
                </h2> -->
                
                <h1> {{ title1 }} </h1>
                <p class="subtitle has-text-primary">
                    {{ subtitle1}}
                </p>

                
           <!--      <p v-html="articles[0].body">

                </p> -->

          <!--       <pre>
                   {{ articles[0].body }}
                </pre> -->
                <div v-for="article of articles" :key="article">
                    <h2>
                        {{ article.title }}
                    </h2>
                    
         <!--         <video :src="articles.img"></video>
                 <video width="640" height="420" controls>
                    <source :src="articles.img" type="video/mp4">

                </video> -->

    <div class="aspect-radio">

                    <iframe
                        width="100%"
                        height="100%"
                        :src="article.img"
                        :srcdoc="article.imgvideo"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        :title="article.title"
                    >
                    </iframe>
                 
    </div>


<!-- 
                 <iframe :src="articles.img" frameborder="0"></iframe>
                 {{ article.img}} -->

                 <p>
                     {{ article.body }}
                 </p>
                 <!--    <h2 class="subtitle has-text-primary">
                        {{ article.innertitles }}
                    </h2> -->
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
/* import cheerio from 'cheerio' */

export default {
    name: 'GamesPage',
    components: {},
    /* async asyncData({ params, error }) {
        try {
            const { data } = await axios.get(
                'https://www.pcmag.com/picks/the-best-android-games'
                
            )
            const html = data
            const $ = cheerio.load(html)
            const articles = []
            const paragraf = []
            
            const title1 = $('h1').text()
            const subtitle1 = $('p.leading-normal').text()

            $('.roundup-product-card', html).each(function () {
                const title = $(this).find('h2').text()
                const subtitle = $(this).find('p.leading-normal').text()
                const img = $(this).find('iframe').attr('data-image-loader')
                const text = $(this).find('.content-body').text()
                const body = $(this).find('p').text()

                const imgvideo = $(this).find('ytp-cued-thumbnail-overlay-image').attr('style')

                const innertitles = $(html).find('h2').toArray().map(function(x){ return $(x).html()})
                const innertext = $(html).find('p').toArray().map(function(x){ return $(x).text()})
                const videos = $(html).find('img').toArray().map(function(x){ return $(x).attr('src')})

                articles.push({
                    title,
                    subtitle,
                    text,
                    innertitles,
                    imgvideo,
                    innertext,
                    videos,
                    img,
                    body
                })
            })

            return {
                data,
                title1,
                subtitle1,
                articles,
                paragraf,
            }
            
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        
    },} */
        async asyncData({ params, error }) {
        try {
            const { data } = await axios.get(
                'https://programsgamesandroid.com/api/games'
            )
            return {
                data
            }
            
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    },
    data() {
        return {
      /*       title1,
            subtitle1,
            articles,
            paragraf, */
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
        font-size: 2em;
    }

    h2,
    h2.font-bold {
        font-size: 1.83em;
        font-weight: bold;
        margin-top: 40px;
        margin-bottom: 10px;
        font-family: 'Fredoka', sans-serif;
    }
    a.group, .hawk-link-parsed, strong, .vanilla-image-block {
        display: none;
    }
   
    .js-content-entity-body.content-entity-body {
        overflow: hidden;
    }
    
    figure {
        text-align: start;
        position: relative;
        display: block ruby;
        padding: 8px;
        background: linear-gradient(90deg, yellow, #db05db);
        width: auto !important;
        margin: 10px 0;
        font-weight: bold;
        color: white;
    }

    .aspect-radio {
    }

    iframe {
        min-height: 400px;
        margin: 20px 0;
    }

</style>