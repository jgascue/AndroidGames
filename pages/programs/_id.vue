<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">    
      {{ params }}
      "Just start <b-icon icon="rocket" size="is-large" />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href=""> Antério Vieira </a>
    </h3>
  </section>
</template>


<script>

import axios from 'axios'

/* import {
    defineComponent,
    useFetch,
    useContext,
    ref,
} from '@nuxtjs/composition-api'
*/

export default {
    name: 'ProgramsPage',
    components: {},
    async asyncData({ params, error }) {
        const id = params.id
        try {
            const { data } = await axios.get(
                'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=android&api-key=EBJf2GTBMYvsdIEiRwdABGEqQ7CrY45p'
            )
            return {
                AllGames: data.response.docs,
                id
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
     async fetch() {
        this.article = await fetch(`https://www.nytimes.com/`).then(res =>
          res.json()
        )
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
