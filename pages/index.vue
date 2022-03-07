<template>
    <section class="section">
        <div class="columns is-mobile"></div>
        <ul>
            <li v-for="game of AllGames" :key="game.id" class="m-4">
                <div class="box">
                    <div class="columns">
                        <div class="column">
                            <a :href="game.game_url">
                                <h2 class="is-size-2 ">
                                    {{ game.title }}
                                </h2>
                            </a>
                            <a :href="game.game_url">
                                <img :src="game.thumbnail" :alt="game.title" />
                            </a>
                            <p>
                                <small> Category: {{ game.genre }} </small>

                                <small>
                                    Release Date: {{ game.release_date }}
                                </small>
                            </p>
                            <p>Genre: {{ game.genre }} </p>
                            <p>Platform: {{ game.platform }}</p>
                            <p>
                                {{ game.short_description }}
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
/* import Card from '~/components/Card' */
/* import axios from 'axios' */
import axios from 'axios'

/* import {
    defineComponent,
    useFetch,
    useContext,
    ref,
} from '@nuxtjs/composition-api'

export default defineComponent({

  name: 'IndexPage',

  setup() {
    const AllGames = []
    const games = ref(null)
    const { $http } = useContext()

    useFetch(async () => {
      games.value = await $http
        .$get('https://www.freetogame.com/api/games?platform=pc')
        .then((games) => games.slice(0, 20))
    }); */

/*     head () {
      return {
        title: "lalala",
        name: "description",
        content: "all games free to play"
      }
    },  */

/*     return { 
      games,
      AllGames }
    }, */

/*   async asyncData ({ params, error}) {
    try {
      const { data } = await axios.get('https://www.freetogame.com/api/games')
      return {
        
      }
    }
    catch (err) {
      error ({ message: "something went wrong"})

    }
  },

}) */

export default {
    name: 'IndexPage',
    components: {},
    /*     head() {
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
    }, */
    async asyncData({ params, error }) {
        try {
            const { data } = await axios.get(
                'https://www.freetogame.com/api/games'
            )
            return {
                AllGames: data,
            }
        } catch (err) {
            error({ message: 'something went wrong', statusCode: err.code })
        }
    },

    data() {
        return {
            AllGames: [],
        }
    },
}
</script>